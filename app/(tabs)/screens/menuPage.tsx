import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderLayout from '../../../components/HeaderLayout';
import BottomNavLayout from '../../../components/BottomNavLayout';
import CommandePagnie from '../../../assets/images/commandePagnie.svg';

// Images pour les catégories
const categoryImages = {
  Burger: require('../../../assets/images/burger.png'),
  Pizza: require('../../../assets/images/burger.png'),
  Salade: require('../../../assets/images/burger.png'),
  Jus: require('../../../assets/images/burger.png'),
  Gateau: require('../../../assets/images/burger.png'),
  Poulet: require('../../../assets/images/burger.png'),
};

// Images pour les plats populaires
const popularItemImages = {
  Burger: require('../../../assets/images/Salade.jpg'),
  Pizza: require('../../../assets/images/pouletFour.jpg'),
  Salade: require('../../../assets/images/jusAnanas.jpg'),
};

export default function MenuPage() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [popularItems, setPopularItems] = React.useState([
        { name: 'Salade', price: '8000 FCFA', image: popularItemImages.Burger, quantity: 1 },
        { name: 'Poulet entier', price: '10000 FCFA', image: popularItemImages.Pizza, quantity: 1 },
        { name: 'Ailes de poulet', price: '1500 FCFA', image: popularItemImages.Salade, quantity: 1 },
    ]);

    const categories = [
        { name: 'Burger', image: categoryImages.Burger },
        { name: 'Pizza', image: categoryImages.Pizza },
        { name: 'Salade', image: categoryImages.Salade },
        { name: 'Jus', image: categoryImages.Jus },
        { name: 'Gâteau', image: categoryImages.Gateau },
        { name: 'Poulet', image: categoryImages.Poulet },
    ];

    const handleIncrement = (index: number) => {
        const newItems = [...popularItems];
        newItems[index].quantity += 1;
        setPopularItems(newItems);
    };

    const handleDecrement = (index: number) => {
        const newItems = [...popularItems];
        if (newItems[index].quantity > 1) {
            newItems[index].quantity -= 1;
            setPopularItems(newItems);
        }
    };

    return (
        <View style={styles.container}>
            <HeaderLayout
                onMenuPress={() => console.log("Menu")}
                onProfilePress={() => console.log("Profil")}
                onNotificationPress={() => console.log("Notif")}
            />
            
            {/* Contenu fixe (non scrollable) */}
            <View style={styles.fixedContent}>
                {/* Barre de recherche et icône */}
                <View style={styles.searchZone}>
                    <View style={styles.searchContainer}>
                        <Ionicons
                            name="search"
                            size={20}
                            color="#000"
                            style={styles.searchIcon}
                        />
                        <TextInput
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            style={styles.searchInput}
                            placeholder="Recherche..."
                            placeholderTextColor="#999"
                        />
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <CommandePagnie width={26} height={26} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* Catégories avec images */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Catégories</Text>
                        <TouchableOpacity style={styles.seeMoreContainer}>
                            <Text style={styles.seeMore}>Voir plus</Text>
                            <Ionicons name="chevron-down" size={16} color="#000" />
                        </TouchableOpacity>
                    </View>
                    
                    <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false} 
                        style={styles.categoryContainer}
                        contentContainerStyle={styles.categoryContentContainer}
                    >
                        {categories.map((category, index) => (
                            <TouchableOpacity key={index} style={styles.categoryItem}>
                                <View style={styles.categoryImageContainer}>
                                    <Image
                                        source={category.image}
                                        style={styles.categoryImage}
                                        resizeMode="contain"
                                    />
                                </View>
                                <Text style={styles.categoryText}>{category.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Populaires</Text>
                    <TouchableOpacity style={styles.seeMoreContainer}>
                        <Text style={styles.seeMore}>Voir plus</Text>
                        <Ionicons name="chevron-down" size={16} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            
            {/* Section scrollable des plats seulement */}
            <ScrollView 
                style={styles.scrollableContent}
                contentContainerStyle={styles.scrollableContentContainer}
            >
                {popularItems.map((item, index) => (
                    <View key={index} style={styles.singleItemContainer}>
                        <Image
                            source={item.image}
                            style={styles.itemImage}
                            resizeMode="cover"
                        />
                        
                        <View style={styles.itemDetails}>
                            <View style={styles.textAndQuantityContainer}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemPrice}>{item.price}</Text>
                                </View>
                                
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity
                                        style={styles.quantityButton}
                                        onPress={() => handleDecrement(index)}
                                    >
                                        <Text style={styles.quantityButtonText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.quantityText}>{item.quantity}</Text>
                                    <TouchableOpacity 
                                        style={styles.quantityButton}
                                        onPress={() => handleIncrement(index)}
                                    >
                                        <Text style={styles.quantityButtonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                            <TouchableOpacity style={styles.addButtonContainer}>
                                <View style={styles.addButton}>
                                    <Text style={styles.addButtonText}>AJouter à la commande</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
            
            <BottomNavLayout onTabPress={(tab: string) => console.log("Onglet:", tab)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    fixedContent: {
        paddingHorizontal: 16,
    },
    scrollableContent: {
        flex: 1,
    },
    scrollableContentContainer: {
        paddingHorizontal: 16,
        paddingBottom: 80,
    },
    searchZone: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 5,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        borderWidth: 0.3,
        borderColor: '#000',
        paddingHorizontal: 15,
        height: 45,
        marginRight: 15,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
    },
    searchInput: {
        flex: 1,
        height: 45,
        fontSize: 15,
        marginLeft: 8,
        fontWeight: '500',
    },
    searchIcon: {
        marginRight: 5,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingHorizontal: 5,
    },
    seeMore: {
        color: '#000',
        fontSize: 14,
        marginRight: 5,
    },
    seeMoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryContainer: {
        marginBottom: 8,
    },
    categoryContentContainer: {
        paddingHorizontal: 5,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 15,
        width: 80,
    },
    categoryImageContainer: {
        width: 83,
        height: 83,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        borderRadius: 50,
    },
    categoryImage: {
        width: '70%',
        height: '70%',
    },
    categoryText: {
        fontSize: 14,
        textAlign: 'center',
    },
    singleItemContainer: {
        width: '105%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginBottom: 15,
        padding: 10,
    },
    itemImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    itemDetails: {
        marginTop: 10,
        width: '100%',
    },
    textAndQuantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    textContainer: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 16,
        color: '#FCC20D',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',  
        borderRadius: 50,         
        paddingHorizontal: 10,    
        paddingVertical: 5,       
        },
    quantityButton: {
        width: 30,
        height: 30,
        backgroundColor: '#fff', 
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    quantityText: {
        marginHorizontal: 15,
        fontSize: 16,
        color: '#000',           
    },
    addButtonContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    addButton: {
        backgroundColor: '#FCC20D',
        borderRadius: 30,
        paddingVertical: 10,
        width: 190,
        height: 40,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
});