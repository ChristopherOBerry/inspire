export default class Todo {
    constructor(data) {
      
      this._id = data._id
      this.completed = data.completed
      this.user = data.user
      this.description = data.description  
      
    }
    
    get Template(){
      // return `
      // <div class="col-4">
      //       <h4>Task ID: ${this._id}</h4>
      //       <h4>User: ${this.user}</h4>
      //       <h4>Status: ${this.completed}</h4>
      //       <p>Description: ${this.description}</p>
      //     </div>
      // `
      if (this.completed == true) {
        return `<div class="col-12 pb-1">
        <h3>${this.description}&#10004</h3>
    <button class="btn btn-primary" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Not Complete</button>
    <button class="btn btn-primary" onclick="app.controllers.todoController.removeTodo('${this._id}')">Remove</button>
    </div>`
    }
    else {
        return `<div class="col-12 pb-1">
        <h3>${this.description}&#10006</h3>
    <button class="btn btn-primary" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Completed</button>
    <button class="btn btn-primary" onclick="app.controllers.todoController.removeTodo('${this._id}')">Remove</button>
    </div>`
    }
    }
  } 