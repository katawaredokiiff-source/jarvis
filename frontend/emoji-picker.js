// JARVIS – Emoji Picker | frontend/emoji-picker.js

const EMOJI_DATA = {
  recentes: { label: "🕐 Recentes", emojis: [] },
  caras:    { label: "😊 Caras",    emojis: ["😀","😁","😂","🤣","😄","😅","😆","😉","😊","😋","😎","😍","🥰","😘","🙂","🤗","🤩","🤔","😐","😶","🙄","😏","😥","😮","😪","😫","🥱","😴","😛","😜","😝","😒","😓","😔","😕","🙃","🤑","😲","😖","😞","😟","😤","😢","😭","😨","😩","🤯","😬","😰","😱","🥵","🥶","😳","🤪","😵","🥴","😷","🤒","🤕","🤢","🤮","🤧","😇","🥳","🥺","🤠","🤡","🤫","🤭","🧐","🤓","😈","👿","💀","👻","👽","🤖","💩","😺","😸","😹","😻","😼","😽","🙀","😿","😾"] },
  gestos:   { label: "👋 Gestos",   emojis: ["👋","🤚","🖐️","✋","🖖","👌","🤌","🤏","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","👇","☝️","👍","👎","✊","👊","🤛","🤜","👏","🙌","👐","🤲","🤝","🙏","✍️","💅","🤳","💪","🦾","🦵","🦶","👂","👃","🧠","🦷","🦴","👀","👅","👄","💋","🩸"] },
  pessoas:  { label: "👤 Pessoas",   emojis: ["👶","🧒","👦","👧","🧑","👱","👨","🧔","👩","🧓","👴","👵","🙍","🙎","🙅","🙆","💁","🙋","🧏","🙇","🤦","🤷","👮","🕵️","💂","🧑‍⚕️","👨‍⚕️","👩‍⚕️","👩‍🍳","🧑‍🎓","👨‍🏫","👩‍🔬","🧑‍💻","👨‍🎤","👩‍🎨","🧑‍✈️","👨‍🚀","👩‍🚒","💆","💇","🚶","🧍","🧎","🏃","💃","🕺","🏆","🥇","🥈","🥉","🏅","🎖️"] },
  animais:  { label: "🐶 Animais",   emojis: ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🦆","🦅","🦉","🦇","🐺","🐴","🦄","🐝","🦋","🐌","🐞","🐜","🐢","🐍","🦎","🦑","🐙","🦀","🐟","🐬","🐳","🦈","🐊","🐘","🦒","🦘","🐕","🐈","🦔","🐿️","🦝","🦥","🐁","🐀"] },
  comida:   { label: "🍕 Comida",    emojis: ["🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥒","🌶️","🌽","🥕","🧄","🥔","🍞","🧀","🥚","🍳","🥞","🥓","🥩","🍗","🍖","🌭","🍔","🍟","🍕","🌮","🌯","🥗","🍝","🍜","🍲","🍛","🍣","🍱","🥟","🍤","🍙","🍚","🧁","🍰","🎂","🍭","🍬","🍫","🍿","🍩","🍪","☕","🍵","🍺","🍻","🥂","🍷","🍸","🍹","🧉","🍾"] },
  viagem:   { label: "✈️ Viagem",    emojis: ["🚗","🚕","🚙","🚌","🏎️","🚓","🚑","🚒","🛻","🚚","🚛","🏍️","🛵","🚲","🛴","🛹","⛽","🚨","🚥","🚦","🛑","🚧","⚓","⛵","🚤","🚢","✈️","🛩️","🛫","🛬","🪂","💺","🚁","🚂","🚆","🚇","🚊","🚉","🛸","🚀","🛰️","🛶","⛺","🏕️","🌋","🏔️","🎭","🎨","🎬","🎤","🎧","🎹","🥁","🎷","🎺","🎸","🎻","🎲","♟️","🎯","🎳","🎮","🎰","🧩"] },
  objetos:  { label: "💡 Objetos",   emojis: ["⌚","📱","💻","⌨️","🖥️","🖱️","💾","💿","📷","📹","🎥","📞","☎️","📺","📻","🧭","⏰","⌛","⏳","📡","🔋","🔌","💡","🔦","🕯️","💰","💵","💳","🪙","✉️","📧","📝","📁","📂","📅","📊","📋","📌","📍","🗺️","📎","📏","📐","✂️","🔒","🔓","🔑","🗝️","🔨","🛠️","🔧","🔩","⚙️","🔗","🧲","⚗️","🧪","🧬","🔭","🔬","🩺","💉","🩹","💊","🚪","🛋️","🚿","🛁","🧴","🧹","🧺","🧻","🧼","🧽","🛒","🪞","🛏️"] },
  simbolos: { label: "🔣 Símbolos",  emojis: ["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","☮️","✝️","☪️","🕉️","☸️","✡️","☯️","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","☢️","☣️","❌","⭕","🛑","⛔","🚫","💯","♻️","✅","⚠️","🔱","⚜️","🔰","❇️","✳️","❎","🌐","💠","🌀","💤","♿","⚧️","🎵","🎶","➕","➖","➗","✖️","♾️","💲","💱","™️","©️","®️","✔️","☑️","🔴","🟠","🟡","🟢","🔵","🟣","⚫","⚪","🟤","💬","💭","🗯️"] },
  esportes: { label: "⚽ Esportes",  emojis: ["⚽","🏀","🏈","⚾","🥎","🎾","🏐","🏉","🥏","🎱","🏓","🏸","🏒","🏑","🥍","🏏","🪃","🥅","⛳","🪁","🏹","🎣","🤿","🥊","🥋","🎽","🛹","🛼","🛷","⛸️","🥌","🎿","🎯","🪀","🔮","🪅","🎉","🎊","🎈","🎀","🎁","🏆","🥇","🥈","🥉","🏅","🎖️","🏵️"] },
};

class EmojiPicker {
  constructor({ inputSelector = "#messageInput", triggerSelector = "#emojiBtn" } = {}) {
    this.inputSel = inputSelector;
    this.triggerSel = triggerSelector;
    this.cat = "caras";
    this.q = "";
    this.isOpen = false;
    try { EMOJI_DATA.recentes.emojis = JSON.parse(localStorage.getItem("jarvis_recentes") || "[]"); } catch { EMOJI_DATA.recentes.emojis = []; }
    this._build();
    this._bind();
  }

  _build() {
    const p = document.createElement("div");
    p.id = "jarvis-emoji-picker";
    p.innerHTML = `
      <input class="ep-search" type="text" placeholder="🔍 Buscar emoji…" autocomplete="off"/>
      <div class="ep-cats">${Object.entries(EMOJI_DATA).map(([k,{label:l}])=>`<button class="ep-cat${k===this.cat?" active":""}" data-cat="${k}" title="${l}">${l.split(" ")[0]}</button>`).join("")}</div>
      <div class="ep-grid"></div>
      <div class="ep-footer"><span class="ep-preview"></span></div>`;
    document.body.appendChild(p);
    this.picker  = p;
    this.grid    = p.querySelector(".ep-grid");
    this.search  = p.querySelector(".ep-search");
    this.preview = p.querySelector(".ep-preview");
    this._render();
  }

  _render() {
    const list = this.q
      ? Object.values(EMOJI_DATA).flatMap(c => c.emojis).filter(e => e.includes(this.q))
      : (EMOJI_DATA[this.cat]?.emojis ?? []);
    this.grid.innerHTML = list.length
      ? list.map(e => `<button class="ep-emoji">${e}</button>`).join("")
      : `<p class="ep-empty">Nenhum emoji encontrado</p>`;
  }

  _insert(emoji) {
    const el = document.querySelector(this.inputSel);
    if (!el) return;
    const { selectionStart: s, selectionEnd: e, value: v } = el;
    el.value = v.slice(0, s) + emoji + v.slice(e);
    const pos = s + [...emoji].length;
    el.setSelectionRange(pos, pos);
    el.focus();
    el.dispatchEvent(new Event("input", { bubbles: true }));
    let l = EMOJI_DATA.recentes.emojis.filter(x => x !== emoji);
    l.unshift(emoji);
    EMOJI_DATA.recentes.emojis = l.slice(0, 24);
    localStorage.setItem("jarvis_recentes", JSON.stringify(EMOJI_DATA.recentes.emojis));
    if (this.cat === "recentes") this._render();
  }

  _bind() {
    const trigger = document.querySelector(this.triggerSel);
    if (trigger) trigger.addEventListener("click", e => { e.stopPropagation(); this.toggle(); });

    this.picker.querySelector(".ep-cats").addEventListener("click", e => {
      const b = e.target.closest(".ep-cat");
      if (!b) return;
      this.cat = b.dataset.cat;
      this.q = "";
      this.search.value = "";
      this.picker.querySelectorAll(".ep-cat").forEach(x => x.classList.toggle("active", x === b));
      this._render();
    });

    this.grid.addEventListener("click", e => { const b = e.target.closest(".ep-emoji"); if (b) this._insert(b.textContent); });
    this.grid.addEventListener("mouseover", e => { const b = e.target.closest(".ep-emoji"); this.preview.textContent = b ? b.textContent : ""; });
    this.grid.addEventListener("mouseleave", () => { this.preview.textContent = ""; });
    this.search.addEventListener("input", e => { this.q = e.target.value.trim(); this._render(); });
    document.addEventListener("click", e => { if (this.isOpen && !this.picker.contains(e.target) && !document.querySelector(this.triggerSel)?.contains(e.target)) this.close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && this.isOpen) this.close(); });
  }

  toggle() { this.isOpen ? this.close() : this.open(); }

  open() {
    const t = document.querySelector(this.triggerSel);
    if (t) {
      const r = t.getBoundingClientRect();
      r.top < 380
        ? (this.picker.style.bottom = "auto", this.picker.style.top = (r.bottom + 8 + scrollY) + "px")
        : (this.picker.style.top = "auto",    this.picker.style.bottom = (innerHeight - r.top + 8) + "px");
      this.picker.style.left = Math.min(r.left, innerWidth - 340) + "px";
    }
    this.picker.classList.add("open");
    this.isOpen = true;
    setTimeout(() => this.search.focus(), 80);
  }

  close() { this.picker.classList.remove("open"); this.isOpen = false; }
}

