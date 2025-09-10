<script setup lang="ts">
import { computed, defineComponent, h } from 'vue'

defineOptions({
    layout: defineComponent({
        name: 'ErrorLayout',

        setup(_, { slots }) {
            return () => h('div', [slots.default && slots.default()])
        },
    }),
})

const props = defineProps<{
    status: number
}>()

const error = computed(() => {
    return {
        503: {
            title: '503: Service Unavailable',
            description: 'Sorry, we are doing some maintenance. Please check back soon.',
        },
        500: {
            title: '500: Server Error',
            description: 'Whoops, something went wrong on our servers.',
        },
        404: {
            title: '404: Page Not Found',
            description: 'Sorry, the page you are looking for could not be found.',
        },
        403: {
            title: '403: Forbidden',
            description: 'Sorry, you are forbidden from accessing this page.',
        },
    }[props.status] as { title: string; description: string }
})
</script>

<template>
    <div>
        <h1>{{ error.title }}</h1>

        <div>{{ error.description }}</div>
    </div>
</template>
