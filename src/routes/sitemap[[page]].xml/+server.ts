import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { url } from '$lib/config';

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	return await sitemap.response({
		origin: url,
		page: params.page
	});
};
