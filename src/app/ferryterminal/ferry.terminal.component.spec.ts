import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FerryTerminalComponent } from './ferry.terminal.component';
import {
  IVehicleProvider,
  VEHICLE_PROVIDER,
  VehicleSummary,
  VehicleSize,
  VehicleType,
} from 'src/interfaces/ivehicle.provider';
import { Component, Input } from '@angular/core';
import { CarTicketCost } from 'src/const';
import { FerryComponent } from '../ferry/ferry.component';

@Component({
  selector: 'ferry',
  template: '<div class="mock-ferry"></div>',
})
class MockFerryComponent extends FerryComponent {
  @Input() size: VehicleSize;

  vehicles: VehicleSummary[] = [];

  addVehicle(vehicle: VehicleSummary): boolean {
    this.vehicles.push(vehicle);
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    return true;
  }
}

class MockVehicleProvider implements IVehicleProvider {
  GetVehicle(): VehicleSummary {
    return {
      type: VehicleType.bus,
      category: VehicleSize.large,
    };
  }
}

describe('FerryTerminalComponent', () => {
  let component: FerryTerminalComponent;
  let fixture: ComponentFixture<FerryTerminalComponent>;
  let mockVehicleProvider: MockVehicleProvider;
  let largeFerryComponent: MockFerryComponent;
  let smallFerryComponent: MockFerryComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FerryTerminalComponent, MockFerryComponent],
      providers: [{ provide: VEHICLE_PROVIDER, useClass: MockVehicleProvider }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerryTerminalComponent);
    component = fixture.componentInstance;
    mockVehicleProvider = TestBed.inject<IVehicleProvider>(VEHICLE_PROVIDER);
    largeFerryComponent =
      TestBed.createComponent(MockFerryComponent).componentInstance;
    smallFerryComponent =
      TestBed.createComponent(MockFerryComponent).componentInstance;

    spyOn(largeFerryComponent, 'addVehicle').and.returnValue(true);
    spyOn(smallFerryComponent, 'addVehicle').and.returnValue(true);

    fixture.detectChanges();
  });

  it('should add the current vehicle to the large ferry and update the terminal earning', () => {
    component.largeFerry = largeFerryComponent;
    component.smallFerry = smallFerryComponent;

    component.getVehicle();

    expect(largeFerryComponent.addVehicle).toHaveBeenCalledWith({
      type: VehicleType.bus,
      category: VehicleSize.large,
    });
    expect(component.terminalEarning).toBe(CarTicketCost[VehicleType.bus]);
  });
});
