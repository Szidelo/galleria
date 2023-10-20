<template>
	<div class="background-div"></div>
	<p @click="$emit('close')" class="link-2">close</p>
	<div class="image__container">
		<img
			:src="img"
			alt=""
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "BasePictureModal",
    emits: ['close'],
	props: {
		img: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped>
.background-div {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.9);
	z-index: 3;
}

.image__container img {
	position: absolute;
	z-index: 3;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: auto;
	height: 70%;
}

p {
	position: absolute;
    top: 10%;
    right: 20%;
	z-index: 3;
	color: var(--color-white);
	text-align: right;
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 3px;
    text-transform: uppercase;
    cursor: pointer;
}
</style>
