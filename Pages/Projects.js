import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import Avatar from '../Styles/Styles.js';
import React from 'react';
import ProjectDescription from '../Components/projectDescription.js';
import { StyleSheet } from 'react-native-web';

export default function ProjectsScreen() {
  return (
    <View>
    
      <ProjectDescription
        title=" Network Simulation"
        githubLink="https://github.com/adityasugandhi/Network-Simulation"
        description={`Clearly state the project's objectives and what you aim to achieve through network simulation.
        Simulation Tool:
        Explain why you chose the simulation tool you used. If you used a tool other than the ones we have used in class, explain why you chose that tool. If you used a tool that we have used in class, explain why you chose that tool over the other tools we have used in class.
        Outline how you will analyze the simulation results and draw conclusions based on the performance metrics.`}/>

      <StatusBar style="auto" />
    </View>
    

  );
}