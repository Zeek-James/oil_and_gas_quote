import React from "react";

type Props = {};

export const Parameters = (props: Props) => {
  return (
    <div className="border-b border-gray-300 pb-2">
      <h1 className="text-base font-semibold mb-3">Parameters</h1>
      <div className="flex">
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-6 max-w-[990px] mb-2">
            <h2 className="text-center font-bold text-sm bg-blue-100 p-1">
              BFQ Number
            </h2>
            <input
              className="rounded-md h-8 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
              type="text"
            />
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-[990px]">
            <div>
              <div className="text-xs space-y-2">
                <h2 className="text-center font-bold text-sm bg-gray-100 p-1">
                  General
                </h2>
                <ParameterRow label="Markup by line item" />
                <ParameterRow label="Markup by %" />
                <ParameterRow label="Withholding Tax" />
                <ParameterRow label="Monthly Cost of Capital (Client)" />
                <ParameterRow label="Monthly Cost of Capital (NoemDek)" />
                <ParameterRow label="OEM Discount" />
                <ParameterRow label="Payment Timing After Invoice" />
              </div>
            </div>
            <div>
              <div className="text-xs space-y-2">
                <h2 className="text-center font-bold text-sm bg-gray-100 p-1">
                  Duties & Fees
                </h2>
                <ParameterRow label="Surcharge" />
                <ParameterRow label="CISS" />
                <ParameterRow label="VAT" />
                <ParameterRow label="TLS" />
                <ParameterRow label="Local Clearing" />
              </div>
            </div>
            <div>
              <div className="text-xs space-y-2">
                <h2 className="text-center font-bold text-sm bg-gray-100 p-1">
                  Freight
                </h2>
                <ParameterRow label="Insurance" />
                <ParameterRow label="Total Weight" />
                <ParameterRow label="Total Freight Cost" />
                <ParameterRow label="Weight Approach" />
                <ParameterRow label="Delivery Load Time" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[250px] w-[220px] shadow-lg border rounded-md p-2 border-gray-200">
          <p className="font-semibold text-sm">Quote Pipeline</p>
        </div>
      </div>
    </div>
  );
};

type ParameterRowProps = {
  label: string;
};

const ParameterRow: React.FC<ParameterRowProps> = ({ label }) => {
  return (
    <div className="flex justify-between items-center">
      {label}
      <input
        className="w-[100px] border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
        type="text"
      />
    </div>
  );
};
