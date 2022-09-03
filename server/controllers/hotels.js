import Hotels from "../models/Hotels.js";

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
  try {
    const hotels = await Hotels.find();

    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

//

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
  const { id } = req.params;
  try {
    const updated = await Hotels.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ err: "Hotel not found" });
    }
    res.status(200).json(updated);
  } catch (error) {
    next(error);
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
