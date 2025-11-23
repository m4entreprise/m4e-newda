import { onMounted, onUnmounted, ref } from 'vue';

/**
 * Composable for observing elements entering the viewport
 * and triggering fade-in animations
 */
export function useIntersectionObserver() {
    const elementsToObserve = ref<HTMLElement[]>([]);
    let observer: IntersectionObserver | null = null;

    const observe = (element: HTMLElement) => {
        if (element && !elementsToObserve.value.includes(element)) {
            elementsToObserve.value.push(element);
            observer?.observe(element);
        }
    };

    const unobserve = (element: HTMLElement) => {
        if (element) {
            observer?.unobserve(element);
            const index = elementsToObserve.value.indexOf(element);
            if (index > -1) {
                elementsToObserve.value.splice(index, 1);
            }
        }
    };

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('will-fade-in');
                        entry.target.classList.add('fade-in-up');
                        // Unobserve after animation to prevent re-triggering
                        observer?.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px',
            },
        );

        // Observe all existing elements
        elementsToObserve.value.forEach((el) => {
            observer?.observe(el);
        });
    });

    onUnmounted(() => {
        observer?.disconnect();
        observer = null;
    });

    return {
        observe,
        unobserve,
    };
}
