import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === Number(id));

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto p-6">
      <PropertyDetail property={property} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <ReviewSection reviews={property.reviews} />
        </div>
        <div className="lg:col-span-1">
          <BookingSection price={property.price} propertyId={property.id} propertyName={property.name} />
        </div>
      </div>
    </div>
  );
}