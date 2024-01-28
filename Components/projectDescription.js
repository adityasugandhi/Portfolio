import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';

const ProjectDescription = ({ title, githubLink, description }) => {
    const handleLinkPress = () => {
        Linking.openURL(githubLink);
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.link} onPress={handleLinkPress}>
                    {githubLink}
                </Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
    },
    box: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 5,
    },
    description: {
        marginTop: 10,
    },
});

export default ProjectDescription;



