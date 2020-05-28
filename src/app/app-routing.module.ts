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
  import { SettingComponent } from './components/homepage/setting/setting.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
  import { PcateComponent } from './components/productpage/pcate/pcate.component';
  import { PlistComponent } from './components/productpage/plist/plist.component';

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
    path: 'homepage',
    component: HomepageComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: '**',
        component: WelcomeComponent
      }
    ]
  },
  {
    path: 'productpage',
    component: ProductpageComponent,
    children: [
      {
        path: 'pcate',
        component: PcateComponent
      },
      {
        path: 'plist',
        component: PlistComponent
      },
      {
        path: '**',
        component: PcateComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
