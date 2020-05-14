import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public doing:string = ''

  public todoList:any[] = []

  public doneList:any[] = []

  constructor(public storage:StorageService) {}

  ngOnInit(): void {
    this.todoList = this.storage.get('todoList') || []
    this.doneList = this.storage.get('doneList') || []
  }

  addToDo (e) {
    if (e.keyCode === 13 && this.doing.trim()) {
      if (this.checkDoing(this.todoList, this.doing.trim())) return
      this.todoList.push({
        do: this.doing.trim(),
        done: false
      })
      this.storage.set('todoList', this.todoList)
    }
  }

  checkDoing (todoList:any, keywd:any) {
    return todoList.some(item => {
      if (item.do === keywd) {
        return true
      }
    })
  }

  addDone (item, key) {
    this.todoList.splice(key, 1)
    this.doneList.push({do: item.do, done: true})
    this.storage.set('todoList', this.todoList)
    this.storage.set('doneList', this.doneList)
  }

  addToDoFromDone (item, key) {
    this.todoList.push({do: item.do, done: false})
    this.doneList.splice(key, 1)
    this.storage.set('todoList', this.todoList)
    this.storage.set('doneList', this.doneList)
  }

  delDone (key) {
    this.doneList.splice(key, 1)
    this.storage.set('doneList', this.doneList)
  }

}
