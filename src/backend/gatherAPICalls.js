import { secrets } from 'wix-secrets-backend.v2';

export async function setGuestlist(email, nickname) {
  const API_KEY = await secrets.getSecretValue("GATHER_API_KEY");
  const SPACE_ID = await secrets.getSecretValue("CURRENT_SPACE_ID");

  const guestEntry = {
    [email]: {
      name: nickname || "User",
      affiliation: "ApprovedUser",
      role: "guest"
    }
  };

  await fetch("https://api.gather.town/api/setEmailGuestlist", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apiKey: API_KEY.value,
      spaceId: SPACE_ID.value,
      guestlist: guestEntry,
      overwrite: false
    })
  });
}
