import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import className from 'twrnc';
import { Link, Href } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Example icon library

interface CustomButtonProps {
  fillColor?: string;
  borderColor?: string;
  textColor?: string;
  text?: string;
  href: Href<string | object>;
  icon?: React.ReactNode; // Optional icon prop
}

const { width } = Dimensions.get('window');

const CustomButton: React.FC<CustomButtonProps> = ({
  fillColor = 'bg-[#705AFD]',
  borderColor = 'border-blue-700',
  textColor = 'text-white',
  text = 'Button',
  href,
  icon,
}) => {
  const buttonHeight = 50; // Fixed height for the button
  const buttonPadding = 5; // Fixed padding for text

  return (
    <Link href={href} asChild>
      <TouchableOpacity>
        <View
          style={className`flex flex-row items-center w-full mb-[2%] justify-center ${fillColor} ${borderColor} border rounded h-[${buttonHeight}px] p-[${buttonPadding}px]`}
        >
          {icon && <View style={className`mr-2 mt-0.5r p-0`}>{icon}</View>}
          <Text style={className`${textColor} text-sm`}>{text}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default CustomButton;
