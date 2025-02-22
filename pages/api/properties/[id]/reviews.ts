import { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    // Find the property by ID
    const property = PROPERTYLISTINGSAMPLE.find((p) => p.id === Number(id));

    if (!property) {
        return res.status(404).json({ message: "Property not found" });
    }

    // Return the reviews for the property
    res.status(200).json(property.reviews || []);
}