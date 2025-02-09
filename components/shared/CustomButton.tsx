import {
  View,
  Text,
  ButtonProps,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

interface CustomButtonProps extends ButtonProps {
  title: string;
  buttonClassName: string;
  icon?: React.ReactNode;
  textClassName?: string;
  buttonWidth?: number;
}
const CustomButton = ({
  title,
  onPress,
  buttonClassName,
  icon,
  textClassName,
  buttonWidth,
}: CustomButtonProps) => {
  return icon ? (
    <TouchableOpacity
      className={`h-[56px]  rounded-full px-5 gap-[12px] flex-row items-center ${buttonClassName}`}
      onPress={onPress}
      style={{ width: buttonWidth }}
    >
      {icon}
      <Text
        className={`flex-1 text-[16px] font-rubik-medium text-center mr-[24px] ${textClassName}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      className={` py-3 px-8 rounded-full items-center ${buttonClassName}`}
      onPress={onPress}
      style={{
        width: buttonWidth ? buttonWidth : width > 400 ? 400 : width - 48,
      }}
    >
      <Text
        className={`text-white text-[18px] font-rubik-extrabold ${textClassName}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
