import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { DefineComponent, createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'

import AppLayout from '@/layouts/AppLayout.vue'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createServer(
    (page) =>
        createInertiaApp({
            page,
            render: renderToString,
            title: (title) => (title ? `${title} - ${appName}` : appName),
            resolve: (name) => {
                const component = resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue'))

                component.then((page) => page.default.layout = page.default.layout || AppLayout)

                return component
            },
            setup: ({ App, props, plugin }) => createSSRApp({ render: () => h(App, props) }).use(plugin),
        }),
    { cluster: true },
)
