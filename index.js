import App from './components/App.js';

const initApp = () => {
	const $app = document.querySelector('#app');
	new App($app);
};

window.addEventListener('DOMContentLoaded', initApp);
