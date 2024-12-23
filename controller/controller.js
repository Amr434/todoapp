export class Controller{
    constructor(model ,view){
        this.model=model;
        this.view=view;
        this.onTodoListChanged(this.model.todos)
    }

    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos)
      }


      handleAddTodo = (todoText) => {
        this.model.addTodo(todoText)
        this.onTodoListChanged(this.model.todos)
      }
      
      handleEditTodo = (id, todoText) => {
        this.model.editTodo(id, todoText)
        this.onTodoListChanged(this.model.todos)

      }
      
      handleDeleteTodo = (id) => {
        this.model.deleteTodo(id)
        this.onTodoListChanged(this.model.todos)

      }
      
      handleToggleTodo = (id) => {
        this.model.toggleTodo(id)
        this.onTodoListChanged(this.model.todos)

      };

       
   

    



}

