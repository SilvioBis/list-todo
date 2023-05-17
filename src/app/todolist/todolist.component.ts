import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  taskArry = [{
    taskName: 'Adicionar tarefas',
    inCompletd: false
  }];
  taskArray: any;

  onSubmit(form: NgForm){
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });  
    form.reset(); 
  }

  onDelete(index: number){
    this.taskArry.splice(index,1);
  }

  onCheck(index: number){
    this.taskArry[index].inCompletd = !this.taskArry[index]
  }

}
