import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={sytle.screen}>
      <Title>GameScreen</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
}

const sytle = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})

export default GameScreen;
