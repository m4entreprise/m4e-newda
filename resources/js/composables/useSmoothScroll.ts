import { onMounted, onUnmounted } from 'vue';

/**
 * Composable for enhanced smooth scrolling behavior
 * Provides a luxurious, heavier scroll feel
 */
export function useSmoothScroll() {
    let rafId: number | null = null;
    let targetScrollY = 0;
    let currentScrollY = 0;
    const ease = 0.08; // Lower = smoother but slower

    const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
    };

    const smoothScroll = () => {
        currentScrollY = lerp(currentScrollY, targetScrollY, ease);

        if (Math.abs(targetScrollY - currentScrollY) > 0.5) {
            window.scrollTo(0, currentScrollY);
            rafId = requestAnimationFrame(smoothScroll);
        } else {
            window.scrollTo(0, targetScrollY);
            rafId = null;
        }
    };

    const onScroll = () => {
        targetScrollY = window.scrollY;
        if (!rafId) {
            rafId = requestAnimationFrame(smoothScroll);
        }
    };

    onMounted(() => {
        currentScrollY = window.scrollY;
        targetScrollY = window.scrollY;

        // Note: Custom smooth scroll disabled by default
        // Uncomment to enable custom smooth scroll behavior
        // window.addEventListener('scroll', onScroll, { passive: true });
    });

    onUnmounted(() => {
        if (rafId) {
            cancelAnimationFrame(rafId);
        }
        // window.removeEventListener('scroll', onScroll);
    });

    return {
        // Scroll to a specific position smoothly
        scrollTo: (position: number) => {
            window.scrollTo({
                top: position,
                behavior: 'smooth',
            });
        },
        // Scroll to an element smoothly
        scrollToElement: (element: HTMLElement | null) => {
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        },
    };
}
