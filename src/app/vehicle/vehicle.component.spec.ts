import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleComponent } from './vehicle.component';
import { VehicleSize, VehicleType } from 'src/interfaces/ivehicle.provider';
import { CarTicketCost } from 'src/const';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
  });

  it('should add the appropriate CSS classes based on category and emptiness', () => {
    const category = VehicleSize.small;
    component.category = category;
    component.type = VehicleType.car;
    fixture.detectChanges();

    const vehicleElement: HTMLElement =
      fixture.nativeElement.querySelector('.vehicle');
    expect(vehicleElement.classList).toContain('small');
    expect(vehicleElement.classList).not.toContain('large');
    expect(vehicleElement.classList).not.toContain('empty');
  });

  it('should display the car ticket cost when the vehicle type is not empty', () => {
    const type = VehicleType.car;
    component.type = type;
    fixture.detectChanges();

    const carTicketCostElement: HTMLElement = fixture.nativeElement;
    expect(carTicketCostElement.textContent).toContain(CarTicketCost[type]);
  });

  it('should not display the car ticket cost when the vehicle type is empty', () => {
    component.type = null;
    fixture.detectChanges();

    const carTicketCostElement: HTMLElement = fixture.nativeElement;
    expect(carTicketCostElement.textContent).toBe('');
  });
});
