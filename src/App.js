import React,{Component} from'react';
import Todos from "./Todos";
import AddTodo from './AddTodo';


class  App extends Component {
  

  state= {
    todos: [
      {id:1, content: "Play Games"},
      {id:2, content: "Do excercise"}
    ]
  }

  deleteTodo = (id) =>{
  const todos = this.state.todos.filter(todo=> {
     return todo.id !==  id
  });
  this.setState({
    todos: todos
  })
  }

  AddTodo = (todo) => {
    todo.id= Math.random();
    let todos = [...this.state.todos,todo]
    this.setState({
      todos: todos
    })

  }
  
  render(){
    return (
    <div className="todo-app container">
    <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.AddTodo}/>
    </div>
  );
}
}

export default App;
