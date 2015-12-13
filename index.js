'use strict';

var { Griddle, DefaultModules } = require('griddle-render');

var React = require('react');
var { GriddleRedux } = require('griddle-connector');

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.component = GriddleRedux({Griddle, Components: DefaultModules, Plugins: this.props.plugins });
  }

  render() {
    return <div style={{width: 800}}>
      <this.component {...this.props}>
        {this.props.children}
      </this.component>
    </div>
  }
}
