import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
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

// Create a new route for get
router.get("/hotel/:id", getHotel);

// Create a new route from get all
router.get("/", getAllHotels);

export default router;
