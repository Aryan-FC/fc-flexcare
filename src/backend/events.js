import { setGuestlist } from './gatherAPICalls';

export async function wixMembers_onMemberUpdated(event) {
  const member = event.entity;
  console.log("MEMBER UPDATED EVENT:", JSON.stringify(member, null, 2));
  const email = member.loginEmail;
  const nickname = member.profile?.nickname || "Guest";

  if (member.status === "APPROVED") {
    console.log("Member approved:", email);
    await setGuestlist(email, nickname);
  }
}
