import React, { Component, Fragment } from 'react';
import styles from '../login/login.module.css';
import 'bootstrap/dist/css/bootstrap.css';

import { MDBInput } from "mdbreact";


class Signup extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
             <div className={styles.wraplogin100}>
                <form className={styles.login100form}>
                <div className={styles.loginformmain }>
                <span className={styles.Login100formtitle}>SIGN UP</span>
                
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>               
  
  <div className={styles.buttonOutline}>
            <button onClick={(event)=>this.formvalidate()}  className={styles.buttonshape}>
                SUBMIT
            </button>

        </div>
    </div>

                </form>
                </div>
            
            </Fragment>
         );
    }
}
 
export default Signup;