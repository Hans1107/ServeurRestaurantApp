import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import HouseIcon from '../assets/images/House_01.svg';
import MenuIcon from '../assets/images/menu.svg';
import NewCommandeIcon from '../assets/images/newCommande.svg';
import CalendarCheckIcon from '../assets/images/Calendar_Check.svg';
import CommandeIcon from '../assets/images/commande.svg';

export default function BottomNavLayout({ onTabPress }) {
  const tabs = [
    { key: 'Accueil', icon: HouseIcon },
    { key: 'Menu', icon: MenuIcon },
    { key: 'Nouvelle commande', icon: NewCommandeIcon },
    { key: 'Historique', icon: CalendarCheckIcon },
    { key: 'Commande', icon: CommandeIcon },
  ];

  return (
    <View style={styles.navbar}>
      {tabs.map((tab, idx) => (
        <TouchableOpacity
          key={tab.key}
          onPress={() => onTabPress(tab.key)}
          style={[styles.iconWrapper, idx === 2 && styles.middleIconWrapper]}
        >
          {tab.icon ? (
            <tab.icon width={idx === 2 ? 38 : 26} height={idx === 2 ? 38 : 26} />
          ) : (
            <Text>{tab.key}</Text>
          )}
          {idx !== 2 && (
            <Text style={styles.iconLabel}>{tab.key}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  iconWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    minWidth: 40,
    paddingHorizontal: 4,
  },
  middleIconWrapper: {
    flex: 0,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginTop: -12,
    flexDirection: 'column',
    zIndex: 1,
  },
  iconLabel: {
    fontSize: 11,
    color: '#606060',
    marginTop: 2,
    textAlign: 'center',
  },
});
