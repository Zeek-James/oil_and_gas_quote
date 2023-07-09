import React, { useState } from "react";
import { Product, initialProducts } from "../constants/data";

interface BidDetailsProps {
  quote?: string;
}

export const BidDetails: React.FC<BidDetailsProps> = ({ quote }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [newProductId, setNewProductId] = useState<number>(0);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: number,
    field: keyof Product
  ) => {
    const { value } = event.target;

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              [field]: value,
            }
          : product
      )
    );
  };

  const handleAddRow = () => {
    const newProduct: Product = {
      id: newProductId,
      name: "",
      portNo: "",
      longTest: "",
      manufacturer: "",
      quantity: "",
      weight: "",
      price: "",
      freightPortion: "",
      freightPercent: "",
      unitFreightPrice: "",
      unitPrice: "",
      dutyHSCode: "",
      dutyRate: "",
      totalDuty: "",
      localClearing: "",
      markupPercent: "",
      markup: "",
      duties: "",
      NCD: "",
      WHT: "",
      cost: "",
      totalUnitPrice: "",
      statUplift: "",
      totalUplit: "",
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setNewProductId((prevId) => prevId + 1);
  };
  return (
    <div className="my-6">
      <h1 className="text-base font-semibold">Bid Details</h1>
      <div className=" overflow-x-scroll pb-4">
        <table className="table-auto ">
          <thead>
            <tr>
              <th className="px-4 py-2 font-bold text-xs text-center">
                Product Name
              </th>
              <th className="px-4 py-2 font-bold text-xs text-center">
                Port No
              </th>
              <th className="px-4 py-2 font-bold text-xs text-center">
                Long Test Description
              </th>
              <th className="px-4 py-2 font-bold text-xs text-center">
                Mfg Name
              </th>
              <th className="px-4 py-2 font-bold text-xs text-center">
                Quantity
              </th>
              <th className="px-4 py-2 font-bold text-xs text-center">
                Weight
              </th>

              {quote === "unitPriceCIF" && (
                <>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Price in USD
                  </th>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Freight Portion
                  </th>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Freight %
                  </th>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Unit Freight Price
                  </th>
                </>
              )}
              <th className="px-4 py-2 font-bold text-xs text-center ">
                <p className="bg-gray-100 p-1 rounded-md w-[140px]">
                  Unit Price CIF (Freight,Insurance, OEM)
                </p>
              </th>
              {quote === "unitPriceDuties" && (
                <>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Duty HS Code
                  </th>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Duty Rate
                  </th>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Total Duty(Surcharge TISS, VAT,TLS)
                  </th>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Local Clearing
                  </th>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Markup %
                  </th>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Markup
                  </th>
                </>
              )}

              <th className="px-4 py-2 font-bold text-xs text-center ">
                <p className="bg-gray-100 p-1 rounded-md w-[100px]">
                  Unit Price Duties(Landed to Nigeria)
                </p>
              </th>
              {quote === "totalUnitPrice" && (
                <>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    1% NCD Charge
                  </th>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    WHT
                  </th>
                  <th className="px-4 py-2 font-bold text-xs text-center">
                    Cost of Capital
                  </th>
                </>
              )}
              <th className="px-4 py-2 font-bold text-xs text-center ">
                <p className="bg-gray-100 p-1 rounded-md w-[100px]">
                  Total Unit Price(Q + R)
                </p>
              </th>
              <th className="px-4 py-2 font-bold text-xs text-center">
                Stat. Uplift
              </th>
              <th className="px-4 py-2 font-bold text-xs text-center">
                Total Uplift
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.name}
                    onChange={(e) => handleInputChange(e, product.id, "name")}
                  />
                </td>
                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.portNo}
                    onChange={(e) => handleInputChange(e, product.id, "portNo")}
                  />
                </td>
                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.longTest}
                    onChange={(e) =>
                      handleInputChange(e, product.id, "longTest")
                    }
                  />
                </td>
                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.manufacturer}
                    onChange={(e) =>
                      handleInputChange(e, product.id, "manufacturer")
                    }
                  />
                </td>
                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.quantity}
                    onChange={(e) =>
                      handleInputChange(e, product.id, "quantity")
                    }
                  />
                </td>
                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.weight}
                    onChange={(e) => handleInputChange(e, product.id, "weight")}
                  />
                </td>
                {quote === "unitPriceCIF" && (
                  <>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.price}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "price")
                        }
                      />
                    </td>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.freightPortion}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "freightPortion")
                        }
                      />
                    </td>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.freightPercent}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "freightPercent")
                        }
                      />
                    </td>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.unitFreightPrice}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "unitFreightPrice")
                        }
                      />
                    </td>
                  </>
                )}
                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.unitPrice}
                    onChange={(e) =>
                      handleInputChange(e, product.id, "unitPrice")
                    }
                  />
                </td>
                {quote === "unitPriceDuties" && (
                  <>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.dutyHSCode}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "dutyHSCode")
                        }
                      />
                    </td>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.dutyRate}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "dutyRate")
                        }
                      />
                    </td>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.totalDuty}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "totalDuty")
                        }
                      />
                    </td>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.localClearing}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "localClearing")
                        }
                      />
                    </td>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.markupPercent}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "markupPercent")
                        }
                      />
                    </td>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.markup}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "markup")
                        }
                      />
                    </td>
                  </>
                )}

                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.duties}
                    onChange={(e) => handleInputChange(e, product.id, "duties")}
                  />
                </td>
                {quote === "totalUnitPrice" && (
                  <>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.NCD}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "NCD")
                        }
                      />
                    </td>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.WHT}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "WHT")
                        }
                      />
                    </td>
                    <td className="rounded-md h-8 p-[2px]">
                      <input
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                        type="text"
                        value={product.cost}
                        onChange={(e) =>
                          handleInputChange(e, product.id, "cost")
                        }
                      />
                    </td>
                  </>
                )}
                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.totalUnitPrice}
                    onChange={(e) =>
                      handleInputChange(e, product.id, "totalUnitPrice")
                    }
                  />
                </td>
                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.statUplift}
                    onChange={(e) =>
                      handleInputChange(e, product.id, "statUplift")
                    }
                  />
                </td>
                <td className="rounded-md h-8 p-[2px]">
                  <input
                    className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md h-8"
                    type="text"
                    value={product.totalUplit}
                    onChange={(e) =>
                      handleInputChange(e, product.id, "totalUplit")
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleAddRow}
        className="rounded-md p-2 mt-2 text-gray-500 font-semibold  bg-gray-200 text-sm hover:bg-gray-100 active:scale-95 transition-all duration-300"
      >
        + Add line
      </button>
    </div>
  );
};
