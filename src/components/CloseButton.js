import * as React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CloseButton({ onPress, ...props }) {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <AntDesign name="close" size={40} color="black" />
    </TouchableOpacity>
  );
}
