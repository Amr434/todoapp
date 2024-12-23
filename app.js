import { Controller } from "./controller/controller.js";
import { View } from "./view/view.js";
import { Model } from "./model/model.js";
const app = new Controller(new Model(), new View())

 app.view.bindAddTodo(app.handleAddTodo)
 app.view.bindDeleteTodo(app.handleDeleteTodo)
 app.view.bindToggleTodo(app.handleToggleTodo)
 app.view.bindEditTodo(app.handleEditTodo)