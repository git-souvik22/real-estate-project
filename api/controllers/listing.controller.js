import Listing from "../models/listing.model.js";

export const createListing = async (req, res) => {
  try {
    const listing = await Listing.create(req.body);
    const saveListingRecord = await listing.save();
    if (saveListingRecord) {
      return res.status(201).json({
        success: true,
        message: "Listing created successfully",
        listing: saveListingRecord,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
