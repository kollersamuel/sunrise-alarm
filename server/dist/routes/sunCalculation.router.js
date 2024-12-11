"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var SunCalc = require("suncalc");
const sunCalculationRouter = (0, express_1.Router)();
/**
 * Returns all sunlight times in ISO-8601
 */
sunCalculationRouter.get("/times", (req, res) => {
    var _a;
    if (req.body.latitude !== undefined && req.body.longitude !== undefined) {
        var times = SunCalc.getTimes(new Date(), req.body.latitude, req.body.longitude, (_a = req.body.altitude) !== null && _a !== void 0 ? _a : 0);
        res.status(200).send(times);
    }
    else {
        res.status(400).send("Incomplete geolocation.");
    }
});
exports.default = sunCalculationRouter;
