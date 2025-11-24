// ---------- BOTÃO "VOLTAR AO TOPO" ----------
const backToTop = document.createElement("button");
backToTop.innerText = "⬆ Topo";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

// Estilo direto no JS (para não depender do CSS)
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.backgroundColor = "#f68b3e";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.padding = "12px 15px";
backToTop.style.cursor = "pointer";
backToTop.style.boxShadow = "0 3px 8px rgba(0,0,0,0.2)";
backToTop.style.display = "none";
backToTop.style.transition = "opacity 0.3s, transform 0.3s";

// Mostrar o botão ao rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    backToTop.style.display = "block";
    backToTop.style.opacity = "1";
    backToTop.style.transform = "scale(1)";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.transform = "scale(0.8)";
    setTimeout(() => {
      if (window.scrollY <= 250) backToTop.style.display = "none";
    }, 300);
  }
});

// Ação do botão — rolar suavemente ao topo
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ---------- ROLAGEM SUAVE NOS LINKS DO MENU ----------
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ---------- MENSAGEM DE ENVIO DO FORMULÁRIO ----------
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede o envio real
    alert("✅ Formulário enviado com sucesso! Obrigado pelo contato.");
    form.reset(); // limpa os campos
  });
}
