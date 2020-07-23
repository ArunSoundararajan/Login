import React,{Component,Fragment} from 'react';
import LoginForm from './components/login/login';
import styles from './App.module.css';
import Navbars from './components/Dashboard/navbar';
import Signup from './components/signup/signup'
import { BrowserRouter, Route ,Switch} from 'react-router-dom';


class App extends Component {
  
  render(){
  return (
  <Fragment>
    <BrowserRouter>
     
 

    <div className={styles.limiter}>
      <div className={styles.login}>
      <Switch>
      <Route path="/"  exact component={LoginForm} />
      <Route path="/sign-up"  exact component={Signup} />
      <Route path="/login" component={Navbars} />
     
      </Switch>
      
    </div>
    </div>
    </BrowserRouter>
    </Fragment>
  
    
  );
}
}

export default App;
