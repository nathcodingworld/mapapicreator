// import { randAvatar, randBoolean, randCompanyName, randEmail, randFirstName, randGitShortSha, randLastName, randPhoneNumber } from "@ngneat/falso";
const axios = require("axios").default;
(async () => {
  try {
    const motor = await axios.get("http://localhost:3004/motor");
    const map = await axios.get("http://localhost:3004/mapmotor");
    const api: any = [];

    motor.data.forEach((motos: any) => {
      const avaialable: any[] = []
      map.data.forEach((mapas: any) => {
        if(mapas.motors.includes(motos.reffid)) avaialable.push("true")
        else avaialable.push("false")
      })
      api.push(avaialable);
    });
    await axios.post("http://localhost:3004/combine", api);

    console.log("done");
  } catch (error: any) {
    console.log(error.message);
  }
})();
