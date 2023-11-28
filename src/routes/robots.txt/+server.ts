import { url } from '$lib/config';

export const prerender = true;

export async function GET(): Promise<Response> {
	//prettier-ignore

	const body = [
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${url}/sitemap.xml`
      ].join('\n').trim();

	const headers = {
		'Content-Type': 'text/plain'
	};

	return new Response(body, { headers });
}
