export type Product = {
  id: number;
  name: string;
  portNo: string;
  longTest: string;
  manufacturer: string;
  quantity: string;
  weight: string;
  // CIF start
  price?: string;
  freightPortion?: string;
  freightPercent?: string;
  unitFreightPrice?: string;
  // CIF end
  unitPrice: string;
  // Duties start
  dutyHSCode?: string;
  dutyRate?: string;
  totalDuty?: string;
  localClearing?: string;
  markupPercent?: string;
  markup?: string;
  // Duties end
  duties: string;
  // Total units start
  NCD?: string;
  WHT?: string;
  cost?: string;
  // Total units end
  totalUnitPrice: string;
  statUplift: string;
  totalUplit: string;
};

export const initialProducts: Product[] = [
  {
    id: 1,
    name: "",
    portNo: "",
    longTest: "",
    manufacturer: "",
    quantity: "",
    weight: "",
    // CIF start
    price: "",
    freightPortion: "",
    freightPercent: "",
    unitFreightPrice: "",
    // CIF end
    unitPrice: "",
    // Duties start
    dutyHSCode: "",
    dutyRate: "",
    totalDuty: "",
    localClearing: "",
    markupPercent: "",
    markup: "",
    // Duties end
    duties: "",
    // Total units start
    NCD: "",
    WHT: "",
    cost: "",
    // Total units end
    totalUnitPrice: "",
    statUplift: "",
    totalUplit: "",
  },
  {
    id: 2,
    name: "",
    portNo: "",
    longTest: "",
    manufacturer: "",
    quantity: "",
    weight: "",
    // CIF
    price: "",
    freightPortion: "",
    freightPercent: "",
    unitFreightPrice: "",
    // CIF
    unitPrice: "",
    // Duties start
    dutyHSCode: "",
    dutyRate: "",
    totalDuty: "",
    localClearing: "",
    markupPercent: "",
    markup: "",
    // Duties end
    duties: "",
    // Total units start
    NCD: "",
    WHT: "",
    cost: "",
    // Total units end
    totalUnitPrice: "",
    statUplift: "",
    totalUplit: "",
  },
  {
    id: 3,
    name: "",
    portNo: "",
    longTest: "",
    manufacturer: "",
    quantity: "",
    weight: "",
    // CIF
    price: "",
    freightPortion: "",
    freightPercent: "",
    unitFreightPrice: "",
    // CIF
    unitPrice: "",
    // Duties start
    dutyHSCode: "",
    dutyRate: "",
    totalDuty: "",
    localClearing: "",
    markupPercent: "",
    markup: "",
    // Duties end
    duties: "",
    // Total units start
    NCD: "",
    WHT: "",
    cost: "",
    // Total units end
    totalUnitPrice: "",
    statUplift: "",
    totalUplit: "",
  },
  {
    id: 4,
    name: "",
    portNo: "",
    longTest: "",
    manufacturer: "",
    quantity: "",
    weight: "",
    // CIF
    price: "",
    freightPortion: "",
    freightPercent: "",
    unitFreightPrice: "",
    // CIF
    unitPrice: "",
    // Duties start
    dutyHSCode: "",
    dutyRate: "",
    totalDuty: "",
    localClearing: "",
    markupPercent: "",
    markup: "",
    // Duties end
    duties: "",
    // Total units start
    NCD: "",
    WHT: "",
    cost: "",
    // Total units end
    totalUnitPrice: "",
    statUplift: "",
    totalUplit: "",
  },
];
