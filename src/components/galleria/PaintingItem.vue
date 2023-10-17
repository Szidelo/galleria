<template>
	<div class="painting">
		<img
			:src="img"
			alt=""
		/>

		<p class="heading-2 title">{{ title }}</p>
		<p class="subhead-1 author">{{ author }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "PaintingItem",
	props: {
		img: {
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
});
</script>

<style scoped>
.painting {
    position: relative;
    margin-bottom: 40px;
}

.title,.author {
    position: absolute;
    color: #FFF;
    left: 20px;
}
.title {
    bottom: 30px;
    max-width: 250px;
}
.author {
    bottom: 10px;
}
</style>