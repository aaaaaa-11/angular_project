import { Component, OnInit } from '@angular/core';

// 当作一个服务
import { HttpClient, HttpHeaders } from '@angular/common/http'

// 使用服务里面的axios数据
import { HttpserviceService } from '../../services/httpservice.service'

@Component({
  selector: 'app-axios',
  templateUrl: './axios.component.html',
  styleUrls: ['./axios.component.scss']
})
export class AxiosComponent implements OnInit {

  public list:any[] = []
  public getFlag:boolean = false

  constructor(public http:HttpClient, public httpService: HttpserviceService) { }

  ngOnInit(): void {
  }

  getData () {
    if (this.getFlag) return
    this.getFlag = true
    let api = "http://a.itying.com/api/productlist"
    this.http.get(api).subscribe((res:any) => {
      this.list = res.result
    })
  }

  goLogin() {
    // 手动设置请求的类型
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})}
    // 存在跨域
    let api = 'https://www.apiopen.top/login'
    this.http.post(api, {'key': '00d91e8e0cca2b76f515926a36db68f5', 'phone': '13594347817', 'passwd': '123456'}, httpOptions)
    .subscribe((res) => {
      console.log(res);
    })
  }

  getJsonpData () {
    // jsonp请求，要求服务器必须支持jsonp
    let api = "http://a.itying.com/api/productlist"
    this.http.jsonp(api, 'callback').subscribe(res => { // 第二个参数是api传递的参数，必须写
      console.log(res);
    })
  }

  getAxiosData () {
    let api = "http://a.itying.com/api/productlist"
    this.httpService.axiosGet(api).then(data => {
      console.log(data);
    })
  }

}
