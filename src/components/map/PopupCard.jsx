import React from "react";
import { motion } from "framer-motion";

export default function PopupCard({ area, searchInterest, averagePrice }) {
  const getInterestColor = (interest) => {
    if (interest >= 15) return "text-green-600 bg-green-50";
    if (interest >= 10) return "text-blue-600 bg-blue-50";
    if (interest >= 7) return "text-yellow-600 bg-yellow-50";
    return "text-gray-600 bg-gray-50";
  };

  const getInterestLevel = (interest) => {
    if (interest >= 15) return "Very High";
    if (interest >= 10) return "High";
    if (interest >= 7) return "Medium";
    return "Low";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-lg p-4 shadow-xl border border-gray-200 min-w-[280px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-primary">{area}</h3>
        <div
          className={`px-3 py-1 rounded-full text-xs font-semibold ${getInterestColor(
            searchInterest
          )}`}
        >
          {searchInterest}% Interest
        </div>
      </div>

      {/* Interest Level */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-warmGray">Search Interest</span>
          <span className="text-sm font-medium text-primary">
            {getInterestLevel(searchInterest)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(searchInterest * 5, 100)}%` }}
          />
        </div>
      </div>

      {/* Price Range */}
      {/* <div className="mb-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-warmGray">Price Range</span>
          <span className="text-sm font-medium text-primary">{averagePrice}</span>
        </div>
      </div> */}

      {/* Investment Potential */}
      <div className="pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span className="text-xs text-warmGray">
            {searchInterest >= 15
              ? "Prime Investment Zone"
              : searchInterest >= 10
              ? "High Growth Potential"
              : searchInterest >= 7
              ? "Stable Investment"
              : "Emerging Area"}
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <a
          href={`https://www.google.com/search?q=${encodeURIComponent(
            area + " properties for sale"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-primary text-white text-sm font-medium py-2 px-4 rounded-lg text-center hover:bg-primary/90 transition-colors duration-200"
        >
          View Properties
        </a>
      </div>
    </motion.div>
  );
}
