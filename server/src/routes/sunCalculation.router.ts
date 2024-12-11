import { Router, Request, Response } from "express";
var SunCalc = require("suncalc");

const sunCalculationRouter = Router();

/**
 * Returns all sunlight times in ISO-8601
 */
sunCalculationRouter.get("/times", (req: Request, res: Response) => {
  if (req.body.latitude !== undefined && req.body.longitude !== undefined) {
    var times = SunCalc.getTimes(
      new Date(),
      req.body.latitude,
      req.body.longitude,
      req.body.altitude ?? 0
    );
    res.status(200).send(times);
  } else {
    res.status(400).send("Incomplete geolocation.");
  }
});

export default sunCalculationRouter;
