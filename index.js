'use strict';

var { Griddle, DefaultModules } = require('griddle-render');

var FakeData = require('./src/fake-subgrid-data');
var React = require('react');
var ReactDOM = require('react-dom');
//var RowDefinition = require('./src/row-definition');
//var ColumnDefinition = require('./src/column-definition');
var { GriddleRedux } = require('griddle-connector');
var SubgridPlugin = require('griddle-subgrid-plugin');
var SelectionPlugin = require('griddle-selection-plugin');

var GriddleComponent = GriddleRedux({Griddle, Components: DefaultModules, Plugins: [] });

var Test = React.createClass({
  render() {
    return <div>
      <GriddleComponent data={FakeData} columns={['name', 'state', 'city', 'favoriteNumber']}>
        <DefaultModules.RowDefinition keyColumn="id">
        </DefaultModules.RowDefinition>
      </GriddleComponent>
    </div>
  }
});

ReactDOM.render(<Test />, document.getElementById('main'));
