import { getAllSignups } from "../models/subscriberModel.js";

export const thankyou = (req, res) => {
    res.json(getAllSignups);
  };