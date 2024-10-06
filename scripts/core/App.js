// /src/main/resources/static/scripts/core/App.js
import Router from '../router/Router.js';

export default class App {
    constructor() {
        this.router = new Router([
            { path: '/', view: '/views/home.html' },
            { path: '/about', view: '/views/about.html' }
        ]);

        this.setupNavigation();
    }

    setupNavigation() {
        document.querySelectorAll('a[data-link]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const path = anchor.getAttribute('href');
                this.router.navigateTo(path);
            });
        });
    }
}
