


const clickableLinks = document.querySelectorAll('.box h2');
const switchBetweenLogin = document.querySelectorAll('.form');
clickableLinks.forEach(link => {
	link.addEventListener('click',(e) => {
		if(e.target.tagName == 'P'){
			const targetPage = document.querySelector(e.target.dataset.target);
			switchBetweenLogin.forEach(log => {
				(log == targetPage) ? log.classList.add('active') : log.classList.remove('active');
			});
		}
	});	
});