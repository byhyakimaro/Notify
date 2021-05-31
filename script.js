let $ = document.querySelector.bind(document);
const bg_notificacao = $('.bg-notificacao');
const notificacao = $('.notificacao');
const texto = $('.bg-notificacao .notificacao .texto');
const icon = $('.bg-notificacao .notificacao .icon svg');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function notification() {
    bg_notificacao.style.transform = "translateX(240px)";
    notificacao.style.transform = "translateX(240px)";
    await sleep(1000);
    bg_notificacao.style.transform = "translateX(0px)";
    notificacao.style.transform = "translateX(4px)";
    texto.style.opacity = "100%";
    icon.style.opacity = "100%";
}

notification();