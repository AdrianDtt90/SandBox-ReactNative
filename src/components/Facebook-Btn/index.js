import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { StyleSheet, Image, Text } from 'react-native';

import actionsApp from '@redux/actions';
import storeApp from '@redux/store';

class FBLoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlImage: undefined,
      user_name: undefined,
      user_id: undefined
    };
  }

  componentDidMount() {
    this.login();
  }

  login() {
    $thisFB = this;
    
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {

        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log('Login success with permissions: '
            +result.grantedPermissions.toString());

          AccessToken.getCurrentAccessToken().then((data) => {
            let accessToken = data.accessToken

            const responseInfoCallback = (error, result) => {
              if (error) {
                console.log(error)
                alert('Error fetching data: ' + error.toString());
              } else {
                console.log(result);
                
                //Set current element
                $thisFB.setState({
                  urlImage: "https://graph.facebook.com/"+result.id+"/picture?type=large",
                  user_name: result.name,
                  user_id: result.id
                });

                //Set store redux to get access to the user data
                storeApp.dispatch(actionsApp.SAVE_FB_DATA({
                  urlImage: "https://graph.facebook.com/"+result.id+"/picture?type=large",
                  user_name: result.name,
                  user_id: result.id
                }));

                if($thisFB.props.redirect)
                  $thisFB.props.redirect();
                else
                  alert('Error al intentar iniciar sesión.');
              }
            }
            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken: accessToken,
                  parameters: {
                    fields: {
                    string: 'email,name,first_name,last_name,picture'
                    }
                  }
              },
              responseInfoCallback,
              console.log(result)
            );
            new GraphRequestManager().addRequest(infoRequest).start()
          });
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      }
    )
  }

  logout() {
    $thisFB.setState({
      urlImage: undefined,
      user_name: undefined,
      user_id: undefined
    });
    LoginManager.logOut();
    alert("User logged out");
  }

  render() {
    return (
      <View>
        {/*<Button title="Login con Facebook" onPress={this.login.bind(this)} />*/}
        <Image style={{width: 100, height: 100}} source={ { uri: this.state.urlImage } } />
        <Text>{this.state.user_name}</Text>
        <Text>{this.state.user_id}</Text>

        <LoginButton
          style={styles.container}
          readPermissions={["public_profile"]}
          onLoginFinished={this.login.bind(this)}
          onLogoutFinished={this.logout.bind(this)}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 30,
    borderColor: '#d6d7da',
  }
});

export default FBLoginButton;