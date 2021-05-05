<template>
    资源{{path}}
</template>

<script lang="ts">
// const modulesFiles = import.meta.globEager('./module/*.js') // vite
import { defineComponent } from "vue";
// import {
//     useRoute,
//     useSiteData,
//     usePageData,
//     useSiteDataByRoute,
// } from 'vitepress'
export default defineComponent({
    name: "ShowResource",
    props: {
        path: String,
    },
    setup(props) {
        const modulesFiles = import.meta.glob("/public/design/honeydew2.0/*"); // vite
        console.log(import.meta);
        console.log(modulesFiles);

        // console.log(useRoute())
        // console.log(useSiteData().value)
        // console.log(usePageData().value)
        // console.log(useSiteDataByRoute().value)
    },
});
</script>
