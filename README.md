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