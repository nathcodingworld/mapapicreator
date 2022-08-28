import { randAvatar, randCompanyName, randEmail, randFirstName, randGitShortSha, randLastName, randPhoneNumber } from "@ngneat/falso";
const axios = require("axios").default;
(async () => {
  try {
    const res = await axios.get("http://localhost:3004/mapcomplete");
    const api: any = [];
    res.data.forEach((map: any) => {
      if (map.Categories === "Branches") {
        const fname = randFirstName({ withAccents: false });
        const lname = randLastName({ withAccents: false });
        const cname = randCompanyName() + " - premiumbike";
        api.push({
          id: randGitShortSha(),
          Title: map.Title,
          Address: map.Address,
          City: map.City,
          State: map.State,
          Country: "Philippines",
          PostalCode: map.PostalCode,
          Region: map.Region,
          ContactNumber1: map.ContactNumber1,
          ContactNumber2: randPhoneNumber({ countryCode: "PH" }),
          OpenHours: map.BankingHours,
          Company: cname,
          Location: [map.Latitude, map.Longitude],
          person: fname + " " + lname,
          email: randEmail({ suffix: "com", provider: "gmail", firstName: fname, lastName: lname }),
          avatar: randAvatar(),
        });
      }
    });
    await axios.post("http://localhost:3004/mapcompleteapi", api);
    console.log("done");
  } catch (error: any) {
    console.log(error.message);
  }
})();
