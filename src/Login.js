import React, { Component  }from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: null,
          password: null,
          isLoggedIn: false,
          error: null
        };
        
        // Käyttäjätunnukset kovakoodattu
        this.correctLogin = {
          name: 'Testi',
          password: 'testi'
        }
      }
      
      handleNameChange(event) {
        this.setState({
          name: event.currentTarget.value
        });
      }
      
      handlePasswordChange(event) {
        this.setState({
          password: event.currentTarget.value
        });
      }
      
      handleSubmit() {
        const {name, password} = this.state;
        //tarkastetaan vastaako annetut tiedot kovakoodattuja tietoja
        if (name === this.correctLogin.name && password === this.correctLogin.password) {
          this.setState({
            isLoggedIn: true        
          });
        } else {
          this.setState({
            isLoggedIn: false,
            error: "Kirjautuminen epäonnistui!"
          });
        }
      }

      handleLogoutClick() {
      
      }
    //Virheilmoituksen renderöinti
      renderError() {
        if (this.state.error) {
          return (
            <div><span style={{color: 'red'}}>{this.state.error}</span></div>
          );
        }
        
        return;
      }
    //Kirjautumissivun renderöinti
      renderLogin() {
        return (
          <div>
              <h3>Kirjaudu sisään</h3>
            {this.renderError()}
            <div className="login-form-container">
            <section>
              <input class="login-input" type="text" name="name" placeholder="Käyttäjätunnus" onChange={this.handleNameChange.bind(this)} />
              <input class="login-input" type="password" name="password" placeholder="Salasana" onChange={this.handlePasswordChange.bind(this)} />
            </section>
            <section>
              <button class="btn" onClick={this.handleSubmit.bind(this)}>Kirjaudu sisään</button> 
            </section>
          </div>
          </div>
        );
      }
    //Käyttäjäsivun renderöinti
      renderUser() {
        return (
          <div>
            <h3>{`Tervetuloa ${this.state.name}!`}</h3>
            <button class="btn" onClick={this.handleLoginClick}>Kirjaudu ulos</button>
          </div>
        );
      }
      
      render() {
        const currentView = (this.state.isLoggedIn) ? this.renderUser() : this.renderLogin();
        
        return (
          <section>
            {currentView}
          </section>
        );
      }
    }