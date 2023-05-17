import { VehicleType } from "./interfaces/ivehicle.provider";

const CarCost = {};
CarCost[VehicleType.car] = 5;
CarCost[VehicleType.van] = 7.5;
CarCost[VehicleType.truck] = 10;
CarCost[VehicleType.bus] = 15;

export const CarTicketCost = CarCost;
