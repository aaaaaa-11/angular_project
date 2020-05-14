import { Component, OnInit } from '@angular/core';

// 引入服务
import { StorageService } from 'src/app/services/storage.service';
/* 
不推荐
let storage = new StorageService()
console.log(storage);
*/

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public sinput:string = ''

  public historyLists:any[] = []

  constructor(public storage:StorageService) {
  }

  ngOnInit(): void {
    // console.log('页面刷新会触发这个声明周期函数');
    this.historyLists = this.storage.get('historyLists') || []
  }

  search () {
    if (this.sinput.trim()) {
      alert('go Search')
      if (this.historyLists.indexOf(this.sinput.trim()) !== -1) {
        return
      }
      this.historyLists.unshift(this.sinput.trim())
      this.storage.set('historyLists', this.historyLists)
    }
  }

  addHistory (e) {
    // DOM操作
    /* 
    <input type="text" id="iptVal" />
    let iptVal = document.getElementsByClassName('search-input')[0]
    console.log(iptVal.value) 会报错： Property 'value' does not exist on type 'Element'
    必须要指定iptVal的类型：
    let iptVal:any = document.getElementById('iptVal')
    console.log(iptVal.value)
     */
    if (e.keyCode === 13 && this.sinput.trim()) {
      this.search()
    }
  }

  clearHistory () {
    if (this.historyLists.length) {
      this.historyLists = []
      this.storage.remove('historyLists')
    }
  }

  clearHItem (i) {
    this.historyLists.splice(i,1)
    this.storage.set('historyLists', this.historyLists)
  }

}
