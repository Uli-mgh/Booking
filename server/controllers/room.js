import Room from "../models/Rooms.js";
import { createError } from "../utils/error.js";
import Hotels from "../models/Hotels";

export const createRoom = async (req, res, next) => {
  const hotelID = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();

    try {
      await Hotels.findByIdAndUpdate(hotelID, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};
