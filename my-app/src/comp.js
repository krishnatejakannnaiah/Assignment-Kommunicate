import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"
import Modal from 'react-modal';
import Modall from './Modal'
import { Router, Route, Switch } from "react-router";
import home from './home'



class comp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            items1: [],
            items2 : [],
            items : [],
            page1: true,
            page2: false,
            page3: false
        };

        
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users?page=1")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    loading: true,
                    items1: json.data
                })
                console.log(this.state.items1)


            });
            fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items2: json.data
                })
                console.log(this.state.items2)
            }).then(()=>
            {
                this.setState({
                    items : [...this.state.items1, ...this.state.items2]
                })
            });
        //          this.Appp = this.Appp.bind(this)
            
    }
  



    render(){
        var {loading,items} = this.state

        return(

            <div>
            {
            
                        items.slice(5, 8).map(item =>(
                            <li key={item.id}> 
                             <img src={item.avatar} width="50" height="30" />
                            {item.first_name} 
                            {item.last_name}<br/>
                            {item.email}
                            <Modall key={item.id} item={item}/>
                            </li>
                        )
             
                    )
                    
                   
                }
    </div>            
        )
    }
}


export default comp