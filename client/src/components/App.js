import React, { Component } from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Fromから追加する */}
        <AddForm store={this.props.store} />
        {/* TodoList */}
        <TodoList store={this.props.store} />
      </div>
    );
  }
}

export default App;
