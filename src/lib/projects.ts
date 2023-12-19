export const projects = [
	{
		id: 0,
		name: 'react',
		content: `<p>Simple react Single page application created with <strong>React</strong> and <strong>Bulma</strong> for styling. 
            Utilizes reddit json API to browse posts and subreddits on any device. Tou can even download it, thanks to <storng>PWA</strong> integration.</p>`,
		title: 'React Reddit Client',
		img: {
			desktop: '/react-desktop.webp',
			mobile: '/react-mobile.webp'
		},
		bgColor: 'bg-sky-600',
		textColor: 'text-sky-100',
		borderColor: 'border-sky-600',
		href: 'https://reddit.peterkudelas.eu/about',
		icon: 'logos:react',
		tech: [
			{ name: 'react', href: 'https://react.dev/', icon: 'logos:react' },
			{ name: 'redux', href: 'https://redux.js.org/', icon: 'logos:redux' },
			{ name: 'bulmaCSS', href: 'https://bulma.io/', icon: 'logos:bulma' }
		]
	},
	{
		id: 1,
		name: 'vue',
		content:
			'Single page Full-stack Web Application for Azure DevOps. Handles user authentification, API calls to Read, Update and Create new tickets. Created with <strong>Vue</strong>, <strong>Pinia</strong> for state management, <strong>TailwindCSS</strong> for styling and <strong>Firebase</strong for backend.',
		title: 'Check my ticket',
		img: {
			desktop: '/vue-desktop.webp',
			mobile: '/vue-mobile.webp'
		},
		bgColor: 'bg-teal-600',
		textColor: 'text-teal-100',
		borderColor: 'border-teal-600',
		href: 'https://www.henkel-adhesives.com/check-my-ticket.html',
		icon: 'logos:vue',
		tech: [
			{ name: 'VueJS', href: 'https://vuejs.org/', icon: 'logos:vue' },
			{ name: 'Pinia', href: 'https://pinia.vuejs.org/', icon: 'logos:pinia' },
			{ name: 'TailwindCSS', href: 'https://tailwindcss.com/', icon: 'logos:tailwindcss-icon' },
			{ name: 'Firebase', href: 'https://firebase.google.com/', icon: 'logos:firebase' }
		]
	},
	{
		id: 2,
		name: 'svelte',
		content:
			'Full Stack mulit tenant Web application, which helps you with SEO. Includes user Authentication, REST API and much more. Created with <strong>SvelteKit</strong>, <strong>TailwindCSS</strong> and <strong>Firebase</strong>',
		img: {
			desktop: '/svelte-desktop.webp',
			mobile: ''
		},
		title: 'SEO Catcher',
		bgColor: 'bg-amber-700',
		textColor: 'text-amber-100',
		borderColor: 'border-amber-700',
		icon: 'logos:svelte-icon',
		tech: [
			{ name: 'SvelteKit', href: 'https://kit.svelte.dev/', icon: 'logos:svelte-icon' },
			{ name: 'TailwindCSS', href: 'https://tailwindcss.com/', icon: 'logos:tailwindcss-icon' },
			{ name: 'Firebase', href: 'https://firebase.google.com/', icon: 'logos:firebase' }
		]
	}
];
