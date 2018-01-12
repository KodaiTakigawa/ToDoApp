import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        {this.prop.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
    backgroundColor: '#eee',
  },
});

exoprt default BodyText;
