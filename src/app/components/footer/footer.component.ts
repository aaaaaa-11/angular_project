import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public msg:string = '子组件footer的msg'

  @Output() private outer = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  childMethods () {
    alert('子组件footer的方法')
  }

  sendDataToParent () {
    // alert('data from child')
    this.outer.emit('footer组件通过output广播给父组件的数据')
  }

}
