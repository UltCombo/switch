import React from 'react';
import { StyleSheet, Switch, View, StatusBar } from 'react-native';

export default class App extends React.Component {
  state = {
    toggle: false,
  };

  render() {
    return (
      <View style={[styles.container, this.state.toggle && styles.containerActive]}>
        <StatusBar hidden={true} />
        <Switch onValueChange={() => this.setState({ toggle: !this.state.toggle })} value={this.state.toggle} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1f21',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerActive: {
    backgroundColor: '#ededed',
  },
});
