import {
  View,
  Text,
  ButtonProps,
  TouchableOpacity,
  Dimensions,
  TextInputProps,
  KeyboardTypeOptions,
  TextInput,
} from "react-native";
import React from "react";
const { width } = Dimensions.get("window");

interface CustomInputProps extends TextInputProps {
  placeHolder: string;
  placeholderTextColor: string;
  keyboardType?: KeyboardTypeOptions;
  inputClassName?: string;
}

const CustomInput = ({
  placeHolder,
  placeholderTextColor,
  keyboardType,
  inputClassName,
}: CustomInputProps) => {
  return (
    <TextInput
      placeholder={placeHolder}
      className={`h-[56px] bg-[#F3F3F3] rounded-[8px] px-4 text-[16px] mb-[16px] w-full ${inputClassName} placeholder:font-rubik-medium`}
      style={{ width: width > 400 ? 400 : width - 48 }}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
      autoCapitalize="none"
    />
  );
};

export default CustomInput;
