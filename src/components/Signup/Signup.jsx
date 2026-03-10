import React from "react";
import "./style.css";

export class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", this.state.username);
   localStorage.setItem('username', this.state.username);

    if (this.props.onSignup) {
       this.props.navigate('/posts');
    }
  };

  render() {
    const { username } = this.state;
    const isButtonDisabled = username.trim() === "";
    return (
      <section className="section-signup">
        <div className="container-signup">
          <h1>Welcome to CodeLeap network!</h1>

          <form onSubmit={this.handleSubmit}>
            <label>Please enter you username</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jonh doe"
              value={username}
              onChange={this.handleUserNameChange}
            />
          </form>
          <div className="button">
            <button
              onClick={this.handleSubmit}
              disabled={isButtonDisabled}
              style={{
                opacity: isButtonDisabled ? 0.5 : 1,
                cursor: isButtonDisabled ? "not-allowed" : "pointer",
              }}
            >
              Enter
            </button>
          </div>
        </div>
      </section>
    );
  }
}
