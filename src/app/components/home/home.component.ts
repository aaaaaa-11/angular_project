import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public domain:string = ''

  public pLists:any[] = [
    {
      id: 1,
      title: '皮蛋瘦肉粥',
      lists: [
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
      ]
    },
    {
      id: 2,
      title: '皮蛋瘦肉粥',
      lists: [
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
      ]
    },
    {
      id: 3,
      title: '皮蛋瘦肉粥',
      lists: [
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
        {
          name: '肉',
          price: 50,
          url: '../../../assets/images/02.png'
        },
      ]
    },
  ]

  constructor(public common: CommonService) { 
    this.domain = this.common.domain
  }

  ngOnInit(): void {
    let api = 'api/productlist'
    this.common.get(api)
      .then((res:any) => {
        this.pLists = res.result
      })
  }

}
