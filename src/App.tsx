import React, { useState } from "react";
import "./App.css";
import {
  Quotation,
  TotalUnitPrice,
  UnitPriceCIF,
  UnitPriceDuties,
} from "./Extensions";

function App() {
  const [activeComponent, setActiveComponent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
    setShowModal(true);
  };

  const closeModal = () => {
    setActiveComponent("");
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="hidden xl:block  max-w-[1440px] overflow-hidden m-auto">
        <div className="p-3 space-x-2 text-sm">
          <button
            onClick={() => handleComponentChange("unitPriceCIF")}
            className={`rounded-md px-4 py-2 text-sm text-gray-500 font-semibold ${
              activeComponent === "unitPriceCIF"
                ? "bg-yellow-200"
                : "bg-gray-200"
            } hover:bg-yellow-100 active:scale-95 transition-all duration-300`}
          >
            Unit Price CIF
          </button>
          <button
            onClick={() => handleComponentChange("unitPriceDuties")}
            className={`rounded-md px-4 py-2 text-sm text-gray-500 font-semibold ${
              activeComponent === "unitPriceDuties"
                ? "bg-green-200"
                : "bg-gray-200"
            } hover:bg-green-100 active:scale-95 transition-all duration-300`}
          >
            Unit Price Duties
          </button>
          <button
            onClick={() => handleComponentChange("totalUnitPrice")}
            className={`rounded-md px-4 py-2 text-sm text-gray-500 font-semibold ${
              activeComponent === "totalUnitPrice"
                ? "bg-blue-200"
                : "bg-gray-200"
            } hover:bg-blue-100 active:scale-95 transition-all duration-300`}
          >
            Total Unit Price
          </button>
        </div>
        {!showModal && <Quotation />}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              {activeComponent === "unitPriceCIF" && (
                <UnitPriceCIF onClick={closeModal} />
              )}
              {activeComponent === "unitPriceDuties" && (
                <UnitPriceDuties onClick={closeModal} />
              )}
              {activeComponent === "totalUnitPrice" && (
                <TotalUnitPrice onClick={closeModal} />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center h-screen flex-col space-y-6 xl:hidden">
        <h1 className="font-bold text-3xl">
          App is Currently Built for Desktop View
        </h1>
        <p className="font-semibold text-gray-500">
          Please view with a Desktop, responsiveness still in progress
        </p>
      </div>
    </div>
  );
}

export default App;
