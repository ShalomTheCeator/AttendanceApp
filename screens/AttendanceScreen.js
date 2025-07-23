import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import { CLASSROOM_LOCATION, GEOFENCE_RADIUS } from '../config/classroomConfig';
import { isWithinGeofence } from '../utils/geofence';

export default function AttendanceScreen() {
  const [location, setLocation] = useState(null);

  const handleAttendance = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permission denied", "Enable location to mark attendance");
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);

    if (isWithinGeofence(loc.coords, CLASSROOM_LOCATION, GEOFENCE_RADIUS)) {
      Alert.alert("Success", "Attendance marked successfully");
    } else {
      Alert.alert("Error", "You're not in class");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Press to mark attendance</Text>
      <Button title="Mark Attendance" onPress={handleAttendance} />
    </View>
  );
}
