import { error} from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { mailer } from '$lib/server/mailer';

export const POST: RequestHandler = async ({request}) => {
    console.log({request})
    const {email, name, message} = await request.json()
    
    console.log({email, name, message})
    const response = await mailer({email, name, message})

    if (!response) {
        error(400, 'Something went wrong')
    }
    
    return new Response(String('mail was sent'))

}