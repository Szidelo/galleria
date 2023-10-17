<template>
	<header class="mx-auto">
		<nav class="d-flex justify-content-between align-items-center py-4">
            <img :src="logo" alt="logo" />
			<a
				class="link-1"
				href="/"
				>start slideshow</a
			>
		</nav>
        <hr>
	</header>
</template>

<script lang="ts">
import logo from "@/assets/logo/logo.jpg";
import { defineComponent } from "vue";
export default defineComponent({
	name: "TheHeader",

    setup() {
        return {
            logo
        }
    }
});
</script>

<style scoped>
header {
    max-width: 1380px
}
header .link-1 {
    text-transform: uppercase;
    text-decoration: none;
    color: #7D7D7D;
}
</style>
