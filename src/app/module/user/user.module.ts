import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 引入组件
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';

// 引入服务
import { CommonService } from './services/common.service'

@NgModule({
  /* user模块里的组件 */
  declarations: [ProfileComponent, AddressComponent, OrderComponent, UserComponent],
  providers: [CommonService],
  exports: [UserComponent], // 暴露组件，供其他模块使用
  imports: [
    CommonModule
  ]
})
export class UserModule { }
