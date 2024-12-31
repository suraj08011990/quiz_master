import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { InertiaProgress } from '@inertiajs/progress';

const appName = import.meta.env.VITE_APP_NAME || 'Quiz Master';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        ),
    setup({ el, App, props, plugin }) {
        const vueApp = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);

        // Prevent back button navigation for unauthorized users
        window.addEventListener('popstate', () => {
            const user = props.initialPage.props.auth?.user;

            if (!user) {
                // If the user is not authenticated, redirect to the login page
               // window.location.replace('/');
               window.location.assign('/');
            }
        });

        return vueApp;
    },
    progress: {
        color: '#4B5563',
    },
});

InertiaProgress.init({
    color: '#4B5563', // Customize the color if needed
    showSpinner: true, // Show spinner while navigating
});
