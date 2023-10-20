<template>
	<section class="mx-auto pt-4">
		<PaintingItem :paintings="paintings" />
	</section>
</template>

<script lang="ts">
import ListOfPaintings from "../../types/ListOfPaintings";
import data from "../../utils/data.json";

import PaintingItem from "./PaintingItem.vue";

import { defineComponent, ref } from "vue";
export default defineComponent({
	name: "GalleriaList",
	components: {
		PaintingItem,
	},
	setup() {
		const paintings = ref<ListOfPaintings>([]);

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


</style>
