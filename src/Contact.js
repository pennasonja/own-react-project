import React, {Component} from 'react';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      hasSent: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
    }
  
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: '',
      hasSent: true
    }, () => { setTimeout(() => {
      this.setState({hasSent:false});
    }, 2000)}
                 );
  }
  render(){
    const { hasSent } = this.state;
    return (
      <div>
        <h3>Ota meihin yhteyttä!</h3>
      {hasSent ? ( <SentMessageBox /> ) 
      : (
      <form className="contact-form-container" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name} placeholder="Nimi" name='name' className="contact-input" onChange={this.handleChange} required />
        <input type="email" value={this.state.email} placeholder="Sähköposti" name='email' className="contact-input"  onChange={this.handleChange} required />
        <textarea placeholder="Viesti" name='message' value={this.state.message} className="contact-input" onChange={this.handleChange} />
        <button class="btn" value="Submit">Lähetä</button>
      </form>
      )
    }
      </div>
  )
  }
}
const SentMessageBox = () => {
  return (
  <div className="sent-message-box">Viesti lähetetty! Otamme yhteyttä mahdollisimman pian. <i class="fas fa-check-circle"></i></div>
    )
}
