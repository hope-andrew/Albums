import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: 80,
    boarder: '1 solid #EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  }
};

export default Header;
