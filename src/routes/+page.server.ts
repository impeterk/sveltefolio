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
		const data = await request.formData()
		const email = data.get('email');
		const name = data.get('name')
		const message = data.get('message')

		console.log ({email, name, message})

		if (message) {

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
