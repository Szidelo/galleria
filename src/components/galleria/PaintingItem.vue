<template>
	<router-link :to="'/galleria/' + id">
		<div class="painting">
			<img
				class="image"
				:src="imageSmall"
				alt=""
			/>
			<div class="overlay">
				<p class="heading-2 title">{{ title }}</p>
				<p class="subhead-1 author">{{ author }}</p>
			</div>
		</div>
	</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "PaintingItem",
	props: {
		id: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		imageSmall: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped>
.painting {
	position: relative;
	margin-bottom: 40px;
	overflow: hidden;
}

.image {
	height: 100%;
	width: 100%;
}

.image:hover {
	transform: scale(1.1);
	opacity: 0.9;
}

.overlay {
	position: absolute;
	bottom: 0;
	left: 0;
	height: 100px;
	width: 100%;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.84) 100%);
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	padding: 20px;
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
