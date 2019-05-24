import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    getStyle = () => {
    //     if(this.props.todo.completed){
    //     return {
    //         textDecoration: 'line-through'
    //     }
    // }else{
    //     return {
    //         textDecoration: 'none'
    //     }
    // }
    return {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ?'line-through' : 'none'
    }
}

  markComplete = (e) => {
      
  }  
    
    render() {
        return (
            <div style={ this.getStyle() }>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)}/> 
                {' '}
                {this.props.todo.title}
                <button style={ btnStyle } 
                onClick={ this.props.delTodo.bind(this,this.props.todo.id)}>x</button>
                </p>
            </div>
        )
    }
}

//PrppTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 8px',
    borderRadius: '50%',
    cursor:'pointer',
    float:'right'
}
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }