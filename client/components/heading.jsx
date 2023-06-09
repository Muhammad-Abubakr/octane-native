import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Heading = ({ text }) => {
    return <Text style={ styles.heading }>{ text }</Text>;
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: '400',
        marginBottom: 16,
        marginTop: 8,
        color: 'white',
    },
});

export default Heading;
