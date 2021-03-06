import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./NewTodoForm.css"


export default class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { task: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4(), completed:false })
        this.setState({task:''})

    }
    render() {
        return (
            <form clasName="NewTodoForm" onSubmit={this.handleSubmit}>
                <labal htmlFor="task">New Todo</labal>
                <input type="text"
                    id="task"
                    placeholder="New Todo"
                    value={this.state.task}
                    onChange={this.handleChange}
                    name="task"
                />
                <button>Add Todo</button>
            </form>
        )
    }
}
