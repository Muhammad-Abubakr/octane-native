import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';
import TableHeader from '../components/table-header';
import Divider from '../components/divider';
import Tile from '../components/tile';
import { getApps, getSortedApps } from '../logic/installed-apps';
import Indicator from '../components/indicator';

const HistoryScreen = ({ navigation }) => {
    const [ sortingOption, setSortingOption ] = useState('Default');
    const apps = sortingOption === 'Default' ? getApps()._j : getSortedApps()._j;

    const handleSortingChange = (option) => {
        setSortingOption(option === 'Default' ? 'Default' : 'Sorted');
    };
    return (
        <View style={ styles.scrollViewContainer }>
            <ScrollView contentContainerStyle={ styles.container }>

                {/* Logo */ }
                <View style={ styles.logoContainer }>
                    <Text style={ styles.title }>OCTANE</Text>
                </View>

                {/* Applications table */ }
                <View>
                    <TableHeader columns={ [ 'Applications', 'Severity' ] } />
                    <Divider />
                </View>
                {/* Sorting Buttons */ }
                <View style={ styles.sortingContainer }>
                    <TouchableOpacity
                        style={ [ styles.sortingButton, {
                            backgroundColor: sortingOption === 'Default' ? 'white' : '#263151',
                        } ] }
                        onPress={ () => handleSortingChange('Default') }
                    >
                        <Text style={ [ styles.sortingButtonText, {
                            color: sortingOption !== 'Default' ? 'white' : '#263151',
                        } ] }>Default</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ [ styles.sortingButton, {
                            backgroundColor: sortingOption === 'Sorted' ? 'white' : '#263151',
                        } ] }
                        onPress={ () => handleSortingChange('Sorted') }
                    >
                        <Text style={ [ styles.sortingButtonText, {
                            color: sortingOption !== 'Sorted' ? 'white' : '#263151',
                        } ] }>Sorted</Text>
                    </TouchableOpacity>
                </View>


                {/* Applications Tiles */ }
                {
                    apps.slice(0, 60)
                        .map(e => <Tile
                            key={ Math.random() }
                            leadingIconBase64={ e.icon }
                            title={ e.label }
                            subtitle={ `Package name: ${e.packageName}` }
                            trailing={ <Indicator size={ 20 } /> }
                            onPress={ () => {
                                navigation.navigate('Analyzer', {
                                    appDetail: {
                                        label: e.label,
                                        packageName: e.packageName,
                                        icon: e.icon,
                                    },
                                });
                            } }
                        />)
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        backgroundColor: '#263151',
    },
    container: {
        flexGrow: 1,
    },
    logoContainer: {
        flex: 0,
        height: 160,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    sortingContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    sortingButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
    },
    sortingButtonText: {
        color: '#fff',
    },
    title: {
        fontFamily: 'Tomorrow-Regular',
        textAlign: 'center',
        color: 'white',
        fontSize: 32,
    },
});

export default HistoryScreen;
