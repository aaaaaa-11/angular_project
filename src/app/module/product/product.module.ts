import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { PlistComponent } from './components/plist/plist.component';
import { CarComponent } from './components/car/car.component';
import { PinfoComponent } from './components/pinfo/pinfo.component';



@NgModule({
  declarations: [ProductComponent, PlistComponent, CarComponent, PinfoComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
