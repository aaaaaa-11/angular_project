import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DomComponent implements OnInit {

  public dflag:boolean = true

  constructor() { }

  @ViewChild('mybox') myBox:any

  @ViewChild('header') header:any

  ngOnInit(): void {
    // 组件和指令初始化完成，并不是真正的dom加载完成
    let oBox:any = document.getElementById('box')
    
    console.log(oBox.innerHTML);
    oBox.style.color = "red"

    // let oBox1:any = document.getElementById('box1')
    // 获取不到DOM节点
    // console.log(oBox1.innerHTML); // cannnot read property 'innerHTML' of null
    // oBox1.style.color = "red"
  }

  // 视图加载完成后触发的方法
  ngAfterViewInit(): void {
    let oBox1:any = document.getElementById('box1')
    console.log(oBox1.innerHTML);
    oBox1.style.color = "red"

    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.backgroundColor = '#453'

    // 调用子组件里面的方法
    // this.header.run()
  }

  getChildMethods () {
    this.header.run()
  }

}
