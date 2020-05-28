import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.scss']
})
export class PcontentComponent implements OnInit {

  public domain:string = ''

  public food:any = []

  constructor(public route:ActivatedRoute, public common:CommonService) {
    this.domain = this.common.domain
  }

  ngOnInit(): void {
    this.route.params.subscribe((val:any) => {
      // console.log(val.id);
      this.requestContent(val.id)
    })
  }

  requestContent(id) {
    let api = 'api/productcontent?id=' + id

    this.common.get(api)
      .then((res:any) => {
        // console.log(res);
        this.food = res.result[0]
      })
  }

}
