/* 此文件是Angular根模块 */

// BrowserModule，浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// Angular核心模块
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// 引入表单相关的模块才可以使用双向数据绑定
import { FormsModule } from '@angular/forms';
// 引入httpClientModule
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'
// 引入并配置服务
import { CommonService } from './services/common.service'
// 根组件
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';


// @NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  declarations: [ /* 配置当前项目运行的组件 */
    AppComponent, HomeComponent, PcontentComponent
  ],
  imports: [ /* 配置当前模块运行依赖的其他模块 */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    CommonService
  ], /* 配置项目所需的服务 */
  bootstrap: [AppComponent] /* 指定应用的主视图 */
})
// 根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
