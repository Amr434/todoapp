export class Model {
  constructor() {
    // The state of the model, an array of todo objects, prepopulated with some data 
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
 
  }
  /**
   * add element to the todos array
   * @param {*} todoText  
   */
  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    }
    
    this.todos.push(todo)
    this._commit(this.todos)

  }
  /**
   * edit element in the todos array
   * @param {*} id 
   * @param {*} updatedText 
   */
  editTodo(id, updatedText) {
    if(updatedText.trim()==''){
      this.todos = this.todos.filter((todo) =>todo.id !=id);
    this._commit(this.todos);

  }
    this.todos = this.todos.map((todo) =>
      todo.id === id ? {id: todo.id, text: updatedText, complete: todo.complete} : todo,
    );
    this._commit(this.todos);
  }
/**
 * delete element from todos array
 * @param {*} id 
 */
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this._commit(this.todos)
    
  }

/**
 * toogle complete status of the element in todos array
 * @param {*} id 
 */
  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? {id: todo.id, text: todo.text, complete: !todo.complete} : todo,
    )
    this._commit(this.todos)
  }
  


  _commit(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
  }


}
