'use strict';

var { Griddle, DefaultModules } = require('griddle-render');

var FakeData = require('./src/fake-data');
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
    return <div style={{width: 800}}>
      <GriddleComponent data={FakeData} ignoredColumns={['favoriteNumber']} style={{ inlineStyles: {columnTitle: { backgroundColor: '#FAB'}, pagination: { backgroundColor: '#FAB'}}}}>
        <DefaultModules.RowDefinition keyColumn="id">
        </DefaultModules.RowDefinition>
      </GriddleComponent>
    </div>
  }
});

ReactDOM.render(<Test />, document.getElementById('main'));
