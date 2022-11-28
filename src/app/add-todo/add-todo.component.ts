import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  userid=""
  id=""
  title=""
  status=""

  readValues=()=>
  {
    let data:any=
    {
      "userid":this.userid,
      "id":this.id,
      "title":this.title,
      "status":this.status
    }
    console.log(data)
  }

}
