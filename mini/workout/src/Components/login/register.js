import React from "react";
import logimg from '../../images/logimg.jpg';

export class Register extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                     <div className="image">
                         <img src={logimg} alt="lib"/>
                     </div>
                     <div className="form">
                         <div className="form-group">
                             <label htmlFor="username">username</label>
                             <input type="text" name="username" placeholder="username"/>
                         </div>
                         <div className="form-group">
                             <label htmlFor="email">Email</label>
                             <input type="text" name="email" placeholder="email"/>
                         </div>
                         <div className="form-group">
                             <label htmlFor="password">Password</label>
                             <input type="password" name="password" placeholder="password"/>
                         </div>
                     </div>
                </div>
                <div className="footer">
                    <button className="btn" type="button">Register</button>
                </div>
            </div>
        );
    }
}