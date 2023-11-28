import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { url } from '$lib/config';

export const GET: RequestHandler = async () => {
	return await sitemap.response({
		origin: url
	});
};
