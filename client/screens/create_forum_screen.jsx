import { useState } from 'react';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const ForumScreen = () => {

  const [ forumHeading, setForumHeading ] = useState('');
  const [ forumContent, setForumContent ] = useState('');

  return (
    <View style={ styles.appContainer }>
      <View>
        <Image
          style={ styles.img }
          source={ require('../../assets/Ellipse 21.png') }
        />
      </View>

      <View style={ styles.contentContainer }>
        <Text style={ styles.headingText }>Forum Heading</Text>
        <TextInput style={ styles.forumHeading }
          placeholder="Enter Forum Heading"
          value={ forumHeading }
          onChangeText={ setForumHeading } />
      </View>

      <View style={ styles.contentContainer }>
        <Text style={ styles.headingText }>Forum Content</Text>
        <TextInput style={ styles.forumContent }
          placeholder="Enter Forum Content"
          multiline
          editable
          value={ forumContent }
          onChangeText={ setForumContent }
          numberOfLines={ 4 } />
      </View>

      <View style={ styles.publishView }>
        <TouchableOpacity style={ {
          alignSelf: 'center', borderWidth: 2, padding: '3%',
          borderRadius: 10, borderColor: 'white',
        } }>
          <Text style={ { color: 'white', textAlign: 'center' } }>Publish</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#263151',
    flex: 1,
  },

  img: {
    marginTop: '3%',
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '30%',
    height: '30%',
  },

  headingText: {
    color: 'white',
    marginLeft: '5%',
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  forumHeading: {
    marginLeft: '5%',
    marginRight: '5%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    color: 'white',
  },

  forumContent: {
    marginLeft: '5%',
    marginRight: '5%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    textAlignVertical: 'top',
    color: 'white',
    marginBottom: '10%',
  },

  publishView: {
    flex: 1,

  },

});

export default ForumScreen;
