import React, { useState } from "react";
import { Button,  View, StyleSheet, Text, ScrollView, Pressable, Alert } from "react-native";
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
    
      <ScrollView>
        <View>
          <Text>Create Account</Text>
          <Text>Fill in the information below to create your account.</Text>
        </View>

        <View>

        </View>
      </ScrollView>
      
  );
}

 const styles = StyleSheet.create({
  
}); 
