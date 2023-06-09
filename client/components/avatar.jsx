import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Avatar = ({ imageUrl }) => {
    const renderContent = () => {
        if (imageUrl) {
            return <Image source={ { uri: imageUrl } } style={ styles.avatar } />;
        } else {
            return <Icon name="user" size={ 50 } color="#F4E094" />;
        }
    };

    return <View style={ styles.container }>{ renderContent() }</View>;
};

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 120,
        borderRadius: 60,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8BB7F0',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
});

export default Avatar;
