import { Injectable } from '@angular/core';
import {
  IVehicleProvider,
  VehicleSize,
  VehicleSummary,
  VehicleType,
} from '../interfaces/ivehicle.provider';

@Injectable()
export class HardcodedVehicleService implements IVehicleProvider {
  GetVehicle(): VehicleSummary {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    switch (randomNumber) {
      case 1: {
        return {
          type: VehicleType.car,
          category: VehicleSize.small,
        };
      }
      case 2: {
        return {
          type: VehicleType.van,
          category: VehicleSize.small,
        };
      }
      case 3: {
        return {
          type: VehicleType.truck,
          category: VehicleSize.large,
        };
      }
      default: {
        return {
          type: VehicleType.bus,
          category: VehicleSize.large,
        };
      }
    }
  }
}
