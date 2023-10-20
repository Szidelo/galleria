<template>
	<section class="article mx-auto pt-4 d-flex">
		<div class="article__image-container">
			<img
				class="image-large"
				:src="currentPainting.imageLarge"
				alt=""
			/>
			<div
				@click="toggleImage"
				class="image-link d-flex gap-3 p-3"
			>
				<img
					:src="icon"
					alt=""
				/>
				<span class="link-2">view image</span>
			</div>
		</div>

		<div class="article__naming">
			<h2 class="heading-1 mb-4">{{ currentPainting.title }}</h2>
			<p class="subhead-1">{{ currentPainting.author }}</p>
		</div>
		<div class="article__info">
			<h1 class="display">{{ currentPainting.year }}</h1>
			<div class="article__info-p">
				<p>{{ currentPainting.description }}</p>
			</div>
			<a
				class="wiki"
				:href="currentPainting.source"
				target="_blank"
				>go to source</a
			>
		</div>
		<img
			class="image-portrait"
			:src="currentPainting.portrait"
			alt=""
		/>
	</section>

	<BasePictureModal
		v-if="isImageVisible"
		@close="toggleImage"
		:img="currentPainting.imageLarge"
	/>

	<ImageSlider
		:index="slideWidth"
		:next="nextRoute"
		:prev="prevRoute"
		:id="currentPainting.id"
		:title="currentPainting.title"
		:author="currentPainting.author"
	/>
</template>

<script lang="ts">
import BasePictureModal from "@/components/ui/BasePictureModal.vue";
import ImageSlider from "@/components/galleria/ImageSlider.vue";
import icon from "@/assets/open-icon.svg";
import Painting from "@/classes/Painting";
import ListOfPaintings from "@/types/ListOfPaintings";
import { useCurrentIndex } from "@/composables/useCurrentIndex";
import data from "../utils/data.json";
import { useRoute } from "vue-router";
import { defineComponent, reactive, ref, watch, computed } from "vue";
export default defineComponent({
	name: "PaintingPage",
	components: {
		BasePictureModal,
		ImageSlider,
	},
	setup() {
		const paintings = ref<ListOfPaintings>([]);

		paintings.value = data.paintings;

		let currentPainting = reactive<Painting>({
			title: "",
			author: "",
			portrait: "",
			year: 0,
			description: "",
			imageLarge: "",
			imageSmall: "",
			source: "",
			id: "",
		});

		const route = useRoute();

		const findPainting = () => {
			const foundPainting = paintings.value.find((paint) => {
				return paint.id === route.params.paintId;
			});

			if (foundPainting) {
				Object.assign(currentPainting, foundPainting);
			}
		};

		findPainting();

		const isImageVisible = ref(false);

		const toggleImage = () => {
			isImageVisible.value = !isImageVisible.value;
		};

		watch(
			() => route.params.paintId,
			() => {
				findPainting();
			}
		);

		const currentIndex = useCurrentIndex(paintings.value, currentPainting);

		const nextRoute = computed(() => {
			if (
				currentIndex.value !== -1 &&
				currentIndex.value < paintings.value.length - 1
			) {
				return `${paintings.value[currentIndex.value + 1].id}`;
			}
			return `${paintings.value[0].id}`;
		});

		const prevRoute = computed(() => {
			if (currentIndex.value > 0) {
				return `${paintings.value[currentIndex.value - 1].id}`;
			}

			return `${paintings.value[paintings.value.length - 1].id}`;
		});

		const slideWidth = computed(() => {
			return (100 / 15) * (currentIndex.value + 1);
		});

		return {
			currentPainting,
			icon,
			isImageVisible,
			toggleImage,
			nextRoute,
			prevRoute,
			slideWidth,
		};
	},
});
</script>

<style scoped>
.article {
	max-width: 1380px;
	max-height: 1600px;
	flex-wrap: wrap;
}

.article__image-container {
	position: relative;
	width: 475px;
	height: 560px;
}
.article__image-container .image-large {
	width: 100%;
	height: 100%;
	max-width: 475px;
	max-height: 560px;
	object-fit: cover;
}

.image-link {
	position: absolute;
	background-color: rgba(0, 0, 0, 0.9);
	color: var(--color-white);
	bottom: 30px;
	left: 30px;
	cursor: pointer;
	text-transform: uppercase;
	transition: var(--transition);
}

.image-link:hover {
	background-color: rgb(125, 125, 125, 0.7);
}

.image-portrait {
	position: absolute;
	height: 128px;
	width: 128px;
	top: 65%;
	left: 44%;
}

.article__naming {
	background-color: var(--color-white);
	height: fit-content;
	max-height: 400px;
	width: 530px;
	padding: 0 60px 60px 60px;
	margin-left: -80px;
	z-index: 1;
}

.display {
	position: relative;
	color: var(--color-light-gray);
	font-weight: 700;
	margin-left: -40px;
	z-index: 2;
}

.article__info {
	max-width: 480px;
}

.article__info-p p {
	position: relative;
	color: #7d7d7d;
	font-family: Libre Baskerville;
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: 28px;
	max-width: 370px;
	margin-top: -30px;
	z-index: 3;
}

.wiki {
	color: var(--color-dark-gray);
	font-family: Libre Baskerville;
	font-size: 9px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 1.929px;
	text-decoration-line: underline;
	transition: var(--transition);
	text-transform: uppercase;
}

.wiki:hover {
	color: var(--color-black);
}
</style>