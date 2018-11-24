import { connect } from 'react-redux'
import React, {Component} from "react";
import { Container, Content, List, ListItem } from "native-base";
import { Image, Text } from 'react-native';
import { withTheme } from 'react-native-paper';

class SideBar extends Component {

  render() {
    const { colors } = this.props.theme;

    return (
      <Container>
        <Content>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: this.props.user.urlImage }}
          />
          <Text style={{ color: colors.primary }}>{this.props.user.user_name}</Text>
          <Text style={{ color: colors.accent }}>{this.props.user.user_id}</Text>
          <List
            dataArray={this.props.routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: (state.facebookData.user ? state.facebookData.user : '')
})

export default connect(
  mapStateToProps,
  null
)(withTheme(SideBar))