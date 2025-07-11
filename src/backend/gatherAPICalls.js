import axios from "axios";
import { secrets } from "wix-secrets-backend.v2";

export async function setGuestlist(email, nickname) {
  const API_KEY = await secrets.getSecretValue("GATHER_API_KEY");
  const SPACE_ID = await secrets.getSecretValue("CURRENT_SPACE_ID");

  console.log("spaceId as raw string:", SPACE_ID.value);
  console.log("Type of spaceId:", typeof SPACE_ID.value);

  console.log("Sending to Gather:", {
    apiKey: API_KEY.value,
    spaceId: SPACE_ID.value,
    guestlist: {
      [email]: { name: nickname, affiliation: "ApprovedUser", role: "guest" },
    },
    overwrite: false,
  });

  try {
    await axios.post("https://api.gather.town/api/setEmailGuestlist", {
      apiKey: API_KEY.value,
      spaceId: SPACE_ID.value,
      guestlist: {
        [email]: { name: nickname, affiliation: "ApprovedUser", role: "guest" },
      },
      overwrite: false,
    });
  } catch (err) {
    console.error("Axios error response:", err.response?.data);
    console.error("Full error object:", err);
  }
}
