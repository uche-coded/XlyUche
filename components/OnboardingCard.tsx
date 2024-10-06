import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import CustomButton from './CustomButton'
import DotsStroke from './DotsStroke'
import { Link, Href } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

interface OnboardingCardProps {
  title: string
  body: string
  btntxt1: string
  btntxt2: string
  fillColor1?: string
  fillColor2?: string
  fillColor3?: string
  href1: Href<string | object> // Adjust type to Href
  href2: Href<string | object> // Adjust type to Href
}


const OnboardingCard: React.FC<OnboardingCardProps> = ({
  title,
  body,
  btntxt1,
  btntxt2,
  fillColor1,
  fillColor2,
  fillColor3,
  href1,
  href2
}) => {
  // const [mainText, lastText] = title.split(' ').slice(0, -1).join(' '), title.split(' ').slice(-1).join(' ');


  const titleParts = title.split(' ');
  const mainText = titleParts.slice(0, -1).join(' ');
  const lastText = titleParts.slice(-1).join(' ');

  return (
    <View style={className`bg-gray-50 rounded-tl-2xl rounded-tr-2xl h-[45%] w-full p-5 absolute bottom-0 left-0 right-0 flex`}>
      <Text style={className`text-[30px] font-bold mb-2`}>
        {mainText}{' '}
        <Text style={className` text-[#705AFD]`}>{lastText}</Text> {/* Change color here */}
      </Text>
      <Text style={className`text-[14px] mb-4 font-normal leading-[1.5]`}>
        {body}
      </Text>

      <View style={className`flex-row justify-center items-center mb-4`}>
        <DotsStroke
          fillColor1={fillColor1}
          fillColor2={fillColor2}
          fillColor3={fillColor3}
        />
      </View>

      <CustomButton
        fillColor='bg-[#705AFD]'
        borderColor='border-[#705AFD]'
        textColor='text-white'
        text={btntxt1}

        href={href1}
      />

      <CustomButton
        fillColor='bg-white' // Default or dynamic color
        borderColor='border-[#705AFD]'
        textColor=' text-[#705AFD]'
        text={btntxt2}
        href={href2}
      />
    </View>
  );
}

export default OnboardingCard;


