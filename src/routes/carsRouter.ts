import { Router } from "express";
import carController from "../controllers/carsController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import { carSchema } from "../schemas/carSchema.js";

const carsRouter = Router();

carsRouter.get("/health", (req, res) => {
  res.send("OK");
});

carsRouter.get("/cars", carController.getAllCars);
carsRouter.get("/cars/:carId", carController.getSpecificCar);
carsRouter.post(
  "/cars",
  validateSchemaMiddleware(carSchema),
  carController.createCar
);
carsRouter.delete("/cars/:carId", carController.deleteCar);

export default carsRouter;
