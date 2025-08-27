import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, DefineComponent, h } from 'vue';
import { renderToString } from 'vue/server-renderer';

import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer(
    (page) =>
        createInertiaApp({
            page,
            render: renderToString,
            title: (title) => (title ? `${title} - ${appName}` : appName),
            resolve: (name) => {
                const page = resolvePageComponent(`./pages/${name}.vue`,
                    import.meta.glob<DefineComponent>('./pages/**/*.vue'),
                )

                page.then((module) => {
                    if (name.includes('auth/')) {
                        return module.default.layout = module.default.layout || AuthLayout
                    }

                    module.default.layout = module.default.layout || AppLayout
                })

                return page
            },
            setup: ({ App, props, plugin }) => createSSRApp({ render: () => h(App, props) }).use(plugin),
        }),
    { cluster: true },
);
