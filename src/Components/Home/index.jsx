import {Component} from 'react';
import style from './style.module.css'
import RoundedInput from '../RoundedInput';
import ListTodo from '../ListTodo';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
            {
                id : 1,
                title : "Mengerjakan Execise",
                completed : true,
            },
            {
                id : 2,
                title : "Mengerjakan Homework",
                completed : true,
            },
        ]
    }
        
    }

    handleSubmit = (newTast) => {
        console.log("Task Baru", newTast)
        let newTask
        if (this.state.data.length == 0) {
            newTask = {id : 1, ...newTast}
        } else {
            newTask = {id : (this.state.data[this.state.data.length-1].id + 1), ...newTast}
        }
        console.log(newTask)
        this.setState({data : [...this.state.data, newTask]})
    }

    handleChange = (changes) => {
        const newData = this.state.data.map((data) => {
            if (data.id === changes.id){
                if (data.completed) {
                    data.completed = false
                } else {
                    data.completed = true
                }
            }
            return data
        })
        this.setState({data : newData})
    }

    handleDel = (id) => {
        const newData = this.state.data.filter((data) => data.id !== id)
        this.setState({data : newData})
    }

    render(){
        return(
            <div>
                <div className={style.Wrapper}>
                    <h1 className={style.Gradasi}>TODOS</h1>
                </div>
                <RoundedInput handleSubmit={this.handleSubmit}/>
                {this.state.data.map((data,dataIdx) => (
                    <ListTodo key={dataIdx} data={data} handleChange={this.handleChange} handleDel={this.handleDel}/>
                ))}
            </div>
        )
    }
}

export default Home;