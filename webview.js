const path = require('path');
const chatUrl = 'https://we.adv.ru/online/';

module.exports = (Franz, options) => {
    const getMessages = () => {
        let msgContainers = document.querySelectorAll('.bx-messenger-cl-count-digit');

        let directMessages = 0;

        for (var i = msgContainers.length - 1; i >= 0; i--) {
        	directMessages += msgContainers[i] == null ? 0 : parseInt(msgContainers[i].innerText, 10);
        }

        let indirectMessages = 0;

        Franz.setBadge(directMessages, indirectMessages);
    }

    Franz.loop(getMessages);

    Franz.injectCSS(path.join(__dirname, 'style.css'));

  	// редирект на страницу с чатом
  	if (location.href !== chatUrl) {
  		// проверяем не страница авторизации ли это
  		if (!document.querySelector('.login-item')) {
  			location.href = chatUrl;
  		}
  	}
}

