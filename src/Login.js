import {Component} from "react";
import React from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { error_message : ""};
        this.loginSuccess = props.success;
        console.log(props.success);

        this.initialState = {
            username : '',
            password : ''
        };

        this.state = this.initialState;
    }


    loginUser() {
        this.loginSuccess();
        // this.setState(state => ({ error_message : "Dupa tam" }));
        console.log("Wal");
    }

    render() {
        return (
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-grey">Przeglądy</h3>
                            <p className="subtitle has-text-grey">Zaloguj się aby kontynuować.</p>
                            <div className="box">
                                <figure className="avatar">
                                    <img src="incold_logo.png" alt="" />
                                </figure>
                                <form>
                                    {this.state.error_message}
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-large" type="email" placeholder="Twój Email"
                                                   autoFocus=""/>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-large" type="password"
                                                   placeholder="Twoje hasło"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="checkbox">
                                            <input type="checkbox"/>
                                            Zapamiętaj mnie
                                        </label>
                                    </div>
                                    <button className="button is-block is-info is-large is-fullwidth" onClick={this.loginUser}>Zaloguj</button>
                                </form>
                            </div>
                            <p className="has-text-grey">
                                &nbsp; <a href="../">Zapomniałeś hasła?</a> &nbsp;
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;