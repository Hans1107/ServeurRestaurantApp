import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderLayout({ onMenuPress, onProfilePress, onNotificationPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={24} color="#424242" />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onProfilePress}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileLetter}>P</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onNotificationPress}>
          <Ionicons name="notifications" size={24} color="#424242" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  profileLetter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
