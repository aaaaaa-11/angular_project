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
import { RequestService } from './services/request.service';
import { HttpserviceService } from './services/httpservice.service';


// 根组件
import { AppComponent } from './app.component';

import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { TodoComponent } from './components/todo/todo.component';
import { SearchComponent } from './components/search/search.component';

import { DomComponent } from './components/dom/dom.component';
import { TransitionComponent } from './components/transition/transition.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParentComponent } from './components/parent/parent.component';
import { LifecircleComponent } from './components/lifecircle/lifecircle.component';
import { RequestComponent } from './components/request/request.component';
import { AxiosComponent } from './components/axios/axios.component';
import { ProductComponent } from './components/product/product.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WelcomeComponent } from './components/homepage/welcome/welcome.component';
import { SettingComponent } from './components/homepage/setting/setting.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { PcateComponent } from './components/productpage/pcate/pcate.component';
import { PlistComponent } from './components/productpage/plist/plist.component';

// @NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  declarations: [ /* 配置当前项目运行的组件 */
    AppComponent, NewsComponent, HomeComponent, HeaderComponent, FormComponent, TodoComponent, SearchComponent, DomComponent, TransitionComponent, FooterComponent, ParentComponent, LifecircleComponent, RequestComponent, AxiosComponent, ProductComponent, HomepageComponent, WelcomeComponent, SettingComponent, ProductpageComponent, PcateComponent, PlistComponent
  ],
  imports: [ /* 配置当前模块运行依赖的其他模块 */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [RequestService, HttpserviceService], /* 配置项目所需的服务 */
  bootstrap: [AppComponent] /* 指定应用的主视图 */
})
// 根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
