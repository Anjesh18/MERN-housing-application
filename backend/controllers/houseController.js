import { House } from "../models/houseModel.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";

export const newHouseCotroller = async (req, res) => {
  try {
    const {
      type,
      propertyName,
      houseType,
      location,
      bathrooms,
      furnished,
      price,
      buildupArea,
      carpetArea,
      balconies,
      tenantType,
      securityDeposit,
      bhkType,
    } = req.body;
    const userId = req.id;

    const files = req.files;
    const uploadedImages = [];
    if (files) {
      for (const file of files) {
        const fileUri = getDataUri(file).content;
        const result = await cloudinary.uploader.upload(fileUri);
        uploadedImages.push(result.secure_url);
      }
    }

    const newHouse = House.create({
      postedBy: userId,
      propertyName: propertyName,
      houseType: houseType,
      type: type,
      location: location,
      bathrooms: Number(bathrooms),
      furnished: furnished,
      price: Number(price),
      buildupArea: Number(buildupArea),
      carpetArea: Number(carpetArea),
      balconies: Number(balconies),
      tenantType: tenantType,
      securityDeposit: Number(securityDeposit),
      bhkType: bhkType,
      pictures: uploadedImages,
    });
    return res
      .status(201)
      .json({ message: "House posted successfully", success: true, newHouse });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

export const getAllHouseController = async (req, res) => {
  try {
    const houses = await House.find({}).populate({ path: "postedBy" });
    if (!houses) {
      return res
        .status(404)
        .json({ message: "No ouse found :(", success: false });
    }
    return res
      .status(201)
      .json({ message: "Houses fetched successfully", success: true, houses });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

export const getHouseByIdController = async (req, res) => {
  try {
    const houseId = req.params.id;
    const house = await House.findById(houseId).populate({ path: "postedBy" });
    if (!house) {
      return res
        .status(404)
        .json({ message: "No ouse found :(", success: false });
    }
    return res
      .status(202)
      .json({ message: "House found successfully", success: true, house });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

export const getHousesBySingleUserController = async (req, res) => {
  try {
    const userId = req.id;
    const houses = await House.find({ postedBy: userId }).populate({
      path: "postedBy",
    });
    if (!houses) {
      return res
        .status(404)
        .json({ message: "No record found", success: false });
    }
    return res
      .status(201)
      .json({ message: "Houses found successfully", success: true, houses });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

export const deleteHouseByIdController = async (req, res) => {
  try {
    const houseId = req.params.id;
    const deleteHouse = await House.findByIdAndDelete(houseId);
    if (!deleteHouse) {
      return res
        .status(406)
        .json({ message: "House could not be deleted ", success: false });
    }
    return res
      .status(202)
      .json({ message: "House deleted successfully", success: true });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

export const searchHouseController = async (req, res) => {
  try {
    const keyword = req.query.q;
    const results = await House.find({
      $or: [
        { location: { $regex: keyword, $options: "i" } },
        { propertyName: { $regex: keyword, $options: "i" } },
        { bhkType: { $regex: keyword, $options: "i" } },
        { houseType: { $regex: keyword, $options: "i" } },
      ],
    }).populate({ path: "postedBy" });
    if (!results) {
      return res
        .status(500)
        .json({ message: "Houses could not be found", success: false });
    }
    return res
      .status(201)
      .json({ message: "Houses found", success: true, results });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
