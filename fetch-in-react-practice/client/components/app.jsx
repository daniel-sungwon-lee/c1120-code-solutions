import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {

    fetch("http://localhost:3000/api/todos")
      .then(res=>res.json())
      .then(data=>this.setState({todos:data}))
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
  }

  addTodo(newTodo) {

    fetch("http://localhost:3000/api/todos", {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(newTodo)
    })
      .then(res=>res.json())
      .then(todo=>{
        this.setState({todos:this.state.todos.push(todo)})
      })

    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    */
  }

  toggleCompleted(todoId) {

    const changedTodo=this.state.todos.find(todo => todo.todoId === todoId)
    changedTodo.isCompleted
      ? changedTodo.isCompleted=false
      : changedTodo.isCompleted=true

    const reqBody={"isCompleted": changedTodo.isCompleted}

    fetch(`http://localhost:3000/api/todos/${todoId}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(reqBody)
    })
      .then(res=>res.json())
      .then(changedTodo=>{
        const updatedTodos=this.state.todos.map(todo=>{
          todo.todoId===changedTodo.todoId
            ? Object.assign(todo,changedTodo)
            : todo
        })

        this.setState({todos: updatedTodos})
      })

    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
