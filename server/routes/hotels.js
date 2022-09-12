import express from "express";
import {
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getByCity,
  getHotel,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();

//  Create a new route for post hotels
router.post("/", verifyAdmin, createHotel);

// Create a new route for delete
router.delete("/:id", verifyAdmin, deleteHotel);

// Create a new route for Update Hotels
router.put("/:id", verifyAdmin, updateHotel);

/////////////////////////////////////////////////////////////////////

// GET METHODS

// Create a new route from get all
router.get("/", getAllHotels);

// Create a new route for get
router.get("/hotel/:id", getHotel);

// GET by city & Type

// this endpoints expects a query for city or type of room, hotel
router.get("/city", getByCity);
router.get("/type", countByType);

// GET room hotels
router.get("/room/:id", getHotelRooms);

export default router;
