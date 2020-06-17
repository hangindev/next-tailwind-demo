import React from "react";
import Nav from "../components/Nav";
import PropertyCard from "../components/PropertyCard";

function Home() {
  return (
    <div className="bg-gray-200 min-h-screen p-8 flex flex-col justify-center items-center">
      <Nav />
      <PropertyCard
        className="mt-2"
        property={{
          imageUrl:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern home in city center",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4,
        }}
      />
    </div>
  );
}

export default Home;
