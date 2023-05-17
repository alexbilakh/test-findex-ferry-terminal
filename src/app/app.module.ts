import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FerryTerminalComponent } from './ferryterminal/ferry.terminal.component';
import { AppComponent } from './app.component';
import { HardcodedVehicleService } from '../services/hardcoded.vehicle.service';
import { VEHICLE_PROVIDER } from 'src/interfaces/ivehicle.provider';
import { FerryComponent } from './ferry/ferry.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    FerryTerminalComponent,
    FerryComponent,
    VehicleComponent,
  ],
  imports: [BrowserModule],
  providers: [{ provide: VEHICLE_PROVIDER, useClass: HardcodedVehicleService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
