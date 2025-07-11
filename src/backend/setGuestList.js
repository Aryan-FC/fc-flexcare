const axios = require("axios");

axios.default.post("https://api.gather.town/api/setEmailGuestlist", {
  apiKey: "h5MSGrFHfGKCNrNz",
  spaceId: "mMPROwvEy5dSivRw\\aryan-agarwal",
  guestlist: {"firstcontact.lgbtq@gmail.com ":{"name":"FC","affiliation":"test","role":"admin"}},
  overwrite: true,
})

console.log('Done')