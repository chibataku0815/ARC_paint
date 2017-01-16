import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
      constructor(props) {
        super(props);
        this.state = {name: this.props.initialName};
      }

      render() {
        return <div>Hello {this.state.name}</div>;
      }
    }
    Hello.defaultProps = {initialName: "Default Props"};


    ReactDOM.render(
      <Hello />,
      document.getElementById('app')
    );
