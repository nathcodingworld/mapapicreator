import { faker } from "@faker-js/faker";
import { randAddress, randAvatar, randCompanyName, randEmail, randFirstName, randGitShortSha, randLastName, randPhoneNumber } from "@ngneat/falso";
const axios = require("axios").default;
(async () => {
  try {
    const res = await axios.get("http://localhost:3004/maps");
    const api: any = [];
    res.data.forEach((loc: number[]) => {
      const fname = randFirstName({ withAccents: false });
      const lname = randLastName({ withAccents: false });
      const cname = randCompanyName() + " - premiumbike";
      api.push({
        id: randGitShortSha(),
        ...randAddress({ includeCountry: false }),
        country: "Philippines",
        company: cname,
        location: loc,
        contacts: randPhoneNumber({ countryCode: "PH" }),
        person: fname + " " + lname,
        email: randEmail({ suffix: "com", provider: "gmail", firstName: fname, lastName: lname }),
        avatar: randAvatar(),
      });
    });
    await axios.post("http://localhost:3004/mapapi", api);
    console.log("done");
  } catch (error: any) {
    console.log(error.message);
  }
})();
