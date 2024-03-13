import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  list:any[] = []
  addData(item:string){
    this.list.push({id:this.list.length,name:item})
  }

  removeData(id:number){
    this.list = this.list.filter(item=>item.id!==id)
  }
}
