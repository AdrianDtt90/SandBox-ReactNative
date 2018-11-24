import React, {Component} from 'react';
import { View } from 'react-native';

import FBLoginButton from '@components/Facebook-Btn';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <FBLoginButton redirect={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

export default LoginScreen;