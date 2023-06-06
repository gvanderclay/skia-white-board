import { SafeAreaView, StyleSheet } from "react-native";
import { SketchCanvasWithInteraction } from "./src/canvas-with-interactivity";
import { SketchCanvasWithoutInteraction } from "./src/canvas-without-interactivity";
import { SketchCanvasWithInteractionAndCustomization } from "./src/canvas-with-interactivity-and-customizability";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SketchCanvasWithInteractionAndCustomization />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
