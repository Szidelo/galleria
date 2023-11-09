<template>
	<section class="mx-auto pt-4">
		<PaintingItem
			v-for="paint in paintings"
			:key="paint.id"
			:id="paint.id"
			:author="paint.author"
			:image-small="paint.imageSmall"
			:title="paint.title"
		/>
	</section>
</template>

<script lang="ts">
import Painting from "@/classes/Painting";
import data from "../../utils/data.json";

import PaintingItem from "./PaintingItem.vue";

import { defineComponent, ref } from "vue";
export default defineComponent({
	name: "GalleriaList",
	components: {
		PaintingItem,
	},
	setup() {
		const paintings = ref<Painting[]>([]);

		paintings.value = data.paintings;

		return {
			paintings,
		};
	},
});
</script>

<style scoped>
section {
	max-width: 1380px;
	max-height: 1600px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	column-gap: 40px;
}

@media (max-width: 1400px) {
    section {
        max-height: 2200px;
        max-width: 1020px;
    }
}

@media (max-width: 1020px) {
    section {
        max-height: 2900px;
        max-width: 680px;
    }
}

@media (max-width: 680px) {
    section {
        padding: 0 10px;
        max-height: 100%;
        max-width: 334px;
    }
}
</style>
