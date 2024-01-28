import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from '../Pages/Home';
import ProjectsScreen from '../Pages/Projects';

const Navbar = ({ children }) => {
  const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => navigateTo({HomeScreen})}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo({ProjectsScreen})}>
          <Text style={styles.link}>Projects</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('About')}>
          <Text style={styles.link}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('WorkExperience')}>
          <Text style={styles.link}>Work Experience</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {/* Render the children content */}
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'flex-end',
    height: 50,
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
    height: '100%',
    width: '100%', // Adjust as needed
  },
});

export default Navbar;
