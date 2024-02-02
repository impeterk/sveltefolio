import ReactDesktop from '$lib/assets/react-desktop.webp?enhanced';
import ReactMobile from '$lib/assets/react-mobile.webp?enhanced';
import vueDesktop from '$lib/assets/vue-desktop.webp?enhanced';
import vueMobile from '$lib/assets/vue-mobile.webp?enhanced';
import svelteDesktop from '$lib/assets/svelte-desktop.webp?enhanced';
export const projects = [
	{
		id: 0,
		name: 'react',
		content: `<p>Simple react Single page application created with <strong>React</strong> and <strong>Bulma</strong> for styling.
		Utilizes reddit json API to browse posts and subreddits on any device. Tou can even download it, thanks to <storng>PWA</strong> integration.</p>`,
		title: 'React Reddit Client',
		img: {
			desktop: ReactDesktop,
			mobile: ReactMobile
		},
		bgColor: 'bg-sky-500',
		textColor: 'text-slate-950',
		borderColor: 'border-sky-500',
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
			'Single page Full-stack Web Application for Azure DevOps. Handles user authentification, CRUD Operations and connection with <strong>Azure LogicApps</strong>. Created with <strong>Vue </strong> and composition API, <strong>Pinia</strong> for state management, <strong>TailwindCSS</strong> for styling. I have also migrated users from Firebase to <strong>Supabase</strong>',
		title: 'Check my ticket',
		img: {
			desktop: vueDesktop,
			mobile: vueMobile
		},
		bgColor: 'bg-teal-500',
		textColor: 'text-slate-950',
		borderColor: 'border-teal-500',
		href: 'https://www.henkel-adhesives.com/check-my-ticket.html',
		icon: 'logos:vue',
		tech: [
			{ name: 'VueJS', href: 'https://vuejs.org/', icon: 'logos:vue' },
			{ name: 'TailwindCSS', href: 'https://tailwindcss.com/', icon: 'logos:tailwindcss-icon' },
			{ name: 'Supabase', href: 'https://supabase.com/', icon: 'logos:supabase-icon' },
			{ name: 'Firebase', href: 'https://firebase.google.com/', icon: 'logos:firebase' }
		]
	},
	{
		id: 2,
		name: 'svelte',
		content:
			'Full Stack mulit tenant AI focused Web application Created with <strong>SvelteKit</strong>, <strong>TailwindCSS</strong> and <strong>Firebase</strong>. Handles User authentication to correct organization, dedicated APIs for AI. Application has been developed for Henkel.',
		img: {
			desktop: svelteDesktop,
			mobile: ''
		},
		title: 'SEO Catcher',
		bgColor: 'bg-amber-500',
		textColor: 'text-slate-950',
		borderColor: 'border-amber-500',
		href: null,
		icon: 'logos:svelte-icon',
		tech: [
			{ name: 'SvelteKit', href: 'https://kit.svelte.dev/', icon: 'logos:svelte-icon' },
			{ name: 'TailwindCSS', href: 'https://tailwindcss.com/', icon: 'logos:tailwindcss-icon' },
			{ name: 'Firebase', href: 'https://firebase.google.com/', icon: 'logos:firebase' }
		]
	}
];
