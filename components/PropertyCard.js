import React from "react";

function PropertyCard({ property, className }) {
  return (
    <div
      className={`bg-white border rounded-lg overflow-hidden shadow-lg ${className}`}
    >
      <img src={property.imageUrl} alt={property.imageAlt} />
      <div className="p-6">
        <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
          {property.beds} beds &bull; {property.baths} baths
        </div>
        <h4 className="font-semibold text-lg leading-tight truncate">
          {property.title}
        </h4>
        <div className="mt-1">
          {property.formattedPrice}
          <span className="text-gray-600 text-sm"> / wk</span>
        </div>
        <div className="mt-2 flex items-center">
          {[...Array(5).keys()].map((i) => (
            <svg
              key={i}
              className={`h-4 w-4 fill-current ${
                i < property.rating ? "text-teal-500" : "text-gray-400"
              }`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.133 20.333c-1.147.628-2.488-.387-2.269-1.718l.739-4.488-3.13-3.178c-.927-.943-.415-2.585.867-2.78l4.324-.654 1.934-4.083a1.536 1.536 0 0 1 2.804 0l1.934 4.083 4.324.655c1.282.194 1.794 1.836.866 2.78l-3.129 3.177.739 4.488c.219 1.331-1.122 2.346-2.269 1.718L12 18.214l-3.867 2.119z"
                fillRule="evenodd"
              />
            </svg>
          ))}
          <span className="ml-2 text-gray-600 text-sm">
            {property.reviewCount} reviews
          </span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
