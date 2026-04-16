import React, { useState } from "react";
import { Button,  View, StyleSheet, Text, ScrollView, Pressable, Alert, Image, TextInput } from "react-native";
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

        <View style={styles.form}>
            <View style={styles.imageContainer}>
              <Pressable onPress={pickImage} style={styles.imageUploader}>
                {image? (
                  <Image source={{uri: image}} style={styles.profileImage} />
                ) : (
                  <View style={styles.imagePlaceholder}>
                    <Text style={styles.imageText}>+</Text>
                    <Text style={styles.imageLable}>Add Image</Text>
                  </View>
                )}                
              </Pressable>
            </View>

            <View>
              <Text>Full Name</Text>
              <TextInput placeholder="Insert your full name"/>
            </View>
        </View>
      </ScrollView>
      
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollcontent: {
    flexGrow: 1,
    padding: 40,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10, 
  },
  subTitles: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  form: {
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  imageUploader: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#dddddd',
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  imageText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#666',
  },
  imageLable: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  imagePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
