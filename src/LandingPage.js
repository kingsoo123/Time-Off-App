import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import backgroundImg from './img/backgroundImg.svg';
import honey from './img/honey.svg';
import matern from './img/matern.svg';
import Sign from './Sign';
import Login from './Login';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import AbsentForm from './AbsentForm';
import TeamView from './TeamView';



class LandingPage extends React.Component{

    
    render(){

        return (
                    <div>
                        <BrowserRouter>
                        <div className="con">
                                
                        

                                <Route path="/" exact render={()=>{
                                    return <div>
                                        <nav className="navBar">
                                <Link to="/"><div className="spn"><h3 className="logo">TimeOff App</h3></div></Link>
                                    <div className="signUp">
                                    <Link to="/login"><input type="button" className="btn btn1" value="Login"></input></Link>
                                    <Link to="/sign"><input type="button" className="btn btn2" value="Sign Up"></input></Link>
                                    </div>
                                </nav>
                                        <section>
                                    <div className="headCon">
                                        <h1 className="display-4 head1">TimeOff Management App</h1>
                                        <h3 className="head">Take that leave here...</h3>
                                    </div>
                                </section>

                                <section>
                                    <div className="subCon1">
                                        <div className="innerSubCon">
                                            <img src={backgroundImg}  alt="subCon" width="200px" height="200px" className="imgSub"/>
                                            <p className="pMe">Feeling Tired?</p> 
                                        </div>
                                        <div className="innerSubCon hideUs"><img src={honey}  alt="subCon" width="200px" height="200px" className="imgSub"/>
                                            <p>Need Maternity Leave?</p></div>
                                        <div className="innerSubCon hideUs"><img src={matern}  alt="subCon" width="200px" height="200px" className="imgSub"/>
                                            <p>Going for Honeymoon?</p></div>
                                    </div>
                                </section>

                                <section>
                                        <div className="signBtnDiv">
                                        <Link to="/sign"><input type="button" value="SignUp Now" className="signBtn"></input></Link>
                                        </div>   
                                </section>
                                <section>
                                <p style={{color:"orangered", marginTop:"80px", marginLeft:"580px"}}>powered by Kingsley Onyelo</p>
                                </section>
                                
                                    </div>

                                    
                                    
                                }}></Route>
                                

                                
                                <Route path="/sign" exact component={Sign}/>
                                <Route path="/login" exact component={Login}/>
                                <Route path="/dashboard" exact component={Dashboard}/>
                                <Route path="/absentform" exact component={AbsentForm}/>
                                <Route path="/teamview" exact component={TeamView}/>
                              
                                </div>
                        
                        
                                </BrowserRouter>
                    </div>
                    
            
        );
    }
}

export default LandingPage;

