import React, { useState } from 'react';
import { View, Text,StyleSheet, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-generator';

export default function QrGeneradorScreen() {
    const [textoQr, setTextoQr] = useState('');


    const setTexto = (texto:string) => {
        setTextoQr(texto)
    }

    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(texts) =>setTexto(texts)}
            value={textoQr}
          />
          <QRCode
            value={textoQr}
            size={200}
            bgColor='black'
            fgColor='white'/>
        </View>
      );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height:100,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});