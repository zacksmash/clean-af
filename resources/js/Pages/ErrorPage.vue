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

const title = computed(() => {
    return {
        503: '503: Service Unavailable',
        500: '500: Server Error',
        404: '404: Page Not Found',
        403: '403: Forbidden',
    }[props.status] as string
})

const description = computed(() => {
    return {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
    }[props.status] as string
})
</script>

<template>
    <div>
        <h1>{{ title }}</h1>

        <div>{{ description }}</div>
    </div>
</template>
