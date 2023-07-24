import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { Colors } from '../contants';
import { Separator } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-forward-circle-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Sign In</Text>
      </View>
      <Text>Welcome home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
