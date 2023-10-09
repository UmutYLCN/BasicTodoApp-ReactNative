import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Loading = ({message}) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
})

export default Loading