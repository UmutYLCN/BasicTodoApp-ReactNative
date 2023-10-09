import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useUsers } from '../context/UsersContext'


const Item = ({user}) => {

  const { removeUser } = useUsers();

  return (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.text}>{user.name}</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => removeUser(user.id)}>
          <Text style={styles.remove}>Sil</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    item : {
        padding : 10,
        backgroundColor : "#D8D8D8",
        borderBottomWidth : 1,
        borderBottomColor : "#999",
        alignItems : "center",
        justifyContent: "space-between",
        flexDirection : "row",
    },
    text : {
        fontSize : 18,
    },
    remove: {
      color : "red",
    }
})


export default Item