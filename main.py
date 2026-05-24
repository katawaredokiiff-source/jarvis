import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

from core.prompt_mestre import PromptMestre
from services.ia_service import IAService


app = Flask(
    __name__,
    static_folder='frontend',
    static_url_path=""
)

CORS(app)

prompt_mestre = PromptMestre()
ia_service = IAService()


@app.route("/")
def main2():
    """
    Serve o arquivo main2.html.
    """
    return send_from_directory(app.static_folder, "main2.html")

@app.route("/emoji-picker.js")
def emoji_picker():
    return send_from_directory(app.static_folder, "emoji-picker.js")

@app.route("/chat", methods=['POST'])
def chat():

    dados = request.get_json()

    if not dados:
        return jsonify({"erro": "Nenhum dado recebido."}), 400

    mensagem_usuario = dados.get("mensagem", "").strip()
    historico = dados.get("historico", [])

    if not mensagem_usuario:
        return jsonify({"erro": "A mensagem não pode estar vazia."}), 400

    historico.append({
        "role": "user",
        "content": mensagem_usuario
    })

    try:

        system_prompt = prompt_mestre.gerar_prompt(mensagem_usuario)

        resposta_ia = ia_service.enviar_mensagem(
            historico,
            system_prompt
        )

        return jsonify({
            "resposta": resposta_ia
        })

    except Exception as e:

        print(f"[ERRO] {e}")

        return jsonify({
            "erro": str(e)
        }), 500


@app.route("/status")
def status():

    return jsonify({
        "status": "online",
        "bot": "TutorBot"
    })


if __name__ == "__main__":

    print("=" * 55)
    print(" SportBot rodando!")
    print(" Acesse: http://localhost:5000")
    print(" API: http://localhost:5000/chat")
    print(" Status: http://localhost:5000/status")
    print("=" * 55)

    app.run(debug=True, port=5000)