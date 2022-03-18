import {Component} from 'react';
import style from './style.module.css'

class ListTodo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.ListWrapper}>
                <div className={style.ListItem}>
                    <input type="checkbox" defaultChecked={this.props.data.completed} onChange={() => {this.props.handleChange(this.props.data)}}/>
                    {this.props.data.completed ? 
                    <p><del>{this.props.data.title}</del></p> 
                    :
                    <p>{this.props.data.title}</p>     
                    }
                </div>
                <button onClick={() => {this.props.handleDel(this.props.data.id)} }>Delete</button>
            </div>
        )
    }
}

export default ListTodo;