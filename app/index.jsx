import  { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () =>{
    return(
        <View style={styles.container}>
            <Text>Welcome to sauna booking system</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Home