import React from 'react';
// bind, apply, call, this, context
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncreaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // Lifecycle hooks: Vòng dời components
  componentDidMount() {}

  render() {
    return (
      <div>
        <button onClick={this.handleIncreaseCount}>Increase count</button>
        <p>Count {this.state.count}</p>
      </div>
    );
  }
}

export default ClassComponent;
