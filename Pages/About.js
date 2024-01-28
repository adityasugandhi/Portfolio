import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Stack from '.,/App.js';



const About = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};
export default About;


const AboutScreen = () => {
    return (
        <View>
            <Text>About</Text>
        </View>
    );
}