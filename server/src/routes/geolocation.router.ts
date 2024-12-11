import { Router, Response } from "express";

const geolocationRouter = Router();

/**
 * Attempts to gather the user's Geolocation data
 * ? doesn't work via endpoint right now
 */
geolocationRouter.get("/", async (res: Response) => {
  
});

export default geolocationRouter;
