import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import React from "react";
import { StyleSheet } from "react-native";

// copied from https://shopify.github.io/react-native-skia/docs/shapes/path#using-path-object
const path = Skia.Path.Make();
path.moveTo(128, 0);
path.lineTo(168, 80);
path.lineTo(256, 93);
path.lineTo(192, 155);
path.lineTo(207, 244);
path.lineTo(128, 202);
path.lineTo(49, 244);
path.lineTo(64, 155);
path.lineTo(0, 93);
path.lineTo(88, 80);
path.lineTo(128, 0);
path.close();

export const SketchCanvasWithoutInteraction = () => {
  return (
    <Canvas style={style.container}>
      <Path path={path} color={"black"} style={"stroke"} strokeWidth={2} />
    </Canvas>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
