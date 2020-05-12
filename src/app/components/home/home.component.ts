import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public picUrl = "https://www.baidu.com/img/baidu_jgylogo3.gif"

  public list:any[] = [{
    title: "first"
  }, {
    title: "second"
  }, {
    title: "third"
  }]

  public flag:boolean = true

  public orderStatus:number = 5 /* 1——已经支付  2——支付且确认   3——已经发货   4——已经收货   5——无效 */

  public myDate:any = new Date()

  public goods:any = '商品'

  public keywords:string = '默认值'

  constructor() { }

  ngOnInit(): void {
  }

  run () {
    alert('执行方法')
  }

  changeGoods () {
    this.goods = '新值'
  }

  keyDown (e) {
    if (e.keyCode === 13) {
      console.log('哈哈');
    }
  }

  keyUp (e) {
    console.log(e.keyCode === 13);
  }

  changeColor (e) {
    // ionic必须这样写
    let dom:any = e.target
    dom.style.color = 'red'
  }

  changeKW () {
    this.keywords = '新值'
  }

}
