import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import LoginComponent from './LoginComponent'
import ToDoItem from './ToDoItem'
import todoData from './ToDoData';
import ButtonComponent from './ButtonComponent'

class ToDo extends React.Component {
  constructor()
  {
    super()
    this.state = {
      todo: todoData,
      user: {
        firstName:'',
        password:'',
        Islogin: false
      }
    }
  }
  componentWillMount(){
    console.log('Im from will mount')
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/posts',{
    //   method: 'GET',
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   }
    // })
    // .then(response => response.json())
    // .then(json => this.setState({todo: json}))
    console.log('Im from Did mount')
  }

  userLogin =(eventValue)=>{
    let {name, value} = eventValue
    console.log(name, value)
   let paramValue = eventValue
    this.setState(prevState => {
      return { 
        user: 
        {...prevState.user, 
          [name]:value}
      }
    }
    )
  }
  submitClick = (e)=> {
    e.stopPropagation()
    console.log(this.state.user.Islogin)
    this.state.user['Islogin'] = true
   const updatedValue = this.state.user
    this.setState({ user: updatedValue})
    console.log(this.state.user.Islogin)
  }

  logOutClick = (e)=> {
    console.log(this.state.user.Islogin)
    this.state.user['Islogin'] = false
    this.state.user['firstName'] = ''
    this.state.user['password'] = ''
   const updatedValue = this.state.user
    this.setState({ user: updatedValue})
    console.log(this.state.user.Islogin)
  }

  handleCheckbox = (id) =>{
    const updatedTodos = this.state.todo.map(item=>{
      if(id===item.id)
      {
         item.completed= !item.completed
      }
      return item
    })
    
    this.setState({todo: updatedTodos})
    alert(id)
  }
  render(){
    console.log('Im from Render mount')
  return (
    <div className="App">
      <header className="App-header">
       {this.state.user.firstName ? 
       <div>Hello, {this.state.user.firstName}</div>:
       <div>Please Login to proceed to the Site</div>
      }
      </header>
      <div class="grid-container">
            <div class="item1">
                Hello Welcome to my site
            </div>
            <div class="item2">Menu</div>
            <div class="item3">Main</div>  
            <div class="item4">Right</div>
            <div class="item5">Footer</div>
            </div>
        <input type='button' 
        value='Logout' 
        hidden={!this.state.user.Islogin} 
        onClick={this.logOutClick}/>
      {!this.state.user.Islogin ?  
      <div>
      <LoginComponent userData={this.state.user}
       userLogin={this.userLogin}
       submitClick={this.submitClick}/>
      </div>
      : <ToDoItem data={this.state.todo} handleCheck={this.handleCheckbox}/>
      }
      <ButtonComponent />
    </div>
  );
  }
}

export default ToDo;
