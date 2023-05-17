import { Component, Inject, ViewChild } from '@angular/core';
import {
  IVehicleProvider,
  VehicleSummary,
  VEHICLE_PROVIDER,
  VehicleType,
  VehicleSize,
} from 'src/interfaces/ivehicle.provider';
import { FerryComponent } from '../ferry/ferry.component';
import { CarTicketCost } from 'src/const';

@Component({
  selector: 'ferry-terminal',
  templateUrl: './ferry.terminal.component.html',
  styleUrls: ['./ferry.terminal.component.css'],
})
export class FerryTerminalComponent {
  currentVehicle: VehicleSummary;

  @ViewChild('largeFerry')
  largeFerry: FerryComponent;

  @ViewChild('smallFerry')
  smallFerry: FerryComponent;

  terminalEarning: number = 0;

  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider
  ) {
    this.currentVehicle = {
      type: VehicleType.bus,
      category: VehicleSize.large,
    };
  }

  get VehicleSize() {
    return VehicleSize;
  }

  public getVehicle() {
    this.currentVehicle = this.vehicleProvider.GetVehicle();
    let added = false;
    if (this.currentVehicle.category == VehicleSize.large) {
      added = this.largeFerry.addVehicle(this.currentVehicle);
    } else if (this.currentVehicle.category == VehicleSize.small) {
      added = this.smallFerry.addVehicle(this.currentVehicle);
    }
    if (added) this.terminalEarning += CarTicketCost[this.currentVehicle.type];
    console.log(this.currentVehicle);
  }
}
