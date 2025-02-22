import { useRouter } from "next/router";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import { useState } from "react";

export default function BookingPage() {
  const router = useRouter();
  const { id, propertyName, price, bookingFee, totalNights, startDate, propertyImage } = router.query;

  // State for handling form submission
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!id) return <p>Loading booking details...</p>;

  const bookingDetails = {
    propertyName: propertyName as string,
    price: Number(price),
    bookingFee: Number(bookingFee),
    totalNights: Number(totalNights),
    startDate: startDate as string,
    propertyImage: propertyImage as string,
  };

  // Handle booking submission
  const handleBookingSubmit = async (formData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          propertyId: id,
          propertyName,
          totalPrice: bookingDetails.price + bookingDetails.bookingFee,
          startDate: bookingDetails.startDate,
          totalNights: bookingDetails.totalNights,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit booking.");
      }

      const data = await response.json();
      alert("Booking confirmed!");
      console.log("Booking details:", data);
    } catch (error) {
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <BookingForm onSubmit={handleBookingSubmit} loading={loading} error={error} />
        <OrderSummary bookingDetails={bookingDetails} />
        <CancellationPolicy />
      </div>
    </div>
  );
}