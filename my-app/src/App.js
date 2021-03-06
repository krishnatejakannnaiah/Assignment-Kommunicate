import logo from './logo.svg';
import './App.scss';
import React, {Component} from "react"
import Modal from 'react-modal';
import Modall from './Modal'
import home from './home'
import CompOne from './CompOne'
import Compp from './Compp'
import Comppp from './Comppp'
import Search from './Search'

class App extends Component {
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
            });

            fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items2: json.data
                })
            }).then(()=>
            {
                this.setState({
                    items : [...this.state.items1, ...this.state.items2]
                })
            });
            

        this.Onepage= this.Onepage.bind(this)
        this.Twopage= this.Twopage.bind(this)
        this.Threepage= this.Threepage.bind(this)
        this.ShowRes= this.ShowRes.bind(this)

    }
  

    Onepage(){
        this.setState({
            page1: true,
            page2: false,
            page3: false
        })
    }

    Twopage(){
    this.setState({
        page1: false,
        page2: true,
        page3: false
        })
    }

    Threepage(){
        this.setState({
        page1: false,
        page2: false,
        page3: true
      })
    }

    ShowRes(){
        let query = document.getElementById('search').value;
        
        for (let i=0; i<12; i++){
            if(query == this.state.items[i].email){
                            
                document.getElementById("printS").innerHTML = "<hr>" + this.state.items[i].first_name + " "+ this.state.items[i].last_name + "<br/>" + this.state.items[i].email + "<br/><hr>";
                break
            }

        }
     
    }
            



    render() {
        
        var {loading,items} = this.state
      
        if(!loading){
            return <div><h1>loading...</h1></div>
        }
        else{

            if (this.state.page1){        
                return(
                    <div>
                        <input type="text" placeholder="Search by email" id="search"  className="inp"/>
                        <button onClick={this.ShowRes} className="go">Go</button>
                        <h3 id="printS"></h3>
                        <CompOne items={this.state}/>
                        <div align="middle">
                            <button onClick={this.Onepage} className="page">1</button>
                            <button onClick={this.Twopage} className="page">2</button>
                            <button onClick={this.Threepage} className="page">3</button></div>
                        </div>            
                )
            }
        
        else if(this.state.page2){
            return(
                <div>
                    <input type="text" placeholder="Search by email" id="search" className="inp" />
                    <button onClick={this.ShowRes}  className="go">Go</button>
                    <h3 id="printS"></h3>
                    <Compp items={this.state}/>
                    <div align="middle">
                        <button onClick={this.Onepage} className="page">1</button>
                        <button onClick={this.Twopage} className="page">2</button>
                        <button onClick={this.Threepage} className="page">3</button>
                    </div>
                </div> 
                )
        }

        else if(this.state.page3){
            return(
                <div>
                    <input type="text" placeholder="Search by email" id="search" className="inp" />
                    <button onClick={this.ShowRes}  className="go">Go</button>
                    <h3 id="printS"></h3>
                    <Comppp items={this.state}/>
                    <div align="middle">
                        <button onClick={this.Onepage} className="page">1</button>
                        <button onClick={this.Twopage} className="page">2</button>
                        <button onClick={this.Threepage} className="page">3</button>
                    </div>
                </div> 
                )
            }
   
        }
     
    }
}

export default App
