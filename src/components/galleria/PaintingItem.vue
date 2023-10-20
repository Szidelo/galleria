<template>
	<router-link
		v-for="paint in paintings"
		:key="paint.id"
		:to="paint.id"
	>
		<div
			class="painting"
		>
			<img
				:src="paint.imageSmall"
				alt=""
			/>

			<p class="heading-2 title">{{ paint.title }}</p>
			<p class="subhead-1 author">{{ paint.author }}</p>
		</div>
	</router-link>
</template>

<script lang="ts">
import ListOfPaintings from "@/types/ListOfPaintings";
import { defineComponent, PropType } from "vue";
export default defineComponent({
	name: "PaintingItem",
	props: {
		paintings: {
			type: Object as PropType<ListOfPaintings>,
			required: true,
		},
	},
});
</script>

<style scoped>
.painting {
	position: relative;
	margin-bottom: 40px;
}

.title,
.author {
	position: absolute;
	color: #fff;
	left: 20px;
}
.title {
	bottom: 30px;
	max-width: 250px;
}
.author {
	bottom: 10px;
}

a {
	width: 310px;
}
</style>
