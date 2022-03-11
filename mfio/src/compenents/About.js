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
            I am a current student at Seattle Central College! On the verge of
            starting a career in <b>Web Development</b>. -- I love to create
            things and learn! When I am not doing that I enjoy quality time with
            my dogs, bird, and plants... Or you might catch me watching movies,
            playing computer games, or exploring places I have never been. If
            you wish to contact me - try my links below.
          </p>
        )}
        <button onClick={this.onButtonClickHandler}>About</button>
      </div>
    );
  }
}

export default About;
