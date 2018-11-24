import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { Snackbar } from 'react-native-paper';

import getPostsService from '@services/services'

import TodoList from '@containers/example';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listPost: [],
      visible: false
    };
  }

  componentWillMount() {
    $thisHome = this;
    getPostsService(function(data){
      let rows = data.map((r, i) => {
        return <Text key={i} >Post222 { i } : { r.title }{"\n"}</Text>
      });

      $thisHome.setState({
        listPost: rows
      });
    });
  }

  render() {
 
    return (
      <View style={styles.container}>
        <Text>Nombre:</Text>
        <Button
        title={this.state.visible ? 'Ocultar Mensaje' : 'Mostrar Mensaje'}
          onPress={() => this.setState(state => ({ visible: !state.visible }))}
        >
        </Button>
        <TodoList />
        { this.state.listPost }
        
        <Snackbar
          visible={this.state.visible}
          onDismiss={() => this.setState({ visible: false })}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}
        >
          Hey there! I'm a Snackbar.
        </Snackbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default HomeScreen;