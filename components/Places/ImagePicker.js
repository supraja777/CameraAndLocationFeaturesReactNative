import { View, Button, Alert } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

function ImagePicker() {
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
    console.log("image ", image);
  }
  return (
    <View>
      <View></View>
      <Button title="Take photo" onPress={imageHandler} />
    </View>
  );
}

export default ImagePicker;
