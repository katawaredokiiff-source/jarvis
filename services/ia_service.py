import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

class IAService:

    MODELO = "llama-3.3-70b-versatile"
    MAX_TOKENS = 1024

    def __init__(self):
        self.cliente = Groq(api_key=os.getenv("GROQ_API_KEY"))

    def enviar_mensagem(self, historico: list, system_prompt: str) -> str:
        try:
            mensagens = [{"role": "system", "content": system_prompt}] + historico

            resposta = self.cliente.chat.completions.create(
                model=self.MODELO,
                messages=mensagens,
                max_tokens=self.MAX_TOKENS
            )

            return resposta.choices[0].message.content

        except Exception as e:
            mensagem = str(e)
            if "401" in mensagem or "invalid_api_key" in mensagem.lower():
                raise Exception("Erro de autenticação: verifique sua REMOVIDO.")
            elif "429" in mensagem or "rate_limit" in mensagem.lower():
                raise Exception("Limite de requisições atingido. Aguarde um momento.")
            else:
                raise Exception(f"Erro na API da Groq: {mensagem}")


if __name__ == "__main__":
    servico = IAService()

    historico_teste = [
        {"role": "user", "content": "Olá! o que você pode me dizer sobre os últimos resultados do futebol?"}
    ]
    system_prompt = "Você é um SportBot, um assistente virtual especializado em esportes. Responda de forma clara e objetiva às perguntas relacionadas a esportes."

    print("Enviando mensagem de teste para a IA (Groq)...")
    resposta = servico.enviar_mensagem(historico_teste, system_prompt)
    print(resposta)