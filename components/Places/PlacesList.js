import { FlatList, View, StyleSheet, Text } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/Colors";

function renderPlaces(itemData) {
  return <PlaceItem place={itemData} />;
}

function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>No places to display</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      renderItem={renderPlaces}
      keyExtractor={(item) => item.id}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallBackText: {
    color: Colors.primary200,
    fontSize: 16,
  },
});
