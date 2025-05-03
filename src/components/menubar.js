import React, { useState } from "react";

const menuItems = ["Home", "Travel", "Budgeting", "Stocks", "Crypto"];

export default function BottomMenuBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50">
      <div className="flex justify-around py-2">
        {menuItems.map((item, index) => (
          <button
            key={item}
            onClick={() => setActiveIndex(index)}
            className={`flex flex-col items-center text-sm font-medium transition-colors ${
              activeIndex === index
                ? "text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}