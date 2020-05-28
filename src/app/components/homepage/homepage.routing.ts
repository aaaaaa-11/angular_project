import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage.component'
import { WelcomeComponent } from './welcome/welcome.component'

const HomepageRoutes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(HomepageRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomepageRoutingModule {}
