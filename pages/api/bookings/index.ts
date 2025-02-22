import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

// Path to the JSON file where bookings will be stored
const BOOKINGS_FILE_PATH = path.join(process.cwd(), "data", "bookings.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        // Read existing bookings from the file
        let bookings = [];
        if (fs.existsSync(BOOKINGS_FILE_PATH)) {
            const fileData = fs.readFileSync(BOOKINGS_FILE_PATH, "utf-8");
            bookings = JSON.parse(fileData);
        }

        // Add the new booking to the array
        const newBooking = {
            id: bookings.length + 1, // Generate a unique ID
            ...req.body, // Include the form data
            timestamp: new Date().toISOString(), // Add a timestamp
        };
        bookings.push(newBooking);

        // Write the updated bookings back to the file
        fs.writeFileSync(BOOKINGS_FILE_PATH, JSON.stringify(bookings, null, 2));

        // Return a success response
        res.status(201).json({ message: "Booking confirmed!", booking: newBooking });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}