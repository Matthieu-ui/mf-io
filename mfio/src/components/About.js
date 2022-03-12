import React from "react";

class About extends React.Component {
  state = {
    showMessage: false,
  };
  onButtonClickHandler = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  render() {
    return (
      <div className="About">
        {this.state.showMessage && (
          <p>
            I am a current student at Seattle Central College. Eager to
            start a career in <b>Web Development</b>. I like experimenting with user interfaces and design, but I've learned web development goes much deeper than that, which also interests me. --I love to create
            things and learn! I also enjoy quality time with
            my dogs, bird, and plants!! If
            you wish to contact me - try my links below.
          </p>
        )}
        <button onClick={this.onButtonClickHandler}>About</button>
      </div>
    );
  }
}

export default About;
