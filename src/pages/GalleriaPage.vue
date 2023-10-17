<template>
    <GalleriaList/>
</template>

<script lang="ts">
import GalleriaList from "@/components/galleria/GalleriaList.vue";
import { defineComponent } from "vue";
export default defineComponent({
    name: "GalleriaPage",
    components: {
        GalleriaList,
    },
});
</script>