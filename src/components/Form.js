import { View, Text ,StyleSheet, TextInput} from 'react-native'
import React, { useState } from 'react'
import { useUsers } from '../context/UsersContext';

const Form = () => {

  const [name ,setName] = useState();
  const {setUsers,addUser } = useUsers();

  const handleSubmit = () => {

    if(!name){
      return false
    }
    
    addUser({name});
    setName("");
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        returnKeyType='go'
        value={name}
        onChangeText={(text)=> setName(text)}
        onEndEditing={handleSubmit}
        placeholder='Enter Username'
      >
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        padding : 10 ,
    },
    input : {
        width : "100%",
        padding : 5 ,
        borderColor : "#999",
        borderWidth : 2,
        height : 50 ,
        fontSize : 20 ,
    },
})

export default Form