// Estilos
document.head.insertAdjacentHTML("beforeend", `<style>
#jarvis-emoji-picker{position:fixed;z-index:9999;width:320px;background:var(--ep-bg,#1e1e2e);border:1px solid var(--ep-border,rgba(255,255,255,.12));border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.5);display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(8px) scale(.97);pointer-events:none;transition:opacity .18s ease,transform .18s ease;font-family:inherit}
#jarvis-emoji-picker.open{opacity:1;transform:none;pointer-events:all}
.ep-search{margin:10px;width:calc(100% - 20px);background:var(--ep-search-bg,rgba(255,255,255,.07));border:1px solid var(--ep-border,rgba(255,255,255,.12));border-radius:8px;color:var(--ep-text,#cdd6f4);padding:7px 12px;font-size:.875rem;outline:none;transition:border-color .15s;box-sizing:border-box}
.ep-search:focus{border-color:var(--ep-accent,#89b4fa)}.ep-search::placeholder{color:var(--ep-muted,#585b70)}
.ep-cats{display:flex;overflow-x:auto;gap:2px;padding:0 8px 4px;scrollbar-width:none}.ep-cats::-webkit-scrollbar{display:none}
.ep-cat{flex-shrink:0;background:none;border:none;border-radius:8px;font-size:1.15rem;padding:5px 8px;cursor:pointer;opacity:.55;transition:opacity .12s,background .12s}
.ep-cat:hover{opacity:.9;background:var(--ep-hover,rgba(255,255,255,.08))}.ep-cat.active{opacity:1;background:var(--ep-accent-soft,rgba(137,180,250,.18))}
.ep-grid{display:grid;grid-template-columns:repeat(8,1fr);gap:2px;padding:6px 8px;max-height:260px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--ep-border,rgba(255,255,255,.12)) transparent}
.ep-emoji{background:none;border:none;border-radius:8px;font-size:1.35rem;line-height:1;padding:5px;cursor:pointer;transition:background .1s,transform .1s}
.ep-emoji:hover{background:var(--ep-hover,rgba(255,255,255,.1));transform:scale(1.2)}
.ep-empty{grid-column:1/-1;text-align:center;color:var(--ep-muted,#585b70);font-size:.85rem;padding:24px 0}
.ep-footer{display:flex;align-items:center;padding:4px 12px 8px;min-height:32px;border-top:1px solid var(--ep-border,rgba(255,255,255,.06))}.ep-preview{font-size:1.5rem;line-height:1;min-width:28px}
@media(max-width:480px){#jarvis-emoji-picker{width:calc(100vw - 16px);left:8px !important}.ep-grid{grid-template-columns:repeat(7,1fr)}}
</style>`);

window.EmojiPicker = EmojiPicker;
