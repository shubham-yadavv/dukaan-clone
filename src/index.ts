import express, { Application, Request, Response } from "express";
const helmet = require("helmet");
import SellerRoutes from "./router/seller.route";
import buyerRoutes from "./router/buyer.route";
import bodyParser from 'body-parser'
import session from "express-session";



class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins()
    this.routes()

  }

  protected plugins(): void {
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(
      session({
        name: 'SESSION',
        secret: 'SECRET',
        resave: false,
        saveUninitialized: true,
      })
    );
  }

  protected routes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("dukaan API!");
    });

    this.app.use("/api/seller", SellerRoutes)
    this.app.use("/api/buyer", buyerRoutes)
  }
}

const port = 3000;
const app = new App().app;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
