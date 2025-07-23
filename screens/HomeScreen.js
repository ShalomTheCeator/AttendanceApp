import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const name = await AsyncStorage.getItem('username');
      setUsername(name);
    };
    getUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {username}!</Text>
      <Button title="Go to Attendance" onPress={() => navigation.navigate('Attendance')} />
    </View>
  );
}
