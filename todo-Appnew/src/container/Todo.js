import React, {Component, Fragment} from 'react'
import ListTodo from '../components/ListTodo'
import axios from 'axios'
import './AddForm.css'

class Todos extends Component {
    state = {
        todo:[],
        postTodo:  {
            id: 0,
            title: "",
            desc: ""
          },
        isUpdate: false  
    }

    fecthData = () => {
        axios.get('http://localhost:3004/todos')
            .then((response) => {
                this.setState ({
                    todo: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleRemove = (data) => {
        //console.log(data)
        axios.delete(`http://localhost:3004/todos/${data}`)
            .then((response) => {
                // handle success
                //console.log(response.data);
                this.fecthData()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    handleFormChange = (event) => {
        let newPostTodo = {...this.state.postTodo}
        let id = new Date().getTime()
        if(!this.state.isUpdate){
            newPostTodo['id'] = id
        }
        newPostTodo[event.target.name] = event.target.value
        this.setState({
            postTodo: newPostTodo
        })
        //console.log(newPostTodo,'handleFormChange');   
    }

    postDatatoAPI = () => {
        //console.log('masuk postdata');
        axios.post('http://localhost:3004/todos', this.state.postTodo)
            .then((response) => {
               console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleSubmit = () => {
        //console.log('masuk1',this.state.postTodo);
        if(this.state.isUpdate){
            console.log('updatesubmit', this.state.isUpdate)
            this.updateDataApi()
        } else {
            this.postDatatoAPI()
        }
        
    }

    handleUpdate = (data) => {
        console.log(data,'data update')
        this.setState({
            postTodo: data,
            isUpdate: true
        })

    }

    updateDataApi = () => {
        console.log(this.state.postTodo,'updateApi')
        axios.put(`http://localhost:3004/todos/${this.state.postTodo.id}`, this.state.postTodo)
            .then((response) => {
               this.fecthData()
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount(){
        this.fecthData()
    }

    render(){
        return (
            <Fragment>
                <div className="container contact-form">
                    <div className="contact-image">
                        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
                    </div>
                    <form >
                        <h3>List your To-Do !!!</h3>
                    <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <input type="text" value={this.state.postTodo.title} name="title" className="form-control" placeholder="What you gonna do ? *" onChange={this.handleFormChange} />
                                </div>
                                <div className="form-group-desc">
                                    <textarea name="desc" value={this.state.postTodo.desc} className="form-control" placeholder="Your Message *" onChange={this.handleFormChange}></textarea>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <button type="submit" name="btnSubmit" className="btnContact" onClick={this.handleSubmit}>Save </button>
                                </div>
                            </div>
                    </div>
                    </form>
                    <div className="col-sm-6">
                        {
                            this.state.todo.map(todo => {
                                return <ListTodo key={todo.id} data={todo} remove={this.handleRemove} update={this.handleUpdate}/>
                            })
                        }
                    </div>
                    <br></br>
                </div>
            </Fragment>
        )
    }
}
export default Todos