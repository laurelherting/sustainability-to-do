import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isInterested: true,
      gender: "",
      bestDay: "Saturday",
      task: [],
    };
    this.handleChange = this.handleChange.bind();
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />

          <textarea value={"default value"} onChange={this.handleChange} />

          <br />

          <label>
            <input
              type="checkbox"
              name="isInterested"
              checked={this.state.isInterested}
              onChange={this.handleChange}
            />{" "}
            Is interested?
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>

          <select
            value={this.state.bestDay}
            onChange={this.handleChange}
            name="bestDay"
          >
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>

          {/* Create radio buttons for tasks here */}

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered Information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>You are a {this.state.gender}</p>
        <p>Your best day is {this.state.bestDay}</p>
        <p>
          Your tasks:
          {/* tasks here, comma separated */}
        </p>
      </main>
    );
  }
 -l

export default App;
