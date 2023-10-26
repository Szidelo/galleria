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
