import React, { Component } from 'react'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Rasen mähen',
        completed: false
      },
      {
        id: 2,
        title: 'Hecke schneiden',
        completed: false
      },
      {
        id: 3,
        title: 'Beet umgraben',
        completed: false
      }
    ]
  }

  jobComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  addTodo = title => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.totdos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            jobComplete={this.jobComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    )
  }
}

export default App

/* Link-Angabe für die Verwendung der Icons:
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
*/
