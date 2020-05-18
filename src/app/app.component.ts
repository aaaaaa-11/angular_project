// 引入核心模块中的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 使用这个组件的名称
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.scss'] // css
})
export class AppComponent {
  public title:string = 'ngdemo02'; // 定义属性
  
  public flag:boolean = true

  changeTitle () {
    this.title = 'new title'
  }

  changeFlag () {
    this.flag = !this.flag
  }
}
