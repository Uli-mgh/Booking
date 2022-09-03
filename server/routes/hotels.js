import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotels.js";

const router = express.Router();

//  Create a new route for post hotels
router.post("/", createHotel);

// Create a new route for delete
router.delete("/:id", deleteHotel);

// Create a new route for Update Hotels
router.put("/:id", updateHotel);

// Create a new route for get
router.get("/hotel/:id", getHotel);

// Create a new route from get all
router.get("/", getAllHotels);

export default router;
