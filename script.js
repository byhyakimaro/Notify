// Example FactoryObject

function createNotify({color, correct, texto}) {
	const bg_notificacao = $('.bg-notificacao');
	const notificacao = $('.notificacao');
	const check = 'M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z';
	const closed = 'M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z';
	return {
		color,
		correct,
		texto,
		async create() {
			$('.texto').html(texto);
			$('svg').css('fill', color);
			bg_notificacao.css('background', color);
			$('path').attr('d',correct ? check : closed);
			bg_notificacao.style.transform = "translateX(240px)";
			notificacao.style.transform = "translateX(240px)";
			await sleep(1000);
			bg_notificacao.style.transform = "translateX(0px)";
			notificacao.style.transform = "translateX(4px)";
		},
	}
}

let addNotify = createNotify({
	correct: true,
	color: "#77b901",
	texto: "A gravação foi salva",
});
addNotify.create();