import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import PropTypes from "prop-types"

const Message = ({ bgColor , message}) => {
  return (
    <View style={[styles.container, {backgroundColor : bgColor}]}>
        <Text style={styles.text}>{message}</Text>
    </View>
  );
};

Message.PropTypes = {
    bgColor : PropTypes.string,
    message : PropTypes.string
}

Message.defaultProps = {
    bgColor : "orange",
};

const styles = StyleSheet.create({
    container : {
        margin : 10,
        padding: 12,
        borderWidth : 1,
        borderColor : "#000"
    },
    text :{
        fontSize : 18,
    }
})
export default Message