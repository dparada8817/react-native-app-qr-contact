import React, { useState, useEffect } from 'react';
import { View, Text,StyleSheet, ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ContactosScreen() {
  const [contactos, setContactos] = useState([]);


  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContactos(data);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView>
        {contactos.map((contacto) => <Text key={contacto.key}>{contacto.name}</Text>)}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10
  },
});
