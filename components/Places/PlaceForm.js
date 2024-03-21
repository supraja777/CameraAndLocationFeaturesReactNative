import { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState();
  const [pickedLocation, setPickedLocation] = useState();
  const [selectedImage, setSelectedImage] = useState();

  function changeEnteredTitle(title) {
    setEnteredTitle(title);
  }
  function savePlace() {
    console.log(enteredTitle, selectedImage, pickedLocation)
  }

  function ImageTakenHandler(imageUri) {
    setSelectedImage(imageUri)
  }

  function LocationPickedHandler(location) {
    setPickedLocation(location)
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.labels}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeEnteredTitle}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onImageTaken={ImageTakenHandler} />
      <LocationPicker onLocationPicked={LocationPickedHandler} />
      <Button onPress={savePlace}>Submit</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  labels: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary700,
  },
  input: {
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
