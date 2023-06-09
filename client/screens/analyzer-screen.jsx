import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Heading from '../components/heading';

const AnalyzerScreen = ({ route, navigation }) => {
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

                {/* Console */ }
                <View styles={ styles.consoleContainer }>
                    <View onTouchEnd={ (_) => navigation.replace('Results', { appDetail }) } style={ styles.console }>
                        <Heading text={ 'Console Output' } />
                    </View>
                </View>
                {/* Cancel Account */ }
                <View style={ styles.warning }>
                    <TouchableOpacity style={ styles.redBorder }>
                        <Button
                            onPress={ (_) => navigation.goBack() }
                            labelStyle={ styles.redButtonText }
                        >Cancel</Button>
                    </TouchableOpacity>
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

    consoleContainer: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    console: {
        backgroundColor: '#1C253E',
        borderRadius: 16,
        alignSelf: 'center',
        width: '85%',
        height: 300,
        alignItems: 'center',
    },
    warning: {
        flex: 0,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    },
    redBorder: {
        borderRadius: 8,
        borderColor: '#BA1F3B',
        borderWidth: 1,
        backgroundColor: '#452D4C',
    },
    redButton: {
        flex: 0,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    redButtonText: {
        color: '#BA1F3B',
    },

});

export default AnalyzerScreen;
