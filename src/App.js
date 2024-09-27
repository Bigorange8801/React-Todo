import React from 'react';
import Todolist from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';


const todoData= [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
        todos:todoData,
      };
    }
    toggleCompleted = (id) => {
      for(let i=0;i<this.state.todos.length;i++){
        if(id === this.state.todos[i].id){
          console.log(this.state.todos[i].task)

          let todoCopy=[...this.state.todos]
          console.log(todoCopy)
          todoCopy[i].completed = !todoCopy[i].completed 
          console.log(todoCopy[i].completed)
          this.setState({todos:todoCopy});
        }else {
          
        }
      }
     }
    
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
       
       <Todolist todos={this.state.todos}
                  toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
