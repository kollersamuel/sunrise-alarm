import express from "express";
import mongoose from 'mongoose';
import geolocationRouter from "./routes/geolocation.router";
import sunCalculationRouter from "./routes/sunCalculation.router";

class App {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    console.log(`Starting on port ${port}.`)
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRoutes();
    // this.connectToDatabase();
  }

  private initializeMiddlewares() {
    // Add your middlewares here
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes() {
    // Use the geolocation route
    this.app.use("/geolocation", geolocationRouter);
    this.app.use("/sun-calculations", sunCalculationRouter);
  }

  // private connectToDatabase() {
  //   // Replace 'mongodb://localhost:27017/your-database' with your MongoDB connection string
  //   mongoose.connect('mongodb://localhost:27017/your-database', {
  //     // useNewUrlParser: true,
  //     // useUnifiedTopology: true,
  //   })
  //     .then(() => console.log('Connected to MongoDB'))
  //     .catch((error) => console.error('Error connecting to MongoDB:', error));
  // }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server started at http://localhost:${this.port}`);
    });
  }
}

export default App;
