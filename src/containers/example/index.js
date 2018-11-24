import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import actionsApp from '@redux/actions';
import storeApp from '@redux/store';

class TodoList extends Component {
    render() {
      return (
        <View>
            <Text>{this.props.todos}</Text>
            <Text>----</Text>
            <Button
            onPress={this.props.onChangeTodo}
            title="Traer nombre"
            />
        </View>
      );
    }
  };

const mapStateToProps = state => ({
    todos: state.rootData.todos
})

const mapDispatchToProps = dispatch => ({
    onChangeTodo: () => { 
        var currentStore = storeApp.getState();
        dispatch(actionsApp.CHANGE_TODO('eugenia')) 
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)