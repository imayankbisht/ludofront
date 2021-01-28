import {Switch ,Route,Redirect} from 'react-router-dom';

import React from 'react';
import Dashboard from '../Components/Dashboard';
import Sidebar from '../Components/Sidebar';
import Login from '../Components/login';
import Routes from '../routes';
export default function Main(props) {
    console.log("hello");
    
    return(
        <div>
            {/* <Switch>
                <Route exact path="/userman" render={props =><UserManagement {...props} />} />
                <Route exact path="/create" render={props =>(
                    <UserForm heading="Create Room" />
                )}/>
                <Route exact path="/api/edit/:id" render={props =>{
                    return(
                        <EditForm {...props}/>
                    )
                }}/>
            </Switch> */}
           {/* <Switch>
               
            <Route exact path="/login" render={props =><Login {...props} />} />
            <Route path="/Dashboard" render={props =><Dashboard {...props} />} />
      
            <Redirect from="/" to="/login" /> 
           </Switch>
          */}
          <Dashboard/>
        </div>
    )
}