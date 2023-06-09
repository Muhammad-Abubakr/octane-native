import React from 'react';
import { View } from 'react-native';

const Indicator = ({ size }) => {
    const getRandomColor = () => {
        const colors = [ '#F1040A', '#F29017', '#D5F218', '#63F116' ];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[ randomIndex ];
    };

    const backgroundColor = getRandomColor();

    return (
        <View
            style={ {
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: 1,
                borderColor: 'white',
                backgroundColor: backgroundColor,
            } }
        />
    );
};

export default Indicator;
