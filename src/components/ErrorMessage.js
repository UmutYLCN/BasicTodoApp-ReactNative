import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}

export default ErrorMessage

const styles = StyleSheet.create({

})