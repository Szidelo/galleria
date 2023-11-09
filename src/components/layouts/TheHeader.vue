<template>
	<header class="mx-auto">
		<nav
			class="d-flex justify-content-between flex-column flex-sm-row gap-3 gap-sm-0 align-items-center py-4 px-3"
		>
			<img
				:src="logo"
				alt="logo"
			/>
			<router-link
				@click="toggleSlideShow"
				v-if="!isSlideShow"
				to="/galleria/paint1"
				class="link-1"
				>start slideshow
			</router-link>

			<router-link
				@click="toggleSlideShow"
				v-else
				to="/galleria"
				class="link-1"
				>stop slideshow
			</router-link>
		</nav>
		<hr />
	</header>
</template>

<script lang="ts">
import logo from "@/assets/logo/logo.jpg";
import { useRoute } from "vue-router";
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
	name: "TheHeader",
	setup() {
		const isSlideShow = ref<boolean>(false);
		
		const route = useRoute();

		const toggleSlideShow = () => {
			isSlideShow.value = !isSlideShow.value;
		};

		watch(route, () => {
			route.fullPath === "/galleria" ? (isSlideShow.value = false) : (isSlideShow.value = true);
		})

		return {
			logo,
			isSlideShow,
			toggleSlideShow,
		};
	},
});
</script>

<style scoped>
header {
	max-width: 1380px;
}
header .link-1 {
	text-transform: uppercase;
	text-decoration: none;
	color: #7d7d7d;
}
</style>
