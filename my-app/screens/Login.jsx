import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const Login = ({ onSignupPress }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      style={styles.image}
      source={{ uri: 'https://t3.ftcdn.net/jpg/07/09/12/64/240_F_709126472_IQSS8uBXXZvXADGkSXUEFw5ktUZ7HLjY.jpg' }}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button title="Login" onPress={handleLogin} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Signup" onPress={onSignupPress} />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%', 
    padding: 16,
    backgroundColor: 'white', 
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  buttonContainer: {
    marginTop: 16, // Add margin to the top of the button container
  },
  buttonWrapper: {
    marginBottom: 10, // Adjust the gap between the buttons
  },
});

export default Login;
