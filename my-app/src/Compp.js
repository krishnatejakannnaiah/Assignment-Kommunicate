import logo from './logo.svg';
import './App.scss';
import React, {Component} from "react"
import Modal from 'react-modal';
import Modall from './Modal'
import home from './home'



function Compp(props) {
 
        return(

            <div>
            {
                    
                    props.items.items.slice(4, 8).map(item =>(
                        <li key={item.id} align="middle" className="total"> 
                         <table id="tab">
                        <td><img src={item.avatar} width="50" height="50" /></td>
                        <td><h3>{item.first_name } {item.last_name}</h3></td> 
                        <td>{item.email}</td>
                        </table>
                        <Modall key={item.id} item={item}/>
                        </li>
                    )
         
                )    
               
        }
    </div>            
        )
    
}


export default Compp