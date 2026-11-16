/* ===== Samuel Rios Dev — questionnaire interactif ===== */
(() => {
  "use strict";

  /* ---------- configuration ---------- */
  const CONFIG = {
    whatsapp: "33758105314",              // 07 58 10 53 14 au format international
    email: "contactosamuel.rr@gmail.com",
    priceFrom: 200,
  };

  /* ---------- icônes (SVG maison) ---------- */
  const svg = (inner, cls = "ico") => `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true">${inner}</svg>`;
  const I = {
    rdv: svg(`<rect class="f-cream" x="7" y="10" width="34" height="31" rx="5"/><path class="f-coral" d="M7 15a5 5 0 0 1 5-5h24a5 5 0 0 1 5 5v4H7z"/><path d="M16 6v8M32 6v8"/><path class="s-teal" d="M17 30l5 5 9-10"/>`),
    agenda: svg(`<circle class="f-mus" cx="24" cy="25" r="16"/><circle class="f-cream" cx="24" cy="25" r="11"/><path d="M24 18v7l5 3"/><path d="M19 6h10"/>`),
    rappels: svg(`<path class="f-teal" d="M13 33V22a11 11 0 0 1 22 0v11l3 4H10z"/><path d="M20 40a4 4 0 0 0 8 0"/><circle class="f-coral" cx="35" cy="12" r="4.5"/>`),
    paiements: svg(`<rect class="f-navy" x="5" y="12" width="38" height="25" rx="5" stroke="#1E2D45" stroke-width="2"/><rect class="f-mus" x="10" y="18" width="9" height="7" rx="1.5"/><circle class="f-coral" cx="37" cy="35" r="7"/><path class="s-white" d="M38.5 32.3a3 3 0 1 0 0 5.4M34 34h4M34 36h4" stroke-width="1.6"/>`),
    galerie: svg(`<rect class="f-cream" x="6" y="9" width="36" height="30" rx="5"/><circle class="f-mus" cx="17" cy="19" r="4"/><path class="f-teal" d="M7 35l11-11 7 7 5-5 11 11v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/>`),
    avis: svg(`<path class="f-mus" d="M24 6l5.5 11.2 12.3 1.8-8.9 8.7 2.1 12.3L24 34.2 13 40l2.1-12.3-8.9-8.7 12.3-1.8z"/>`),
    click: svg(`<path class="f-coral" d="M9 17h30l-2.5 22a3 3 0 0 1-3 2.7h-19a3 3 0 0 1-3-2.7z"/><path d="M17 20v-5a7 7 0 0 1 14 0v5"/><path class="s-white" d="M18 30l4 4 8-8"/>`),
    carte: svg(`<rect class="f-cream" x="9" y="6" width="30" height="36" rx="4"/><path d="M16 14v8a3 3 0 0 0 6 0v-8M19 14v28"/><path class="f-mus" d="M30 14c-3 2-3 9 0 11v17"/>`),
    contact: svg(`<path class="f-teal" d="M7 11a4 4 0 0 1 4-4h26a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H19l-9 8v-8H11a4 4 0 0 1-4-4z"/><path class="s-white" d="M15 17h18M15 23h11"/>`),
    multi: svg(`<circle class="f-teal" cx="24" cy="24" r="17"/><ellipse class="f-teal" cx="24" cy="24" rx="7" ry="17"/><path d="M7 24h34M10 15h28M10 33h28"/>`),
    // activités
    beaute: svg(`<circle class="f-coral" cx="14" cy="34" r="6"/><circle class="f-coral" cx="34" cy="34" r="6"/><path d="M18 30L34 7M30 30L14 7"/>`),
    resto: svg(`<circle class="f-cream" cx="24" cy="27" r="14"/><circle class="f-mus" cx="24" cy="27" r="8"/><path d="M6 8v9a3 3 0 0 0 3 3v20M9 8v8M12 8v9a3 3 0 0 1-3 3"/><path class="f-coral" d="M42 8c-3 2-4 8-1 12v20"/>`),
    artisan: svg(`<path class="f-mus" d="M8 40l16-16"/><path class="f-mus" d="M6 38l4 4 14-14-4-4z"/><path class="f-teal" d="M27 6l6 0 2 4 6 1v5l-13 3-4-4z"/><path d="M27 15l-3 3"/>`),
    sante: svg(`<path class="f-coral" d="M24 41S7 31 7 18a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 13-17 23-17 23z"/><path class="s-white" d="M24 18v12M18 24h12"/>`),
    commerce: svg(`<path class="f-cream" d="M8 20v20h32V20"/><path class="f-coral" d="M6 20l3-12h30l3 12a6 6 0 0 1-12 0 6 6 0 0 1-12 0 6 6 0 0 1-12 0z"/><rect class="f-mus" x="20" y="28" width="8" height="12"/>`),
    autre: svg(`<rect class="f-mus" x="7" y="7" width="15" height="15" rx="3"/><rect class="f-coral" x="26" y="7" width="15" height="15" rx="3"/><rect class="f-teal" x="7" y="26" width="15" height="15" rx="3"/><rect class="f-cream" x="26" y="26" width="15" height="15" rx="3"/>`),
    // site actuel
    none: svg(`<rect class="f-cream" x="12" y="5" width="24" height="38" rx="5"/><path d="M20 38h8"/><path class="f-coral" d="M18 17l12 12M30 17L18 29" stroke="#E2644F" stroke-width="3"/>`),
    redo: svg(`<rect class="f-cream" x="12" y="5" width="24" height="38" rx="5"/><path d="M30 20a7 7 0 1 0 1 6" stroke="#2A837C" stroke-width="3"/><path d="M31 14v6h-6" stroke="#2A837C" stroke-width="3"/>`),
    plus: svg(`<rect class="f-cream" x="12" y="5" width="24" height="38" rx="5"/><rect class="f-mus" x="16" y="10" width="16" height="9" rx="2"/><circle class="f-teal" cx="33" cy="33" r="9"/><path class="s-white" d="M33 29v8M29 33h8"/>`),
  };
  const tick = `<span class="tick"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></span>`;

  /* ---------- données ---------- */
  const ACTIVITES = [
    { id: "beaute", label: "Beauté & coiffure" },
    { id: "resto", label: "Restaurant & café" },
    { id: "artisan", label: "Artisan & BTP" },
    { id: "sante", label: "Santé & bien-être" },
    { id: "commerce", label: "Commerce & boutique" },
    { id: "autre", label: "Autre activité" },
  ];
  const SITE = [
    { id: "none", label: "Non, pas encore" },
    { id: "redo", label: "Oui, mais à refaire" },
    { id: "plus", label: "Oui, à compléter" },
  ];
  const BLOCS = [
    { id: "rdv", label: "Rendez-vous en ligne" },
    { id: "agenda", label: "Agenda" },
    { id: "rappels", label: "Rappels clients" },
    { id: "paiements", label: "Paiements en ligne" },
    { id: "galerie", label: "Galerie photos" },
    { id: "avis", label: "Avis clients" },
    { id: "click", label: "Click & collect" },
    { id: "carte", label: "Menu / Tarifs" },
    { id: "contact", label: "Formulaire de contact" },
    { id: "multi", label: "Multilingue FR · DE · EN" },
  ];
  // blocs conseillés selon l'activité
  const CONSEILS = {
    beaute: ["rdv", "rappels", "galerie"],
    resto: ["carte", "avis", "click"],
    artisan: ["galerie", "avis", "contact"],
    sante: ["rdv", "agenda", "rappels"],
    commerce: ["click", "paiements", "galerie"],
    autre: ["contact", "avis", "galerie"],
  };
  const VILLES = [
    { id: "Besançon", x: 54, y: 62, tx: 64 },
    { id: "Valdahon", x: 132, y: 128, tx: 142 },
    { id: "Morteau", x: 196, y: 178, tx: 112, left: true },
    { id: "Pontarlier", x: 150, y: 248, tx: 160 },
  ];
  const DELAIS = [
    { id: "Dès que possible", hint: "🔥 Urgent" },
    { id: "Dans le mois", hint: "Bientôt" },
    { id: "Dans 2–3 mois", hint: "Je prépare" },
    { id: "Je me renseigne", hint: "Sans engagement" },
  ];
  const MOMENTS = ["Matin", "Midi", "Après-midi", "Soir"];

  /* ---------- état ---------- */
  const params = new URLSearchParams(location.search);
  const state = {
    step: 0,
    activite: null, site: null, blocs: [], ville: null,
    delai: null, prenom: "", entreprise: "", moment: null,
    src: params.get("src") || params.get("utm_source") || "",
  };

  /* ---------- étapes ---------- */
  const STEPS = [
    { id: "intro", bg: "navy", render: renderIntro },
    { id: "activite", bg: "teal", render: renderActivite },
    { id: "site", bg: "coral", render: renderSite },
    { id: "blocs", bg: "teal", render: renderBlocs },
    { id: "ville", bg: "mustard", render: renderVille },
    { id: "delai", bg: "navy", render: renderDelai },
    { id: "contact", bg: "cream", render: renderContact },
    { id: "resume", bg: "cream", render: renderResume },
  ];
  const QUESTION_COUNT = STEPS.length - 2; // sans intro ni résumé

  const $stage = document.getElementById("stage");
  const $progress = document.getElementById("progress");
  const $back = document.getElementById("back");

  $progress.innerHTML = "<i></i>".repeat(QUESTION_COUNT);
  $back.addEventListener("click", () => go(state.step - 1));

  function go(n) {
    n = Math.max(0, Math.min(STEPS.length - 1, n));
    const cur = $stage.firstElementChild;
    const draw = () => {
      state.step = n;
      const s = STEPS[n];
      document.body.dataset.bg = s.bg;
      document.body.dataset.step = s.id;
      $back.hidden = n === 0;
      [...$progress.children].forEach((el, i) => el.classList.toggle("on", i < n));
      $progress.style.visibility = n === 0 ? "hidden" : "visible";
      $stage.innerHTML = "";
      const el = document.createElement("section");
      el.className = "screen " + s.id;
      $stage.appendChild(el);
      s.render(el);
      window.scrollTo({ top: 0 });
      const h = el.querySelector("h1, h2");
      if (h && n > 0) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    };
    if (cur) { cur.classList.add("leaving"); setTimeout(draw, 180); } else draw();
  }
  const next = () => go(state.step + 1);

  const title = (small, big, tag = "h2") =>
    `<${tag} class="title"><span class="sticker">${small}</span><span class="sticker big">${big}</span></${tag}>`;

  /* ---------- écrans ---------- */
  function renderIntro(el) {
    const stars = [[8, 30], [22, 70], [40, 20], [64, 54], [80, 110], [14, 150], [52, 130], [90, 40]]
      .map(([x, y], i) => `<span class="star" style="left:${x}%;top:${y}px;animation-delay:${i * .3}s">✦</span>`).join("");
    el.innerHTML = `
      <div class="sky">${stars}<div class="moon"></div></div>
      ${title("Et si votre entreprise", "travaillait…", "h1")}
      <span class="sticker" style="margin:-6px 0 0 34px;transform:rotate(1.5deg);font-size:15px">même pendant que vous dormez ?</span>
      <div class="notifs">
        <div class="notif" style="animation-delay:.5s"><i class="dot" style="background:var(--teal)"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></i>Nouveau rendez-vous <span>· mar. 10h</span></div>
        <div class="notif" style="animation-delay:.9s"><i class="dot" style="background:var(--coral)"><svg viewBox="0 0 24 24"><path d="M6 12h12"/></svg></i>Paiement reçu <span>· en ligne</span></div>
      </div>
      <p class="intro-sub">Composez votre futur site <b>en 1 minute</b> : choisissez vos blocs, je vous recontacte avec une proposition.</p>
      <div class="spacer"></div>
      <div class="house-scene" aria-hidden="true">
        <svg viewBox="0 0 400 130" preserveAspectRatio="none">
          <path d="M0 70 C80 40 160 90 240 65 S360 50 400 60 V130 H0z" fill="#1F6A64"/>
          <path d="M0 95 C90 75 180 110 270 88 S370 80 400 85 V130 H0z" fill="#2A837C"/>
        </svg>
        <svg class="house" viewBox="60 0 280 150">
          <path d="M80 40 L200 0 L320 40 Z" fill="#EEE6D8"/>
          <rect x="100" y="40" width="200" height="110" fill="#E2644F"/>
          <rect x="125" y="62" width="50" height="40" rx="4" fill="#E2A63D"/>
          <rect x="210" y="80" width="40" height="70" fill="#1E2D45"/>
          <rect x="220" y="50" width="60" height="22" rx="4" fill="#EEE6D8"/>
          <text x="250" y="66" text-anchor="middle" font-family="Nunito" font-weight="900" font-size="15" fill="#1E2D45">24h/24</text>
        </svg>
      </div>
      <div class="ground">
        <button class="cta" id="start">Créer mon site <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
        <div class="mini-meta"><span>⏱ 1 min</span><span>👆 Sans écrire</span><span>💶 Dès ${CONFIG.priceFrom} €</span></div>
        <p class="foot">Création de sites web · Doubs &amp; alentours</p>
      </div>`;
    el.querySelector("#start").addEventListener("click", next);
  }

  function singleTiles(el, items, key, cols = "") {
    const grid = document.createElement("div");
    grid.className = "grid " + cols;
    grid.setAttribute("role", "radiogroup");
    grid.innerHTML = items.map((o, i) => `
      <button class="tile ${state[key] === o.id ? "selected" : ""}" role="radio" aria-checked="${state[key] === o.id}" data-id="${o.id}" style="animation-delay:${i * 50}ms">
        ${tick}${I[o.id] || ""}<span>${o.label}</span>
      </button>`).join("");
    grid.addEventListener("click", (e) => {
      const b = e.target.closest(".tile"); if (!b) return;
      state[key] = b.dataset.id;
      grid.querySelectorAll(".tile").forEach(t => { const on = t === b; t.classList.toggle("selected", on); t.setAttribute("aria-checked", on); });
      setTimeout(next, 380);
    });
    el.appendChild(grid);
  }

  function renderActivite(el) {
    el.innerHTML = title("Parlons de", "votre activité") + `<p class="hint">Touchez celle qui vous ressemble.</p>`;
    singleTiles(el, ACTIVITES, "activite");
  }

  function renderSite(el) {
    el.innerHTML = title("Vous avez déjà", "un site web ?");
    singleTiles(el, SITE, "site", "rows");
    el.insertAdjacentHTML("beforeend", `<div class="spacer"></div>
      <p class="hint" style="text-align:center;margin:0">Votre propre site, prêt à partir d'une semaine.</p>`);
  }

  function phoneHTML(ids) {
    const blocks = ids.length
      ? ids.map((id, i) => {
          const b = BLOCS.find(x => x.id === id);
          return `<div class="pblock" style="animation-delay:${i * 40}ms">${I[id]}<span>${b.label}</span></div>`;
        }).join("")
      : `<div class="empty">Ajoutez des blocs 👆</div>`;
    return `<div class="phone" aria-hidden="true"><div class="screen-in">
      <div class="bar"></div><div class="hero"></div><div class="line"></div><div class="line short"></div>
      ${blocks}<span class="pbtn">${ids.includes("rdv") ? "Réserver" : "Contact"}</span>
    </div></div>`;
  }

  function tierFor(n) { return n <= 2 ? "Essentiel" : n <= 5 ? "Pro" : "Complet"; }

  function renderBlocs(el) {
    const conseils = CONSEILS[state.activite] || [];
    el.innerHTML = title("Un site qui ne fait pas", "que vendre…") +
      `<p class="hint">Choisissez vos blocs, votre site se construit.${conseils.length ? " ★ = conseillé pour vous." : ""}</p>
      <div class="build">
        <div class="grid" role="group" aria-label="Blocs du site">
          ${BLOCS.map((b, i) => `
            <button class="tile ${state.blocs.includes(b.id) ? "selected" : ""}" aria-pressed="${state.blocs.includes(b.id)}" data-id="${b.id}" style="animation-delay:${i * 40}ms">
              ${tick}${I[b.id]}<span>${b.label}${conseils.includes(b.id) ? " <b style='color:var(--coral)'>★</b>" : ""}</span>
            </button>`).join("")}
        </div>
        <div><div id="phone">${phoneHTML(state.blocs)}</div><p class="phone-caption" id="cap"></p></div>
      </div>
      <div class="spacer"></div>
      <button class="cta" id="go" ${state.blocs.length ? "" : "disabled"}>Continuer</button>
      <p class="counter" id="count"></p>`;
    const update = () => {
      el.querySelector("#phone").innerHTML = phoneHTML(state.blocs);
      const n = state.blocs.length;
      el.querySelector("#cap").innerHTML = n ? `Formule <b>${tierFor(n)}</b>` : "";
      el.querySelector("#count").textContent = n ? `${n} bloc${n > 1 ? "s" : ""} choisi${n > 1 ? "s" : ""}` : "Choisissez au moins un bloc";
      el.querySelector("#go").disabled = !n;
    };
    el.querySelector(".grid").addEventListener("click", (e) => {
      const b = e.target.closest(".tile"); if (!b) return;
      const id = b.dataset.id;
      state.blocs = state.blocs.includes(id) ? state.blocs.filter(x => x !== id) : [...state.blocs, id];
      b.classList.toggle("selected"); b.setAttribute("aria-pressed", state.blocs.includes(id));
      update();
    });
    el.querySelector("#go").addEventListener("click", next);
    update();
  }

  function renderVille(el) {
    const pins = VILLES.map(v => {
      const w = v.id.length * 7.4 + 14;
      const tx = v.left ? v.x - w - 12 : v.x + 12;
      return `<g class="pin ${state.ville === v.id ? "selected" : ""}" data-id="${v.id}" role="radio" tabindex="0" aria-label="${v.id}" aria-checked="${state.ville === v.id}">
        <rect x="${Math.min(tx, v.x - 14)}" y="${v.y - 30}" width="${w + 28}" height="38" fill="transparent"/>
        <path class="head" d="M${v.x} ${v.y + 4}c-7-9-11-14-11-19a11 11 0 0 1 22 0c0 5-4 10-11 19z"/>
        <circle cx="${v.x}" cy="${v.y - 15}" r="3.5" fill="#EEE6D8"/>
        <g class="tag"><rect x="${tx}" y="${v.y - 22}" width="${w}" height="20" rx="4"/><text x="${tx + 7}" y="${v.y - 8}">${v.id}</text></g>
      </g>`;
    }).join("");
    el.innerHTML = title("Près de", "chez vous") + `
      <div class="map-card">
        <svg viewBox="0 0 300 300" role="radiogroup" aria-label="Choisissez votre ville">
          <rect width="300" height="300" rx="8" fill="#F6F0E4"/>
          <ellipse cx="200" cy="70" rx="42" ry="30" fill="#8FB08A"/>
          <ellipse cx="60" cy="190" rx="44" ry="26" fill="#8FB08A"/>
          <path d="M0 70 C40 50 70 90 110 105 S170 140 220 150 S270 175 300 170" fill="none" stroke="#6FA3C7" stroke-width="5" stroke-linecap="round"/>
          <path d="M205 290 L240 225 L275 290Z" fill="#6E9A6A"/><path d="M235 290 L262 245 L295 290Z" fill="#8FB08A"/>
          <path d="M268 10 C262 60 280 110 262 160 S282 240 270 300" fill="none" stroke="#1E2D45" stroke-width="1.5" stroke-dasharray="5 5" opacity=".5"/>
          <text x="282" y="40" font-family="Nunito" font-weight="800" font-size="11" fill="#1E2D45" opacity=".55" transform="rotate(90 282 40)">Suisse</text>
          ${pins}
        </svg>
      </div>
      <div class="chips" role="radiogroup">
        <button class="chip ${state.ville === "Ailleurs" ? "selected" : ""}" data-id="Ailleurs">…et alentours / ailleurs</button>
      </div>`;
    const pick = (id) => {
      state.ville = id;
      el.querySelectorAll("[data-id]").forEach(p => { const on = p.dataset.id === id; p.classList.toggle("selected", on); p.setAttribute("aria-checked", on); });
      setTimeout(next, 420);
    };
    el.querySelectorAll("[data-id]").forEach(p => {
      p.addEventListener("click", () => pick(p.dataset.id));
      p.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(p.dataset.id); } });
    });
  }

  function renderDelai(el) {
    el.innerHTML = title("Votre site,", "pour quand ?") + `
      <div class="chips stack" role="radiogroup">
        ${DELAIS.map((d, i) => `<button class="chip ${state.delai === d.id ? "selected" : ""}" role="radio" aria-checked="${state.delai === d.id}" data-v="${d.id}" style="animation-delay:${i * 60}ms">${d.id}<em>${d.hint}</em></button>`).join("")}
      </div>
      <div class="spacer"></div>
      <div class="price">
        <span class="lbl">Prêt à partir d'une semaine<br>Tarif selon vos blocs</span>
        <span class="amt"><small>dès</small>${CONFIG.priceFrom} €</span>
      </div>`;
    const g = el.querySelector(".chips");
    g.addEventListener("click", (e) => {
      const c = e.target.closest(".chip"); if (!c) return;
      state.delai = c.dataset.v;
      g.querySelectorAll(".chip").forEach(x => { const on = x === c; x.classList.toggle("selected", on); x.setAttribute("aria-checked", on); });
      setTimeout(next, 380);
    });
  }

  function renderContact(el) {
    el.innerHTML = title("Dernière étape", "faisons connaissance") + `
      <div class="field">
        <label for="prenom">Votre prénom</label>
        <input class="input" id="prenom" autocomplete="given-name" autocapitalize="words" maxlength="40" placeholder="Ex. Julie" value="${esc(state.prenom)}" />
      </div>
      <div class="field">
        <label for="ent">Nom de l'entreprise <small>(facultatif)</small></label>
        <input class="input" id="ent" autocomplete="organization" maxlength="60" placeholder="Ex. Salon Julie Coiffure" value="${esc(state.entreprise)}" />
      </div>
      <p class="group-label">Quand vous joindre ?</p>
      <div class="chips" id="moment">
        ${MOMENTS.map(m => `<button class="chip ${state.moment === m ? "selected" : ""}" data-v="${m}">${m}</button>`).join("")}
      </div>
      <div class="spacer"></div>
      <button class="cta" id="go">Voir mon site</button>`;
    const p = el.querySelector("#prenom"), e = el.querySelector("#ent"), go = el.querySelector("#go");
    const check = () => { go.disabled = p.value.trim().length < 2; };
    p.addEventListener("input", () => { state.prenom = p.value.trim(); check(); });
    e.addEventListener("input", () => { state.entreprise = e.value.trim(); });
    [p, e].forEach(i => i.addEventListener("keydown", (ev) => { if (ev.key === "Enter") { ev.preventDefault(); if (i === p) e.focus(); else if (!go.disabled) next(); } }));
    el.querySelector("#moment").addEventListener("click", (ev) => {
      const c = ev.target.closest(".chip"); if (!c) return;
      state.moment = c.dataset.v;
      el.querySelectorAll("#moment .chip").forEach(x => x.classList.toggle("selected", x === c));
    });
    go.addEventListener("click", next);
    check();
  }

  function labelOf(list, id) { const o = list.find(x => x.id === id); return o ? o.label : id || "—"; }

  function message() {
    const blocs = state.blocs.map(id => labelOf(BLOCS, id));
    const hot = /possible|le mois/.test(state.delai || "");
    const ref = [hot ? "P1" : "P2", state.src].filter(Boolean).join(" · ");
    const lines = [
      `Bonjour Samuel ! 👋`,
      `Je suis ${state.prenom}${state.entreprise ? ` (${state.entreprise})` : ""} et j'aimerais un site web.`,
      ``,
      `🏪 Activité : ${labelOf(ACTIVITES, state.activite)}`,
      `🌐 Site actuel : ${labelOf(SITE, state.site)}`,
      `🧩 Blocs (${tierFor(blocs.length)}) : ${blocs.join(", ")}`,
      `📍 Ville : ${state.ville || "—"}`,
      `⏱️ Délai : ${state.delai || "—"}`,
      state.moment ? `📞 Me joindre : ${state.moment}` : null,
      ``,
      `Réf. ${ref}`,
    ].filter(l => l !== null);
    return lines.join("\n");
  }

  function renderResume(el) {
    const n = state.blocs.length;
    const msg = message();
    const wa = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
    const mail = `mailto:${CONFIG.email}?subject=${encodeURIComponent(`Mon projet de site — ${state.prenom}`)}&body=${encodeURIComponent(msg)}`;
    el.innerHTML = title(`${esc(state.prenom) || "Votre"}, voici`, "votre site !") + `
      <div class="summary">
        ${phoneHTML(state.blocs)}
        <div class="recap">
          <span class="tier">Formule ${tierFor(n)}</span>
          <dl>
            <dt>Activité</dt><dd>${labelOf(ACTIVITES, state.activite)}</dd>
            <dt>Blocs</dt><dd>${n} bloc${n > 1 ? "s" : ""}</dd>
            <dt>Ville</dt><dd>${esc(state.ville || "—")}</dd>
            <dt>Délai</dt><dd>${esc(state.delai || "—")}</dd>
          </dl>
        </div>
      </div>
      <div class="price">
        <span class="lbl">Prêt à partir d'une semaine<br>Tarif selon vos blocs</span>
        <span class="amt"><small>dès</small>${CONFIG.priceFrom} €</span>
      </div>
      <div class="spacer"></div>
      <span class="bubble">Je vous recontacte !</span>
      <a class="cta wa" href="${wa}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>
        Envoyer sur WhatsApp
      </a>
      <a class="link-btn" href="${mail}">Je préfère l'envoyer par e-mail</a>
      <p class="note">Votre résumé s'ouvre dans WhatsApp, prêt à envoyer.<br>Rien n'est partagé sans votre accord.</p>
      <button class="link-btn" id="restart" style="font-size:13px">Recommencer</button>`;
    el.querySelector("#restart").addEventListener("click", () => {
      Object.assign(state, { activite: null, site: null, blocs: [], ville: null, delai: null, prenom: "", entreprise: "", moment: null });
      go(0);
    });
    confetti();
  }

  /* ---------- utilitaires ---------- */
  function esc(s) { return String(s || "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

  function confetti() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = document.createElement("div");
    box.className = "confetti";
    const colors = ["#E2A63D", "#E2644F", "#2A837C", "#1E2D45"];
    for (let i = 0; i < 28; i++) {
      const b = document.createElement("i");
      b.style.left = Math.random() * 100 + "%";
      b.style.background = colors[i % 4];
      b.style.animationDuration = 1.6 + Math.random() * 1.4 + "s";
      b.style.animationDelay = Math.random() * .5 + "s";
      box.appendChild(b);
    }
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 3800);
  }

  go(0);
})();
