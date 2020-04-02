import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isInterested: true,
      gender: "",
      bestDay: "Sunday"
    };
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
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

        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your best day is {this.state.bestDay}</h2>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
