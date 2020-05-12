import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  /* 
    声明属性的几种方式：

      public    共有（默认）  可以在这个类里面使用，也可以在类外面使用

      protected 保护类型      只在当前类和它的子类里面可以访问

      private   私有          只在当前类才可以访问
  */

  title = "新闻组件"
  public subtitle = "时事"

  author:string = "张三"

  // 推荐
  public newsItem:any = {
    author: this.author,
    type: this.subtitle,
    content: '据***最新消息，五一假期已经过去了。'
  }

  // public userInfo:object = {

  //   username: "张三",
  //   age: "20"
  // }

  public msg:string = "message"

  public value:any

  public htmlContent:string = "<i><b>一个html字符串</b></i>"

  // 定义数组
  public arr = [1, 2, 3]
  public arr2:any[] = ['111', '222', '333']  // 推荐
  public arr3:Array<any> = ['a', {b:1}, true]
  public users:any[] = [{
    name: '张三',
    age: 23
  }, {
    name: '李四',
    age: 43
  }]
  
  public arr4:any[] = [{
    id: 1,
    list: [{
      title: '食品1',
      price: 34534
    }, {
      title: '食品2',
      price: 43432
    }]
  }, {
    id: 2,
    list: [{
      title: '服装1',
      price: 4534
    }, {
      title: '服装2',
      price: 6756
    }]
  }, {
    id: 3,
    list: [{
      title: '电子产品1',
      price: 342313
    }, {
      title: '电子产品2',
      price: 434312
    }]
  }]


  constructor() {
    // console.log('title = ', this.title);  // 获取属性
    this.value = "给属性赋值"  // 赋值
    this.msg = "哈哈"
  }

  ngOnInit(): void {
  }

}
