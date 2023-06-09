import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ExpandableDropdown = ({ title, content, style }) => {
    const [ expanded, setExpanded ] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={ [ styles.container, style ] }>
            <TouchableOpacity style={ styles.titleContainer } onPress={ toggleExpand }>
                <Text style={ styles.title }>{ title }</Text>
                <Icon name={ expanded ? 'caret-up' : 'caret-down' } size={ 20 } color="lightgrey" />

            </TouchableOpacity>
            { expanded && <View style={ styles.contentContainer }>{ content }</View> }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    titleContainer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: 'lightgrey',
        fontWeight: 'bold',
        marginRight: 8,
    },
    contentContainer: {
        padding: 16,
    },
});

export default ExpandableDropdown;
