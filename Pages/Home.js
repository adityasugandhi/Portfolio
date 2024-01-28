import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import Avatar from '../Styles/Styles.js';
import { NavigationContainer } from "@react-navigation/native";
import ProjectsScreen from './Projects.js';
import React from 'react';
import { Button } from 'react-native-web';


export default function HomeScreen({navigation}) {
  return (
    <View style={Avatar.container}>
      <Image style={Avatar.avatar} source={require('../assets/Avatar/Avatar.jpg')}  />
      <Text style={Avatar.title}>Aditya Sugandhi</Text>
      <Text style={Avatar.subtitle}>I 'm  a Software Engineer</Text>
      <Button title="View my projects" onPress={() => navigation.navigate('Projects')} />
      <StatusBar style="auto" />
    </View>
    

  );
}