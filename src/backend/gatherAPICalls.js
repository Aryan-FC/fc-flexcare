import axios from 'axios';
import { secrets } from 'wix-secrets-backend.v2';

export async function setGuestlist(email, nickname) {
  const API_KEY = await secrets.getSecretValue("GATHER_API_KEY");
  const SPACE_ID = await secrets.getSecretValue("CURRENT_SPACE_ID");

  await axios.post("https://api.gather.town/api/setEmailGuestlist", {
    apiKey: API_KEY.value,
    spaceId: SPACE_ID.value,
    guestlist: {[email]:{'name':nickname,'affiliation':'ApprovedUser','role':'guest'}},
    overwrite: false
  })
}
