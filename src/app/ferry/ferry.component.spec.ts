import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FerryComponent } from './ferry.component';
import {
  VehicleSize,
  VehicleSummary,
  VehicleType,
} from 'src/interfaces/ivehicle.provider';

describe('FerryComponent', () => {
  let component: FerryComponent;
  let fixture: ComponentFixture<FerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FerryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate capacity correctly based on size input', () => {
    component.size = VehicleSize.large;
    expect(component.capacity).toBe(6);

    component.size = VehicleSize.small;
    expect(component.capacity).toBe(8);
  });

  it('should generate the correct number of empty fields', () => {
    component.size = VehicleSize.large;
    component.vehicles = [
      { category: VehicleSize.large, type: VehicleType.bus },
      { category: VehicleSize.small, type: VehicleType.car },
    ];

    expect(component.emptyFields.length).toBe(6 - component.vehicles.length);

    component.size = VehicleSize.small;
    expect(component.emptyFields.length).toBe(8 - component.vehicles.length);
  });

  it('should add a vehicle and return true when the ferry is not full', () => {
    const vehicle: VehicleSummary = {
      category: VehicleSize.large,
      type: VehicleType.bus,
    };
    const result = component.addVehicle(vehicle);

    expect(result).toBe(true);
    expect(component.vehicles).toContain(vehicle);
  });

  it('should not add a vehicle and return false when the ferry is full', () => {
    const vehicle: VehicleSummary = {
      category: VehicleSize.large,
      type: VehicleType.bus,
    };

    // Fill the ferry with vehicles
    component.vehicles = Array(component.capacity).fill({
      category: VehicleSize.large,
      type: VehicleType.truck,
    });

    const result = component.addVehicle(vehicle);

    expect(result).toBe(false);
    expect(component.vehicles).not.toContain(vehicle);
    expect(component.error).toBe(
      "The ferry is full. You can't add more vehicles."
    );
  });
});
