import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`/src/posts/${params.slug}.md`)
        const heroImage = await import(`/${post.metadata.image}?enhanced`)
		return {
			content: post.default,
			meta: post.metadata,
            heroImage: heroImage.default
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
