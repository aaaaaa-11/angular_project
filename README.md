npm install -g @angular/cli  # 全局安装angular脚手架

## ng new 项目名  # 创建angular项目并自动npm install
ng new 项目名 --skip-install  # 创建angular项目跳过安装npm install

ng new 项目 之后，会自动npm install，可以Ctr+C，然后cd 项目名，再使用cnpm i
如果失败，就使用npm install

## ng serve --open  # 运行项目

目录结构：
e2e——在e2e/下是端到端（End-to-End）测试
node_modules——安装的第三方模块
src——项目所有文件
  /app——组件，以及app.modules.ts定义根模块
  /assets——静态资源
  /environments——为各个目标环境准备的文件
  /index.html——主页面
  /main.js——应用的主入口
  /polyfills.ts——填充库
  /styles.scss——全局样式
  

angular6 中使用socket.io报global is not defined
polyfills.ts中配置：(window as any).global = window

~/app.modules.ts：项目根模块
配置了该模块运行所需的组件、模块、服务

ng g component 目录/组件文件名  # 命令方式创建组件
创建完成，会自动在目录下生成组件相关的html、css、ts等文件，并自动在根模块文件app.modules.ts文件中配置好该组件

数据定义：
属性修饰符 属性名:类型=值
例如：public name:string="张三"
简写：name="张三"（默认属性为public，类型为any）

属性修饰符：
public    共有（默认）  在当前类或其他类中都可以访问
protected 保护          在当前类及其子类中可以访问
private   私有          只在当前类中可以访问

在.ts文件中
export class 组件名 implements OnInit {
  // 声明属性：
  属性修饰符 属性名:类型 = 值
  属性修饰符 属性名:类型

  constructor () {
    // 获取属性
    this.属性名
  }
}

模板里面绑定数据：
<div>{{数据名}}</div>

模板里面绑定属性：
[html属性名]="数据名"

模板中绑定html
[innerhtml]="数据名" // 将数据解析为html，作为div的内容

模板中允许简单的运算：
{{1 + 1}}

数据循环：
*ngFor = "let item of ArrList; let key = index;" // 绑定key值

条件判断：
*ngIf = "true"
*ngIf = "!true"

ngSwitch
[ngSwitch]="值"
*ngSwitchCase="选项1"
*ngSwitchCase="选项2"
*ngSwitchCase="选项3"
……

管道：

事件
(事件名)="方法名()"
(click)="run()"

(click)="methods1($event)"

methods1 (e) {
  e.target // DOM
}

双向数据绑定：
只针对表单
先引入FormsModule


angular当前版本不支持在同一个标签中同时使用*ngIf和*ngFor两个指令
解决：
1.把指令分散到两个标签中
2.在同一个标签中使用*ngfor和[hidden]="条件"


Angular服务
ng g s 目录/服务名  # 创建服务
在app.modules.ts中引入并声明
使用时，在组件中引入并初始化：
import { 服务名 } from '服务path'
1.不推荐
let 变量 = new 服务名()
// 使用变量
2.constructor (public 变量:服务名) {
  // 使用变量
}
Angular中所有组件都可以引入并调用服务
服务之间也可以相互调用


dom操作
1. 原生js
获取DOM节点，可以在ngOnInit里获取，
但是如果DOM元素由angular指令控制显示，则在ngOnInit可能获取不到
可以在ngAfterViewInit中获取
2. ViewChild


Angular父子组件通讯
父组件 -> 子组件：
值：<子组件  [子组件属性]="父组件属性" />
方法：<子组件  [子组件属性]="父组件方法" />
子组件可以接收父组件：<子组件  [子组件属性]="this" />  # 注意不要循环调用

子 -> 父：
<子组件 #xxx />  // xxx为自定义名称，用来代表子组件
@ViewChildu('xxx') yyy:any  // 父组件中通过ViewChild获取子组件，赋值给自定义变量yyy
// 父组件中可以使用子组件方法和值：this.yyy.方法 或 this.yyy.属性

@output
子组件：@output() private xxx = new EventEimtter()
this.xxx.emit(需要传给父组件的数据)
父组件：
<子组件 (xxx)="父组件方法($event)" />
父组件方法(e) {
  // e就是子组件传给父组件的数据
}

Angular中的生命周期
0. constructor()
不是组件生命周期函数
除了使用简单的值对局部变量进行初始化之外，什么都不应该做

1. ngOnChanges()
主要用于父子组件传值时，数据改变会触发
如果父子组件传值时，数据并没有改变，不会触发

2. ngOnInit()
一般可以请求数据

3. ngDoCheck()
在ngOnInit之后触发，如果数据改变或未改变所做的操作

4. ngAfterContentInit()
组件渲染完成后触发

5. ngAfterContentChecked()
组件初始化之后的自定义操作

6. ngAfterViewOnInit()
初始化完组件视图及子组件视图，可做DOM操作

