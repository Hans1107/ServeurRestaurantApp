import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import HeaderLayout from '../../../components/HeaderLayout';
import BottomNavLayout from '../../../components/BottomNavLayout';

export default function HomePage() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <HeaderLayout
        onMenuPress={() => console.log("Menu")}
        onProfilePress={() => console.log("Profil")}
        onNotificationPress={() => console.log("Notif")}
      />

      {/* CONTENU */}
      <ScrollView style={styles.content}>
        <Text style={styles.welcome}>Bonjour Paul!</Text>

        {/* Mes tables */}
        <Text style={styles.sectionTitle}>Mes Tables</Text>
        <View style={styles.tableContainer}>
          {["Table 1", "Table 2", "Table 3", "Table 4"].map((table) => (
            <TouchableOpacity key={table} style={styles.tableBtn}>
              <Text style={styles.tableText2}>{table}</Text>
              <Text style={styles.tableText}>Libre/Occuper</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Activité du jour */}
        <Text style={styles.sectionTitle}>Activité du jour</Text>
        <View style={styles.activityContainer}>
          <TouchableOpacity style={styles.activityBox}>
            <Text style={styles.activityText}>Commandes : 20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activityBox}>
            <Text style={styles.activityText}>Livrées : 15</Text>
          </TouchableOpacity>
        </View>

        {/* Notifications */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.notifBox}>
          <Text>Nouvelle commande reçue</Text>
        </View>
      </ScrollView>

      {/* NAVBAR */}
      <BottomNavLayout onTabPress={(tab: string) => console.log("Onglet:", tab)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 20 },
  welcome: { fontSize: 34, fontWeight: 'bold',fontFamily: '../assets/fonts/JetBrainsMono-VariableFont_wght.ttf', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tableBtn: {
    backgroundColor: '#424242',
    padding: 15,
    borderRadius: 8,
    width: 164,
    height: 75,
    marginBottom: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  tableText: { color: '#fff', fontSize: 16,fontWeight: 'light', fontFamily: 'Roboto_Regular' },
  tableText2: { color: '#fff', fontSize: 15, fontWeight: 'bold', fontFamily: 'Roboto_Regular', marginBottom: 10},
  activityContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  activityBox: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 8,
    elevation: 2
  },
  activityText: { fontSize: 14 },
  notifBox: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5
  }
});
