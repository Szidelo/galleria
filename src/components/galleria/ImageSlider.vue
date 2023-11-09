<template>
	<section class="mx-auto mt-5 py-5">
		<div class="range">
			<div class="range__value" :style="{ width: index + '%' }"></div>
		</div>
		<div class="content d-flex justify-content-between px-3">
			<div class="naming">
				<h2 class="heading-3 mb-4">{{ title }}</h2>
				<p class="subhead-2">{{ author }}</p>
			</div>
			<div class="d-flex align-items-center gap-4">
				<router-link :to="prev">
					<img
						class="navigation-icon"
						:src="backBtn"
						alt=""
					/>
				</router-link>
				<router-link :to="next">
					<img
						class="navigation-icon"
						:src="nextBtn"
						alt=""
					/>
				</router-link>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import nextBtn from "@/assets/icon-next-button.svg";
import backBtn from "@/assets/icon-back-button.svg";
import { defineComponent} from "vue";
export default defineComponent({
	name: "ImageSlider",
	props: {
		index: {
			type: Number,
			required: true,
		},
        prev: {
            type: String,
            required: true,
        },
        next: {
            type: String,
            required: true,
        },
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
	},

	setup() {


		return {
			nextBtn,
			backBtn,

		};
	},
});
</script>

<style scoped>
section {
	max-width: 1380px;
}

.content {
	width: 100%;
}

.navigation-icon {
	cursor: pointer;
	transition: var(--transition);
}

.navigation-icon:hover {
	transform: scale(1.3);
}

.range {
	margin-bottom: 20px;
	width: 100%;
	height: 2px;
	background-color: var(--color-gray);
}

.range__value {
	/* width: 6.66%; */
	height: 100%;
	background-color: var(--color-black);
	transition: var(--transition);
}
</style>
