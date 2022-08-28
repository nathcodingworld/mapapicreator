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
        const res = yield axios.get("http://localhost:3004/maps");
        const api = [];
        res.data.forEach((loc) => {
            const fname = falso_1.randFirstName({ withAccents: false });
            const lname = falso_1.randLastName({ withAccents: false });
            const cname = falso_1.randCompanyName() + " - premiumbike";
            api.push(Object.assign(Object.assign({ id: falso_1.randGitShortSha() }, falso_1.randAddress({ includeCountry: false })), { country: "Philippines", company: cname, location: loc, contacts: falso_1.randPhoneNumber({ countryCode: "PH" }), person: fname + " " + lname, email: falso_1.randEmail({ suffix: "com", provider: "gmail", firstName: fname, lastName: lname }), avatar: falso_1.randAvatar() }));
        });
        yield axios.post("http://localhost:3004/mapapi", api);
        console.log("done");
    }
    catch (error) {
        console.log(error.message);
    }
}))();
