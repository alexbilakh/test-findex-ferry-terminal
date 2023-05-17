import { Component, Input } from '@angular/core';
import { VehicleSummary, VehicleSize } from 'src/interfaces/ivehicle.provider';

@Component({
  selector: 'ferry',
  templateUrl: './ferry.component.html',
  styleUrls: ['./ferry.component.scss'],
})
export class FerryComponent {
  @Input()
  size: VehicleSize;

  vehicles: VehicleSummary[] = [];

  error?: string;

  get capacity() {
    if (this.size == VehicleSize.large) return 6;
    return 8;
  }
  get emptyFields() {
    return Array(this.capacity - this.vehicles.length).fill(0);
  }
  constructor() {}

  public addVehicle(vehicle: VehicleSummary) {
    if (this.vehicles.length >= this.capacity) {
      this.error = `The ferry is full. You can't add more vehicles.`;
      return false;
    }
    this.vehicles.push(vehicle);
    return true;
  }
}
