import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({ onLoginPress }) => {
  return (
    <View style={styles.view1}>
      <ImageBackground
        style={styles.image}
        source={{ uri: 'https://t3.ftcdn.net/jpg/07/09/12/64/240_F_709126472_IQSS8uBXXZvXADGkSXUEFw5ktUZ7HLjY.jpg' }}
      >
        <View>
          <Text style={styles.text}>Welcome</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    minHeight: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  view1: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  loginButton: {
    width: 100, 
    height: 50, 
    backgroundColor: '#33E6FF', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, 
  },
  loginButtonText: {
    color: 'white',
    fontSize: 30,
  },
});
