import type { Actions } from './$types';

export const actions: Actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme');

		if (theme) {
			cookies.set('colortheme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}
	},
	contact: async({request}) => {
		const response = await fetch("https://www.mylinkz.one/api/contact", {
			method: 'POST', 
		body: await request.formData()
	})
		if (response.ok) {
			return {
				success: true
			}
		} else {
			return {
				error: true
			}
		}
	}
};
