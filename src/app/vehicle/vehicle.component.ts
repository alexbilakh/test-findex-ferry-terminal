import { Component, Input } from '@angular/core';
import { CarTicketCost } from 'src/const';
import { VehicleType, VehicleSize } from 'src/interfaces/ivehicle.provider';

@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent {
  @Input()
  type?: VehicleType;

  @Input('category')
  category: VehicleSize;

  get isEmpty() {
    return this.type == null || this.type == undefined;
  }
  get VehicleName() {
    switch (this.type) {
      case VehicleType.car:
        return 'Car';
      case VehicleType.van:
        return 'Var';
      case VehicleType.truck:
        return 'Truck';
      case VehicleType.bus:
        return 'Bus';
      default:
        return 'Unknown';
    }
  }
  get VehicleSize() {
    return VehicleSize;
  }
  get CarTicketCost() {
    return CarTicketCost;
  }
  constructor() {}
}
