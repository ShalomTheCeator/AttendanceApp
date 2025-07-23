import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleLogin = async () => {
    if (name.trim().length === 0) {
      Alert.alert("Error", "Enter your name");
      return;
    }
    await AsyncStorage.setItem('username', name);
    navigation.replace('Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ marginBottom: 10 }}>Enter your name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="e.g. Shalom Peace"
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
