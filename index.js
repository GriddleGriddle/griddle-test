'use strict';

var { Griddle } = require('griddle-render');
var FakeData = require('./src/fake-data');
var React = require('react');
var ReactDOM = require('react-dom');
//var RowDefinition = require('./src/row-definition');
//var ColumnDefinition = require('./src/column-definition');
var { GriddleRedux } = require('griddle-connector');;
var GriddleComponent = GriddleRedux(Griddle);

var Test = React.createClass({
  render() {
console.log(FakeData);
    return <div>
      <GriddleComponent data={FakeData} dataKey={'renderedData'} >
      </GriddleComponent>
    </div>
  }
});

ReactDOM.render(<Test />, document.getElementById('main'));
