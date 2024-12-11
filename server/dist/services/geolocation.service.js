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
exports.getGeolocation = void 0;
function getGeolocation() {
    return __awaiter(this, void 0, void 0, function* () {
        // If allowed, gets the user's geolocation.
        if ("geolocation" in navigator) {
            // Geolocation is available
            navigator.geolocation.getCurrentPosition((position) => {
                return {
                    status: 200,
                    data: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        altitude: position.coords.altitude,
                    },
                };
            }, () => {
                return {
                    status: 400,
                    errMsg: "Unable to determine user's geolocation.",
                };
            });
        }
        else {
            // Geolocation is not available
            return {
                status: 400,
                errMsg: "Geolocation unavailable.",
            };
        }
    });
}
exports.getGeolocation = getGeolocation;
