import type { Actions } from './$types';
// import { mailer } from '$lib/server/mailer';

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
		// const data = await request.formData()
		// const email = data.get('email') as string;
		// const name = data.get('name') as string
		// const message = data.get('message') as string


		// // const response = await mailer({email, name, message})
		
		// if (response) {
		// 	return {
		// 		success: true
		// 	}
		// } else {
		// 	return {
		// 		error: true
		// 	}
		// }
	}
};
