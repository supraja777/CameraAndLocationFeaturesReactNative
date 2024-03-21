import { View, Button, Alert, Image, Text, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/Colors";
import OutlineButton from "../UI/OutlineButton";

function ImagePicker() {
  const [image, setImage] = useState(null);
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function imageHandler() {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    async function verifyPermission() {
      if (
        cameraPermissionInformation.status === PermissionStatus.UNDETERMINED
      ) {
        const permissionRequest = await requestPermission();

        return permissionRequest.granted;
      }

      if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
        Alert.alert(
          "Insufficient permissions",
          "Please grant camera permission"
        );
        return false;
      }

      return true;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImage(image.uri);
  }

  let imagePreview = <Text>No image taken yet</Text>;

  if (image) {
    imagePreview = <Image style={styles.image} src={{ uri: image }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlineButton icon="camera" onPress={imageHandler} >Take photo</OutlineButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
