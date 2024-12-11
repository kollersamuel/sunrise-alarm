"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const geolocation_router_1 = __importDefault(require("./routes/geolocation.router"));
const sunCalculation_router_1 = __importDefault(require("./routes/sunCalculation.router"));
class App {
    constructor(port) {
        console.log(`Starting on port ${port}.`);
        this.app = (0, express_1.default)();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeRoutes();
        // this.connectToDatabase();
    }
    initializeMiddlewares() {
        // Add your middlewares here
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeRoutes() {
        // Use the geolocation route
        this.app.use("/geolocation", geolocation_router_1.default);
        this.app.use("/sun-calculations", sunCalculation_router_1.default);
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
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server started at http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
