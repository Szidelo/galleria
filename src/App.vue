<template>
	<the-header></the-header>
	<router-view></router-view>
</template>

<script lang="ts">
import data from "./utils/data.json";
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	setup() {
		return {
			data,
		};
	},
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap");

:root {
	--color-black: #000000;
	--color-white: #ffffff;
	--color-dark-gray: #7d7d7d;
	--color-gray: #e5e5e5;
	--color-light-gray: #f3f3f3;

	--transition: all 0.3s ease;
}

* {
	transition: var(--transition);
}

::-webkit-scrollbar {
	display: none;
}

body {
	margin: 0;
	font-family: "Libre Baskerville", serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 14px;
	line-height: 28px;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
}

.heading-1,
.heading-2,
.heading-3,
.subhead-2,
.link-1,
.link-2,
body {
	font-weight: bold !important;
}

.display {
	font-size: 200px;
	line-height: 150px;
}

.heading-1 {
	font-size: 56px;
	line-height: 64px;
}
.heading-2 {
	font-size: 24px;
	line-height: 29px;
}
.heading-3 {
	font-size: 18px;
	line-height: 22px;
}

.subhead-1 {
	font-weight: 500;
	font-size: 15px;
	line-height: 19px;
}

.subhead-2 {
	font-size: 13px;
	line-height: 17px;
}

.link-1 {
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 2.5px;
}

.link-2 {
	font-size: 9px;
	line-height: 11px;
	letter-spacing: 2px;
}

@media (max-width: 575px) {
	.heading-1 {
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: 29px; /* 120.833% */
	}
}
</style>
