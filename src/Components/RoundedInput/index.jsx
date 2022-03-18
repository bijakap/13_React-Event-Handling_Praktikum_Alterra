import {Component} from 'react';
import style from './style.module.css'

class RoundedInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            completed: false,
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        if (this.state.title !== ""){
            this.props.handleSubmit(this.state)
        } else {
            console.log("input kosong bray")
        }
    }

    render(){
        return(
            <div className={style.InputWrapper}>
                <input type="text" placeholder='Add Todo..' className={style.InputTodo} name="title" onChange={this.onChange}/>
                <button className={style.BtnTodo} onClick={() => {this.onSubmit()}}>Submit</button>
            </div>
        )
    }
}

export default RoundedInput;