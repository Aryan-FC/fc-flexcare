import { ok, badRequest } from 'wix-http-functions';
import { setGuestlist } from 'backend/gatherAPICalls.js';

export async function post_set_guestlist(request) {
  try {
    const body = await request.body.json();
    const email = body.email;
    const name = body.name;

    await setGuestlist(email, name);
    return ok({ body: { success: true } });
  } catch (e) {
    console.error("Error in POST /set_guestlist:", e);
    return badRequest({ body: { error: e.message } });
  }
}
