# Frontend Mentor - Galleria slideshow site solution

This is a solution to the [Galleria slideshow site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Navigate the slideshow and view each painting in a lightbox

### Screenshot

![Screenshot](./src/assets/Screenshot.png)

### Links

-   Solution URL: [Github](https://github.com/Szidelo/galleria)
-   Live Site URL: [Demo](https://galleria-three.vercel.app/galleria)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Bootstrap
-   Typescript
-   Composition API
-   [Vue](https://vuejs.org/) - JS library
-   [Vue Router](https://router.vuejs.org/) - Vue framework

### What I learned

With this project I learned a lot about vue js. I learned to use computed properties and see their power to use with the slider:

```js
// to next painting
const nextRoute = computed(() => {
	if (
		currentIndex.value !== -1 &&
		currentIndex.value < paintings.value.length - 1
	) {
		return `${paintings.value[currentIndex.value + 1].id}`;
	}
	return `${paintings.value[0].id}`;
});

// to prev painting
const prevRoute = computed(() => {
	if (currentIndex.value > 0) {
		return `${paintings.value[currentIndex.value - 1].id}`;
	}

	return `${paintings.value[paintings.value.length - 1].id}`;
});

// to update the slider width
const slideWidth = computed(() => {
	return (100 / 15) * (currentIndex.value + 1);
});
```

I learned to use basic composables:

```js
// useCurrentIndex.ts
import { computed } from "vue";
import Painting from "@/classes/Painting";

export function useCurrentIndex(
	paintings: Painting[],
	currentPainting: Painting
) {
	const currentIndex = computed(() =>
		paintings.findIndex(
			(paint: Painting) => paint.id === currentPainting.id
		)
	);

	return currentIndex;
}

// and import where I need to use the current index and use it like this: 

const currentIndex = useCurrentIndex(paintings.value, currentPainting);
```

More than that managing to replicate the layout was a challange. I achieved that with flex-direction column, flex-wrap: wrap.

```css
section {
	max-width: 1380px;
	max-height: 1600px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	column-gap: 40px;
}
```

## Author

-   Linkedin - [Claudiu Szidelo](https://www.linkedin.com/in/claudiu-szidelo-671b1324a/)
-   Frontend Mentor - [@Szidelo](https://www.frontendmentor.io/profile/Szidelo)
-   Github - [Szidelo](https://github.com/Szidelo)