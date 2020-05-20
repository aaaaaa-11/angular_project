import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goProductContent () {
    // 路由跳转  普通路由和动态路由
    this.router.navigate(['/productcontent', '123'])
  }
  goNews () {
    // 路由跳转  普通路由和动态路由
    this.router.navigate(['/news'])
  }
  goIndex () {
    // 路由跳转  普通路由和动态路由
    this.router.navigate(['/index'])
  }

  goNewsWithGetParams () {
    let queryParams:NavigationExtras = {
      queryParams: {
        'aid': 123
      }
    }
    // 跳转并进行get传值
    this.router.navigate(['/news'], queryParams)
  }

}
