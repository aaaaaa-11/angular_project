import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component'
import { PlistComponent } from './components/plist/plist.component';
import { CartComponent } from './components/cart/cart.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';
const routes: Routes = [
  {
    path: 'plist',
    component: PlistComponent
  },
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'pcontent',
        component: PcontentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