7. ngAfterViewChecked()
初始化完视图后自定义操作

7. ngOnDestory()
组件销毁时的操作
卸载组件时会触发


Rxjs
ReactiveX JavaScript
ReactiveX是针对异步数据流的编程
能以同步编程的方式异步处理数据

目前常见的异步编程方法：
1. 回调函数
2. 事件监听/发布订阅
3. Promise
4. Rxjs

Rxjs中最常用的模块Observable和fromEvent
import { Observable } form 'rxjs' // 引入Observable
f () {
  return new Observable((observer) => {
  observer.next(data)
  observer.error(data)
})
}

let data = f()
data.subscribe(data => { // 处理data数据 })

Rxjs和Promise用法基本类似，但是Rxjs功能更强大，可以中途撤回、可以发射多个值、提供了多种工具函数等


Rxjs unsubscribe取消订阅

let rxjs = data.subscribe(data => { // 处理data数据 })
rxjs.unsubscribe() // 取消订阅


Rxjs订阅后多次执行
f () {
  return new Observable((observer) => {
    setInterval(() => { // 可以多次执行
      observer.next(data)
    })
  })
}

Angular6.x之前使用Rxjs的工具函数map、filter
Angular6.x之后使用以前的rxjs方法，必须安装rxjs-compat模块
data.pipe(
  // pipe中可使用多个方法，下面的方法中的数据是上面方法处理后的数据
  filter(data => {
    if (条件) { // 根据条件筛选数据
      return true
    }
  }),
  map(data => {
    return xxx // 返回经过处理的数据
  })
)
.subscribe(data => {
  // data是经过上面处理后的数据
})

Angular数据交互
Angular5.x之后和服务器交互使用的是HttpClientModule模块

app.module.ts中引入
import { HttpClientModule } from '@angular/common/http'
在modules中配置

在需要使用的组件中引入
import { HttpClient, HttpHeaders } from '@angular/common/http' // HttpHeaders是post方法中需要用到的
public http:HttpClient // 在constructor中定义一个变量
f () {
  this.http.get(api).subscribe(res => {
    // 处理res
  })
const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})} // 手动设置请求的类型
  this.http.post(api, {数据}, httpOptions).subscribe(res => {
    // 处理res
  })
}

使用第三方模块中的axios
npm i axios --save
创建一个服务，在服务中引入axios模块并使用：
import axios from 'axios'
axiosGetMethods () {
  return new Promise((resolve,reject) => { // 通过Promise返回axios结果
    axios.get(api)
      .then(res => {
        // 处理res
        resolve(res) // 返回请求成功的结果
      })
      .catch()
      .then()
  })
}

在app.module.ts中引入该服务
import 服务名 from 'axios服务路径'
在providers中配置

在需要使用axios第三方模块的组件中导入并使用：
import 服务名 from 'axios服务路径'

constructor (public 变量名:服务名) {}

f () {
  this.变量名.axiosGetMethods(api)
  .then(res => {
    // 处理res
  })
}


Angular中的路由
路由就是根据不同的url地址，动态地让根组件挂在不同的组件，来实现一个单页面应用
用ng new 项目名 创建项目时，会提醒是否创建路由，选择Y
路由文件：~/src/app/app-routing.mudules.ts
在路由文件中导入组件，并配置路由：
import 组件名 from '组件路径'

const routes:Routes = [
  {
    path: '/path',
    compnent: 组件名
  },
  {
    path: '**' // 匹配不到的路由
    component: 组件名
  }
]

在根组件app.component.html中，有一个router-outlet标签，根据路由动态展示组件

路由跳转：
<a routerLink="/path" routerLinkActice="active">点击</a> // active是选中的样式名，可自定义

路由传参：
get:
<a routerLink="/path" [queryParams]="{key: val}">点击跳转</a>
接收路由参数：
import { ActivatedRoute } form '@angular/route'
constructor (public route:ActivatedRoute) {}

get:
this.route.queryParams.subscribe((data) => {
  // 处理data
})

动态路由：
<a [routerLink]="path, routeParams">跳转</a>
配置动态路由： { path: '/path/:param', component: TestComponent }

接收：
this.router.params.subscribe(data => {
  // 处理data
})

js跳转路由


<button (click)="goPage()">跳转</button>

在路由跳转的组件中引入Router：
import { Router } from '@angular/router'

constructor (public router:Router)

goPage () {
  this.router.navigate(['/path', params])
}


get传值路由跳转
引入NavigationExtras模块：
import { Router, NavigationExtras } from '@angular/router'; // 不引入NavigateExtras仍然可以跳转

goPage() {
  let queryParams:NavigationExtras = {
    queryParams: {
      'id': 1
    }
  }
  this.router.navigate(['/path'], queryParams)
}


子路由：
<a [routerLink]="[/path, params]"></a>
<router-outlet></router-outlet>

注意：路由组件需要在app.modules.ts中引入并在declerations中配置


自定义模块
Angular内置模块