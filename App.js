import React from "react";

class App extends React.Component {
 state = {
    physics: 0,
    chemistry: 0,
    mathematics: 0,
    biology: 0
  };
  calculateAverage = () => {
    const { physics, chemistry, mathematics, biology } = this.state;
    { let x = (parseFloat(physics) + parseFloat(chemistry)+ parseFloat(mathematics)+ parseFloat(biology)) / 4 }
    window.alert(
      `Average = ${x}`
    );
  };

  updateState = (subject, event) => {
    this.setState({ [subject]: event.target.value });
  };
  render() {
    return (
      <div>
        {Object.keys(this.state).map(subject => {
          if (subject !== "average") {
            return (
              <div style={{ display: "flex", padding: 10 }} key={subject}>
                <h4>{subject.toUpperCase()}</h4>
                <input
                  style={{ marginLeft: "35px" }}
                  type="number"
                  onChange={event => this.updateState(subject, event)}
                />
              </div>
            );
          }
          return null;
        })}
        <button onClick={this.calculateAverage}> Average </button>
      </div>
    );
  }
}

export default App;
