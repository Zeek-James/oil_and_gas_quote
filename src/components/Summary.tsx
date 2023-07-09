import React from "react";

export const Summary: React.FC = () => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-xs">
          <th className="text-left py-2 ">Summary</th>
          <th className="    rounded-md px-1 max-w-[150px]">
            <p className="h-[50px] py-2 px-6 bg-gray-100  ">
              Extended OEM Cost (Real Rate)
            </p>
          </th>
          <th className="    rounded-md px-1">
            <p className="h-[50px] py-4 px-6 bg-gray-100  max-w-[200px]">
              Duties $ Fees
            </p>
          </th>
          <th className="    rounded-md px-1">
            <p className="h-[50px] py-4 px-6 bg-gray-100  max-w-[200px]">
              Freight Cost
            </p>
          </th>
          <th className="    rounded-md px-1">
            <p className="h-[50px] py-4 px-6 bg-gray-100  max-w-[200px]">WHI</p>
          </th>
          <th className="    rounded-md px-1">
            <p className="h-[50px] py-4 px-6 bg-gray-100  max-w-[200px]">
              Markup
            </p>
          </th>
          <th className="    rounded-md px-1">
            <p className="h-[50px] py-4 px-6 bg-gray-100  max-w-[200px]">
              Cost of Capital
            </p>
          </th>
          <th className="    rounded-md px-1">
            <p className="h-[50px] py-4 px-6 bg-gray-100  max-w-[200px]">
              Extended Price
            </p>
          </th>
        </tr>
      </thead>
      <tbody className="text-xs">
        <tr>
          <td className="py-2 text-left">Revenue</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
        </tr>
        <tr>
          <td className="py-2 text-left">Cost</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
        </tr>
        <tr className="font-bold">
          <td className="py-2 text-left">Profit</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
          <td className="px-4 py-2 text-center">$5,000.00</td>
        </tr>
        <tr>
          <td className="py-2 text-left">Profit Margin</td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center">35%</td>
        </tr>
        <tr>
          <td className="py-2 text-left">Profit Margin/Month</td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center">35%</td>
        </tr>
        <tr>
          <td className="py-2 text-left">Profit Margin/Uplift</td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center">35%</td>
        </tr>
        <tr>
          <td className="py-2 text-left">Total Uplift</td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center"></td>
          <td className="px-4 py-2 text-center">35%</td>
        </tr>
      </tbody>
    </table>
  );
};
