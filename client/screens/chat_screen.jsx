import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from '../services/firebase/config';

const DATA = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Hello!',
    date: '2023-06-09',
    image: require('../../assets/image.jpg'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    message: 'Hi there!',
    date: '2023-06-08',
    image: require('../../assets/_2_star_met_4.webp'),
  },
  {
    id: '3',
    name: 'Andrew Tate',
    message: 'Hi there!',
    date: '2023-06-08',
    image: require('../../assets/andrew-tate-and-the-incelislamist-nexus.jpg'),
  },
  {
    id: '4',
    name: 'Ahmed Bin Farooq',
    message: 'Hi there!',
    date: '2023-06-08',
    image: require('../../assets/Met-Gala-best-and-worst.webp'),
  },
  {
    id: '5',
    name: 'Smith Jani',
    message: 'Hi there!',
    date: '2023-06-08',
    image: require('../../assets/_2_star_met_4.webp'),
  },
  {
    id: '6',
    name: 'Jane Boy',
    message: 'Hi there!',
    date: '2023-06-08',
    image: require('../../assets/_2_star_met_4.webp'),
  },
];

const renderItem = ({ item }) => (
  <TouchableOpacity style={ styles.contactContainer }>
    <Image style={ styles.profileImage } source={ item.image } />
    <View style={ styles.contactInfo }>
      <Text style={ styles.name }>{ item.name }</Text>
      <Text style={ styles.message }>{ item.message }</Text>
      <Text style={ styles.date }>{ item.date }</Text>
    </View>
  </TouchableOpacity>
);

const ChatScreen = () => {
  var user = FIREBASE_AUTH.currentUser;

  return (
    <View style={ styles.container }>
      <View style={ styles.userContainer }>
        <Image style={ styles.profileImage } source={ require('../../assets/_2_star_met_4.webp') } />
        <Text style={ styles.userName }>{ user.displayName }</Text>
      </View>
      <FlatList
        data={ DATA }
        renderItem={ renderItem }
        keyExtractor={ (item) => item.id }
        contentContainerStyle={ styles.listContainer }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263151',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactInfo: {

    width: '75%',
    alignSelf: 'center',

  },
  name: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  message: {
    color: 'white',
    fontSize: 12,
  },
  date: {
    marginTop: 15,
    position: 'absolute',
    right: 0,
    color: 'white',
    fontSize: 10,
  },
});

export default ChatScreen;
