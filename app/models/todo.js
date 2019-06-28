export default class Todo {
    constructor(data) {
      
      this._id = data._id
      this.completed = data.completed
      this.user = data.user
      this.description = data.description  
      
    }
    
    get Template(){
      return `
      <div class="col-4">
            <h4>Task ID: ${this._id}</h4>
            <h4>User: ${this.user}</h4>
            <h4>Hours: ${this.completed}</h4>
            <p>Description: ${this.description}</p>
          </div>
      `
    }
  } 