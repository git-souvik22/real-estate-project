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

export const deleteListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return res.status(404).json({
      success: false,
      message: "Listing not Found!",
    });
  }
  if (req.user.id !== listing.userRef.toString()) {
    return res.status(500).json({
      success: false,
      message: "You can only delete your listing",
    });
  }
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(202).json({
      success: true,
      message: "Listing successfully deleted!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

export const updateListing = async (req, res) => {
  const listingExist = await Listing.findById(req.params.id);
  if (!listingExist) {
    return res.status(404).json({
      success: false,
      message: "No listing found",
    });
  }
  if (req.user.id !== listingExist.userRef) {
    return res.status(500).json({
      success: false,
      message: "You can only update your own published listing",
    });
  }
  try {
    const updatelisting = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatelisting) {
      res.status(201).json({
        success: true,
        listing: updatelisting,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error,
    });
  }
};
