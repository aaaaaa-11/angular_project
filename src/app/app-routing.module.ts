// 配置路由的模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
