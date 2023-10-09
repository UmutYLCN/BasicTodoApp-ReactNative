import { View, Text, StyleSheet, FlatList} from 'react-native'
import React from 'react'
import Item from './Item'
import { useUsers } from '../context/UsersContext'
import Message from './Message'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

const List = () => {

  const { users , loading ,error } = useUsers();

  if(loading){
    return <Loading message="Loading..."></Loading>
  }
  if(error){
    return <ErrorMessage message={error}></ErrorMessage>
  }

  return (
    <>
    { users.length === 0 && !loading && <Message message="No Item"/>}
    <FlatList
        style={styles.list}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Item user={item} />}
    >
    </FlatList>
    </>
  )
}


const styles = StyleSheet.create({
    list : {
        flex : 1,
        padding : 10,
    }
})

export default List