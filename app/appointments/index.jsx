import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Appointments = () => {
  return (
    <View style={styles.container}>
      <Text>Appointments</Text>
    </View>
  )
}

export default Appointments

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})