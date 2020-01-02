import React from "react"
import ToDoListItem from './ToDoListItem'
import './gridStyles.css'

class ToDoItem extends React.Component {
    constructor(props)
    {
        super(props)

    }
    render(){
        console.log('Render from ToDoItem')
        const ListItems = this.props.data.map((item, index)=>{
            return <ToDoListItem key={index} listItem ={item} listItemCheck = {this.props.handleCheck} />
        })
        const todoStyle = {
            position: 'absolute',
            border: "1px solid black",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
            width: "100%",
            marginTop: "2%"
        }
        return(
            <div style={todoStyle}>{ListItems}
            
            </div>
            
        );
    }

}

export default ToDoItem