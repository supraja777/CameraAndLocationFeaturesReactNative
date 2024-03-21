import { StyleSheet, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/Colors";

function LocationPicker() {
  function getLocationHandler() {}

  function pickOnMap() {}
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlineButton icon="location" onPress={getLocationHandler}>Locate User</OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMap}>Pick on Map</OutlineButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
