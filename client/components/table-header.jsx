import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableHeader = ({ columns }) => {
    return (
        <View style={ styles.container }>
            { columns.map((column, index) => (
                <Text key={ index } style={ styles.headerText }>
                    { column }
                </Text>
            )) }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 8,
        justifyContent: 'space-between',
    },
    headerText: {
        flex: 0,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default TableHeader;
