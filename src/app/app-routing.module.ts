// 配置路由的模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { IndexComponent } from './components/index/index.component';
import { ProductComponent } from './components/product/product.component'
import { NewsComponent } from './components/news/news.component'
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WelcomeComponent } from './components/homepage/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'newscontent/:aid',
    component: NewscontentComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'productcontent/:pid',
    component: ProductcontentComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    children: [
    ]
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
