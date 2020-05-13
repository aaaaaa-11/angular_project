import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todoList:any[] = []

  public doneList:any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addToDo (e) {
    if (e.keyCode === 13 && e.target.value.trim()) {
      this.todoList.push({
        do: e.target.value,
        done: false
      })
    }
  }

  addDone (item, key) {
    this.todoList.splice(key, 1)
    this.doneList.push({do: item.do, done: true})
  }

  addToDoFromDone (item, key) {
    this.todoList.push({do: item.do, done: false})
    this.doneList.splice(key, 1)
  }

  delDone (key) {
    this.doneList.splice(key, 1)
  }

}
