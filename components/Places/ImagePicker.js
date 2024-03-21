import { View, Button } from "react-native";
import {launchCameraAsync} from "expo-image-picker"

function ImagePicker() {
  async function imageHandler() {
    const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16,9],
        quality: 0.5
    })
    console.log(image)
  }
  return (
    <View>
      <View></View>
      <Button title="Take photo" onPress={imageHandler} />
    </View>
  );
}

export default ImagePicker;
