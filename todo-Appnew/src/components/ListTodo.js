import React from 'react'
import './ListTodo.css'
const ListTodo = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="title">{props.data.title}</h5>
                <p className="desc">{props.data.desc}</p>
                <button type="button" className="btn btn-danger" onClick = {() => props.remove(props.data.id)} >Delete</button>
                <button type="button" className="btn btn-info" onClick = {() => props.update(props.data)} >Update</button>
            </div>
        </div>
    )
}

export default ListTodo