import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const theme = cookies.get('colortheme') ?? 'system';
	return { colorTheme: theme };
}) satisfies LayoutServerLoad;
