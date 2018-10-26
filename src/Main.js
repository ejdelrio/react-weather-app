import React from 'react';
import ReactDom from 'react-dom';

//import App from './components/app';
//import './style/main.scss'
class TestElement extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <h1>{process.env.__API_KEY__}</h1>
    )
  }
}

ReactDom.render(<TestElement />, document.getElementById('root'));