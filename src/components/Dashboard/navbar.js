import React,{Component} from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar'
class Navbars extends Component {
    state = {  }
    componentDidMount(){
        axios.get('http://localhost/retrieve').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

    }
    
    render() { 
        return ( 
            <Navbar>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
         Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
    </Navbar.Collapse>
    </Navbar>
         );
    }
}
 
export default Navbars;