import React from "react"
 

class ToDoListItem extends React.Component {
    constructor(props)
    {
        super(props)

    }
    render(){
        console.log('Render from ToDoListItem')
        const cardStyle={
            textAlign: "left",
        }
        const gridContainer={
            display: "gris",
            gridTtemplateColumns: "auto auto auto",
            backgroundColor: "#2196F3"
        }
        return(
            <div style={gridContainer}>
            <div style={cardStyle}>
            <input type="checkbox" 
                checked={this.props.listItem.completed}
                onChange={()=>this.props.listItemCheck(this.props.listItem.id)}
            />
           <span style={{textDecoration: this.props.listItem.completed && "line-through"}}
           onClick={()=>this.props.listItemCheck(this.props.listItem.id)}
           >
           {this.props.listItem.Title}
           </span>
            </div>
            
            </div>
        );
    }

}

export default ToDoListItem