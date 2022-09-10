import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoomById,
  getRooms,
  roomAvailable,
  updateRoom,
} from "../controllers/room";
import { verifyAdmin } from "../utils/verify";

const router = express.Router();

////////////////////////////////
//CreateRoom
router.post("/:hotelid", verifyAdmin, createRoom);

//UpdateRoom
router.put("/:id", verifyAdmin, updateRoom);
router.put("/:id/:hotelid", verifyAdmin, roomAvailable);

//DeleteRoom
router.delete("/:id", verifyAdmin, deleteRoom);

//Gets
router.get("/", getRooms);
router.get("/:id", getRoomById);

export default router;
