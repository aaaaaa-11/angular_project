import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public showC:string = "news"

  public title:string = '头部组件'

  public msg:string = "msg from parent"

  @ViewChild('pfooter') pfooter:any

  constructor() { }

  ngOnInit(): void {
  }

  methodsOfParent () {
    alert('父组件中的方法')
  }
  
  getDataFromChild () {
    alert(this.pfooter.msg)
  }

  callChildMethods () {
    this.pfooter.childMethods()
  }

  run (e) {
    // e --- 子组件
    console.log(e);
  }

}
