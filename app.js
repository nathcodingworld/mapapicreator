"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const falso_1 = require("@ngneat/falso");
const axios = require("axios").default;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const motor = yield axios.get("http://localhost:3004/motor");
        const map = yield axios.get("http://localhost:3004/map");
        const api = [];
        // res.data.forEach((map: any) => {
        //   if (map.Categories === "Branches") {
        //     const fname = randFirstName({ withAccents: false });
        //     const lname = randLastName({ withAccents: false });
        //     const cname = randCompanyName() + " - premiumbike";
        //     api.push({
        //       id: randGitShortSha(),
        //       Title: map.Title,
        //       Address: map.Address,
        //       City: map.City,
        //       State: map.State,
        //       Country: "Philippines",
        //       PostalCode: map.PostalCode,
        //       Region: map.Region,
        //       ContactNumber1: map.ContactNumber1,
        //       ContactNumber2: randPhoneNumber({ countryCode: "PH" }),
        //       OpenHours: map.BankingHours,
        //       Company: cname,
        //       Location: [map.Latitude, map.Longitude],
        //       person: fname + " " + lname,
        //       email: randEmail({ suffix: "com", provider: "gmail", firstName: fname, lastName: lname }),
        //       avatar: randAvatar(),
        //     });
        //   }
        // });
        map.data.forEach((mapa) => {
            const avaialable = [];
            motor.data.forEach((motora) => {
                if (falso_1.randBoolean())
                    avaialable.push(motora.reffid);
            });
            api.push(Object.assign(Object.assign({}, mapa), { motors: avaialable }));
        });
        yield axios.post("http://localhost:3004/combine", api);
        console.log("done");
    }
    catch (error) {
        console.log(error.message);
    }
}))();
