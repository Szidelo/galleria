import { computed } from "vue";
import Painting from "@/classes/Painting";
import ListOfPaintings from "@/types/ListOfPaintings";

export function useCurrentIndex(
	paintings: ListOfPaintings,
	currentPainting: Painting
) {
	const currentIndex = computed(() =>
		paintings.findIndex(
			(paint: Painting) => paint.id === currentPainting.id
		)
	);

	return currentIndex;
}
