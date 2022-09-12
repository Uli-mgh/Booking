import Hotels from "../models/Hotels.js";
import Rooms from "../models/Rooms.js";

export const getHotel = async (req, res, next) => {
  try {
    const { id } = req.params;

    const hotel = await Hotels.findById(id);
    if (!hotel) return res.status(404).json({ err: "Not Found" });

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const getAllHotels = async (req, res, next) => {
  const { min, max, ...other } = req.query;

  try {
    const hotels = await Hotels.find({
      ...other,
      cheapest: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);

    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

export const getByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotels.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotels.countDocuments({ type: "hotel" });

    const apartmentCount = await Hotels.countDocuments({ type: "apartment" });

    const resortCount = await Hotels.countDocuments({ type: "resort" });
    Hotels;
    const villaCount = await Hotels.countDocuments({ type: "villa" });

    const cabinCount = await Hotels.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};

// get hotel rooms bc hotels have rooms available

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotels.findById(req.params.id);

    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Rooms.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

////////////////////////////////////////////////////////////////

export const deleteHotel = async (req, res, next) => {
  try {
    const deleted = await Hotels.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ err: "Not Found" });

    res.status(200).json({ msg: "Hotel deleted" });
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedHotel) return res.status(404).json("not found");

    res.status(200).json(updatedHotel);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const createHotel = async (req, res, next) => {
  try {
    const newHotel = new Hotels(req.body);

    const storeHotel = await newHotel.save();

    res.status(200).json(storeHotel);
  } catch (error) {
    next(error);
  }
};
