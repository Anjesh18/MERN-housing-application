import express from "express";
import { singleUpload } from "../middlewares/multer.js";
import {
    deleteHouseByIdController,
  getAllHouseController,
  getHouseByIdController,
  getHousesBySingleUserController,
  newHouseCotroller,
  searchHouseController,
} from "../controllers/houseController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/newHouse", isAuthenticated, singleUpload, newHouseCotroller);

router.get("/getHouses", getAllHouseController);

router.get("/house/:id", getHouseByIdController);

router.post("/houses/user", isAuthenticated, getHousesBySingleUserController);

router.delete('/deleteHouse', deleteHouseByIdController)

router.get('/get', searchHouseController)

export default router;
