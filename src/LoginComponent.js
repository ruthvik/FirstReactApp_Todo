import React from "react";

class LoginComponent extends React.Component {
constructor(props){
    super(props)
}
componentWillMount(){
    console.log('Im from Login will mount')
  }
  
  componentDidMount(){
    console.log('Im from Login Did mount')
  }
render(){
    return(
        <div>
            <label htmlFor="userName">UserName:</label>
            <input type="text" id="userName" 
            value={this.props.userData.firstName}
            name="firstName"
            onChange={(e)=>this.props.userLogin(e.target)}/>
            <label htmlFor="password" >Password:</label>
            <input type="password" id="password" 
            name="password"
            value={this.props.userData.password}
            onChange={(e)=>this.props.userLogin(e.target)} />
            <input type="button" id="submitButton" 
            value="Login"
            onClick={(e)=>this.props.submitClick(e)}/>
        </div>
    )
}
}

export default LoginComponent