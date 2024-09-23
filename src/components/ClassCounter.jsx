import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
  }
  render() {
    const { name } = this.props;
    return (
      <>
        <div className="ml-10">
          <h1 className="mb-5">{name}</h1>
          <div className="flex gap-5 mb-10">
            <button
              className="bg-slate-400 w-10 text-3xl"
              onClick={() => this.setState({ count1: this.state.count1 + 1 })}
            >
              +
            </button>
            <h1>{this.state.count1}</h1>
            <button
              className="bg-slate-400 w-10 text-3xl"
              onClick={() => this.setState({ count1: this.state.count1 - 1 })}
            >
              -
            </button>
          </div>
          <hr />
          <div className="flex gap-5 mt-10">
            <button
              className="bg-slate-400 w-10 text-3xl"
              onClick={() => this.setState({ count2: this.state.count2 + 1 })}
            >
              +
            </button>
            <h1>{this.state.count2}</h1>
            <button
              className="bg-slate-400 w-10 text-3xl"
              onClick={() => this.setState({ count2: this.state.count2 - 1 })}
            >
              -
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ClassCounter;
