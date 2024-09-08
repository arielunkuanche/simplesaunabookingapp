import React , { useState} from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { API_URL} from '@env'


const Booking = () =>{
    const[user, setUser] = useState('');
    const[timeSlot, setTimeSlot] = useState('');

    const handleBooking = ()=>{
        fetch(`${API_URL}/book`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user, time_slot: timeSlot})
        })
        .then(response => response.json())
        .then(data => {
            Alert.alert(data.message);
            Keyboard.dismiss();
            setUser('');
            setTimeSlot('');
        })
        .catch(err => console.log('Error: ', err));
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text>Enter your name</Text>
                <TextInput 
                    style={styles.input}
                    value={user}
                    onChangeText={setUser}
                />
                <Text>Enter time slot (e.g., 18:00-19:00): </Text>
                <TextInput 
                    style={styles.input}
                    value={timeSlot}
                    onChangeText={setTimeSlot}
                />
                <Button title="Book sauna" onPress={handleBooking}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
})
export default Booking