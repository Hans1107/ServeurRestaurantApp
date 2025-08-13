import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StatusBar } from "react-native";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import ServeurConnexion from '../../../assets/images/ServeurConnexion.svg';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* Illustration SVG */}
      <ServeurConnexion width={275} height={267} style={styles.image} />

      {/* Champ Nom d'utilisateur */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#606060"
          style={styles.icon}
        />
        <TextInput
          placeholder="Nom d'utilisateur"
          style={styles.input}
          placeholderTextColor="#717171"
        />
      </View>

      {/* Champ Mot de passe */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#606060"
          style={styles.icon}
        />
        <TextInput
          placeholder="Mot de passe"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#717171"
        />
        <Ionicons
          name="eye-off-outline"
          size={20}
          color="#606060"
          style={styles.icon}
        />
      </View>

      {/* Bouton Se connecter */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      {/* Mot de passe oublié */}
      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start", // commence depuis le haut
        paddingHorizontal: 20,
        paddingTop: 130, // ajuste la hauteur selon ton besoin
    },
  image: {
    width: 275,
    height: 267,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FCC20D",
    paddingVertical: 15,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotContainer: {
    marginTop: 15,
    width: "100%",
    alignItems: "flex-end",
  },
  forgotText: {
    color: "#007BFF",
    fontSize: 14,
    textAlign: "right",
    fontStyle: "italic",
  },
});
