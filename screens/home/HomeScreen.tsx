import React from 'react';
import { Text, View, Button, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';

export default function HomeScreen ({ navigation }) {

    const onContactos= () => {
        navigation.navigate("Contactos");
    }
    const onQr = () => {
        navigation.navigate("Qr");
    }

        return (
            <View style={styles.container}>
                <Button onPress={() => { onContactos() }} title="Lista Contactos" />
                <Button onPress={() => { onQr() }} title="Qr" />
            </View>)
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});
