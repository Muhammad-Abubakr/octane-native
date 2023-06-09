import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Heading from '../components/heading';
import ExpandableDropdown from '../components/expandable-dropdown';
import Indicator from '../components/indicator';

const ResultsScreen = ({ route, navigation }) => {
    const { appDetail } = route.params;
    const { label, packageName, icon } = appDetail;

    return (
        <View style={ styles.scrollViewContainer }>
            <ScrollView contentContainerStyle={ styles.container }>
                {/* App Details */ }
                <View style={ styles.appDetail }>
                    <View style={ styles.iconContainer }>
                        <Image source={ { uri: `data:image/png;base64,${icon}` } } style={ styles.icon } />
                    </View>
                    <View style={ styles.textContainer }>
                        <Text style={ styles.name }>{ label }</Text>
                        <Text style={ styles.packageName }>{ packageName }</Text>
                    </View>
                </View>

                <View>
                    <ExpandableDropdown
                        style={ styles.severe }
                        title={ '0 found' }
                        content={ <Text style={ { color: 'lightgrey' } }>Nothing to show here for the moment!</Text> }
                    />
                    <ExpandableDropdown
                        style={ styles.moderate }
                        title={ '0 found' }
                        content={ <Text style={ { color: 'lightgrey' } }>Nothing to show here for the moment!</Text> }
                    />
                    <ExpandableDropdown
                        style={ styles.contested }
                        title={ '0 found' }
                        content={ <Text style={ { color: 'lightgrey' } }>Nothing to show here for the moment!</Text> }
                    />
                    <ExpandableDropdown
                        style={ styles.normal }
                        title={ '0 found' }
                        content={ <Text style={ { color: 'lightgrey' } }>Nothing to show here for the moment!</Text> }
                    />
                </View>

                {/* Overall Result */ }
                <View style={ styles.overallResult }>
                    <Heading text={ 'Overall Result' } />
                    <Indicator size={ 32 } />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        backgroundColor: '#263151',
        paddingHorizontal: '5%',
    },
    container: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    severe: {
        backgroundColor: '#642A48',
        borderWidth: 1,
        borderColor: '#ED1833',
    },

    moderate: {
        backgroundColor: '#664E3F',
        borderWidth: 1,
        borderColor: '#F48F18',
    },

    contested: {
        backgroundColor: '#5C6E3F',
        borderWidth: 1,
        borderColor: '#D6F418',
    },

    normal: {
        backgroundColor: '#376C40',
        borderWidth: 1,
        borderColor: '#5FF418',
    },

    appDetail: {
        alignItems: 'center',
    },
    iconContainer: {
        marginBottom: 10,
    },
    icon: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    textContainer: {
        width: '60%',
    },
    name: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    packageName: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
    },
    overallResult: {
        alignItems: 'center',
    },
});

export default ResultsScreen;
