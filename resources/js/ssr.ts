import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from 'vue/server-renderer'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { DefineComponent, createSSRApp, h } from 'vue'

import AppLayout from '@/Layouts/AppLayout.vue'
import AuthLayout from '@/Layouts/AuthLayout.vue'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => title ? `${title} - ${appName}` : appName,
        resolve: (name) => {
            const page = resolvePageComponent(`./Pages/${name}.vue`,
                import.meta.glob<DefineComponent>('./Pages/**/*.vue'),
            )

            page.then((module) => {
                if (name.includes('Auth/')) {
                    return module.default.layout = module.default.layout || AuthLayout
                }

                module.default.layout = module.default.layout || AppLayout
            })

            return page
        },
        setup: ({ App, props, plugin }) =>
            createSSRApp({ render: () => h(App, props) })
                .use(plugin),
    }),
{ cluster: true },
)
