

import React,{Component,Fragment} from 'react';
import styles from './login.module.css';
import {Link,Route} from 'react-router-dom';

import '../assets/fonts/raleway/Raleway-Bold.ttf'
import '../assets/fonts/raleway/Raleway-Black.ttf';
import axios from "axios";
const initialFormData = Object.freeze({
    username: "",
    password: ""
 });
class LoginForm extends Component {
    

    formvalidate=(event)=>{
    console.log('hello');

    //const [formData, updateFormData] = React.useState(initialFormData);
   
    //console.log(formData);
        // ... submit to API or something
      };
    
    
    render() { 
        
        return ( 
            <Fragment>
            <div className={styles.wraplogin100}>
                <form className={styles.login100form}>
                <div className={styles.loginformmain }>
                <span className={styles.Login100formtitle}>Login</span>
                <div className={styles.wrapemail}>
            <input  className={styles.inputemail}  type='email' name='email' placeholder='Enter E-mail' required />
            
            <span className={styles.symbol}>
            <img src="https://img.icons8.com/nolan/32/email.png" alt="style image"/>
                <span className={styles.iconalign}>

                </span>
            </span>

        </div>
        <div className={styles.wrapemail}>
        <input className={styles.inputemail}  type='password' name='password' placeholder='Enter password' required />
        <span className={styles.focus}></span>
        <span className={styles.symbol}>
        <img src="https://img.icons8.com/nolan/32/password.png"/>
            <span className={styles.iconalign}>

            </span>
        </span>
     </div>
     <div class="contact100-form-checkbox m-l-4">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
		</div>
    <div className={styles.buttonOutline}>
            <button onClick={(event)=>this.formvalidate()}  className={styles.buttonshape}>
                Login
            </button>

        </div>

        <div className={styles.buttonOutline}>
        <h3><span class="badge badge-light">
  <Link to="/sign-up">signup</Link>
    </span></h3>
        </div>
        
       </div>
                </form>
            </div>
            </Fragment>
            
         );
    }
}
 
export default LoginForm;