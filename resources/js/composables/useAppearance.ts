import { onMounted, ref } from 'vue';

type Appearance = 'light' | 'dark' | 'system';

export function updateTheme(value: Appearance) {
    if (typeof window === 'undefined') {
        return;
    }

    // Force dark mode always
    document.documentElement.classList.add('dark');
}

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;

    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const mediaQuery = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.matchMedia('(prefers-color-scheme: dark)');
};

const getStoredAppearance = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return localStorage.getItem('appearance') as Appearance | null;
};

const handleSystemThemeChange = () => {
    const currentAppearance = getStoredAppearance();

    updateTheme(currentAppearance || 'system');
};

export function initializeTheme() {
    if (typeof window === 'undefined') {
        return;
    }

    // Force dark mode always
    updateTheme('dark');
}

const appearance = ref<Appearance>('dark');

export function useAppearance() {
    onMounted(() => {
        // Force dark mode, ignore saved preferences
        appearance.value = 'dark';
    });

    function updateAppearance(value: Appearance) {
        // Force dark mode, ignore any attempts to change
        appearance.value = 'dark';

        // Store in localStorage for consistency
        localStorage.setItem('appearance', 'dark');

        // Store in cookie for SSR
        setCookie('appearance', 'dark');

        updateTheme('dark');
    }

    return {
        appearance,
        updateAppearance,
    };
}
