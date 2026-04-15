import React, { useState } from "react";
import { Button,  View, StyleSheet, Text, ScrollView, Pressable, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker';

export default function SignUpScreen() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
    var result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

  // Alert.alert("Message",result);

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
    };
  return (
    
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontent}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Create Account</Text>
          <Text style={styles.subTitles}>Fill in the information below to create your account.</Text>
        </View>
        <View>
            <View>
              <Pressable onPress={pickImage}>
                {image? (
                  <Image source={{uri: image}} />
                ) : (
                  <View>
                    <Text>+</Text>
                    <Text>Add Image</Text>
                  </View>
                )}                
              </Pressable>
            </View>
        </View>
      </ScrollView>
      
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollcontent: {
    flexGrow: 1,
  },
  header: {
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitles: {
    fontSize: 14,
    color: '#666',
  },
}); 
