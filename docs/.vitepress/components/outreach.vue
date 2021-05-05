<template>
    <a :href="link">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Outreach',
    props: {
        link: String,
    },
    setup(props) {},
})
</script>
