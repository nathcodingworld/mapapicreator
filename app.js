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
// import { randAvatar, randBoolean, randCompanyName, randEmail, randFirstName, randGitShortSha, randLastName, randPhoneNumber } from "@ngneat/falso";
const axios = require("axios").default;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const motor = yield axios.get("http://localhost:3004/motor");
        const map = yield axios.get("http://localhost:3004/mapmotor");
        const api = [];
        motor.data.forEach((motos) => {
            const avaialable = [];
            map.data.forEach((mapas) => {
                if (mapas.motors.includes(motos.reffid))
                    avaialable.push("true");
                else
                    avaialable.push("false");
            });
            api.push(avaialable);
        });
        yield axios.post("http://localhost:3004/combine", api);
        console.log("done");
    }
    catch (error) {
        console.log(error.message);
    }
}))();
