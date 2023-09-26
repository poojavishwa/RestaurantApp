import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste Reat Web Series</h2>
        <UserClass
          name={"Gurudatt (Class)"}
          location={"Indore (Class)"}
          contact={"@gurudatt8757 (Class)"}
        />
      </div>
    );
  }
}

export default About;
