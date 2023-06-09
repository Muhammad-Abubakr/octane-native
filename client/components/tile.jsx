import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

const Tile = ({ title, subtitle, leadingIconBase64, trailing, onPress }) => {
    return (
        <TouchableOpacity onPress={ onPress } style={ styles.container }>
            { leadingIconBase64 && (
                <View style={ styles.leadingImageContainer }>
                    <Image
                        source={ { uri: `data:image/png;base64,${leadingIconBase64}` } }
                        style={ styles.leadingImage }
                    />
                </View>
            ) }
            <View style={ styles.contentContainer }>
                <Text style={ styles.title }>{ title }</Text>
                { subtitle && <Text style={ styles.subtitle }>{ subtitle }</Text> }
                <Text style={ styles.subtitle }>Last Scanned: { (new Date()).toLocaleDateString() }</Text>
            </View>
            { trailing && <View style={ styles.trailingContainer }>{ trailing }</View> }
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    leadingImageContainer: {
        marginRight: 16,
    },
    leadingImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        paddingRight: 10,
    },
    trailingContainer: {
        marginLeft: 'auto',
    },
};

export default Tile;
