import React, { Component } from 'react';
import logo from './Images/metamask_logo.png';
import Header from './Header';
class Indexpage extends Component{

    render()
    {
        return (
            <div>
                <Header/>
                <div>
                <center>
                    <div className='loginBox'>
                        <img src={logo} alt="" id="meta logo"></img>
                        <div className='formBox'>
                            <br></br>
                            <br></br>
                            <br></br> 
                            <button onClick={this.btnhandler}>
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                </center>
            </div>
            </div>
            
        );
    }
}
export default Indexpage;