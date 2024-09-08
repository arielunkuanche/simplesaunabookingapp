import { Tabs } from 'expo-router';
import React from 'react';
import TabBar from '../components/TabBar'
import { Ionicons } from '@expo/vector-icons';


const _layout = () => {

    return (
        <Tabs 
            tabBar={ props => <TabBar {...props} /> } 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'booking') {
                        iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
                    } else if (route.name === 'viewBookings') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    }
        
                    return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
            <Tabs.Screen 
            name='index'
            options={{
            title: 'Home'
            }}
        />
            <Tabs.Screen 
                name='booking'
                options={{
                title: 'Booking'
                }}
            />
            <Tabs.Screen 
                name='viewBookings'
                options={{
                title: 'ViewBookings',
                }}
            />
        </Tabs>
    );
}

export default _layout