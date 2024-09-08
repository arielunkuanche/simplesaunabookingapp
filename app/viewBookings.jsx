import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { API_URL} from '@env'

const ViewBookings =() =>{
    const [bookings, setBookings] = useState([]);

    useEffect( ()=> {
        fetch(`${API_URL}/bookings`)
        .then(response => response.json())
        .then(data => setBookings(data))
        .catch(error => console.error('Error:', error));
    }, [])

    return(
        <View style={styles.container}>
            {bookings.length === 0? (<Text>No booking available! </Text>) : (
                <FlatList 
                    data={bookings}
                    keyExtractor={(item, index) => index.toString()} 
                    //  a must to string the index or else not render the data
                    renderItem={ ({item, index}) => (
                        <Text>{index + 1}. {item.user} has booked the sauna at {item.time_slot}</Text>
                    )}
                />
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    });

export default ViewBookings