import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title:any

  @Input() methodsOfParent:any

  @Input() msg:string

  @Input() parent:any

  constructor() { }

  ngOnInit(): void {
  }

  run () {
    // console.log('header methods in header component in dom component')
  }

  callParentMethods () {
    this.methodsOfParent()
  }

}
