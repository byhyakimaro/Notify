// Example FactoryObject

const bg_notificacao = $('.bg-notificacao');
const notificacao = $('.notificacao');
const texto = $('.bg-notificacao .notificacao .texto');
const icon = $('.bg-notificacao .notificacao .icon svg');

async function createNotify(color = "#77b901") {
	bg_notificacao.css('background',color);
	icon.css('fill', color);
	bg_notificacao.style.transform = "translateX(240px)";
	notificacao.style.transform = "translateX(240px)";
	await sleep(1000);
	bg_notificacao.style.transform = "translateX(0px)";
	notificacao.style.transform = "translateX(4px)";
	texto.style.opacity = "100%";
	icon.style.opacity = "100%";
	return {
		color,
	}
}

(async()=>{
	const addNotify = await createNotify();
})();