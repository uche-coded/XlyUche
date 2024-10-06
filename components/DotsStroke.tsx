// import { View, Text } from 'react-native'
// import React from 'react'
// import className from 'twrnc'

// interface CustomDotsProps {
//   fillColor1?: string
//   fillColor2?: string
//   fillColor3?: string
// }

// const DotsStroke: React.FC<CustomDotsProps> = ({
//   fillColor1 = 'bg-gray-300',
//     fillColor2 = 'bg-gray-300',
//       fillColor3 = 'bg-gray-300'
// }) => {
//   return (
//     <View style={className`flex-row justify-center items-center mb-5 gap-1.5`}>
//       <View style={className`h-0.5 w-[32%] ${fillColor1}`}></View>
//       <View style={className`h-0.5 w-[32%] ${fillColor2}`}></View>
//       <View style={className`h-0.5 w-[32%] ${fillColor3}`}></View>
//     </View>
//   )
// }

// export default DotsStroke


import { View, Dimensions } from 'react-native';
import React from 'react';
import className from 'twrnc';

interface CustomDotsProps {
  fillColor1?: string;
  fillColor2?: string;
  fillColor3?: string;
}

const { width } = Dimensions.get('window');

const DotsStroke: React.FC<CustomDotsProps> = ({
  fillColor1 = 'bg-gray-300',
  fillColor2 = 'bg-gray-300',
  fillColor3 = 'bg-gray-300',
}) => {
    const cardPadding = 25; // Fixed padding
  const dotWidth = width * 0.3 - 7; // Adjust dot width to be responsive (30% of screen width)

  return (
    <View style={className`flex-row justify-center items-center mb-2 gap-1.9 ` }>
      <View style={className`h-0.5 w-[${dotWidth}px] ${fillColor1}`}></View>
      <View style={className`h-0.5 w-[${dotWidth}px] ${fillColor2}`}></View>
      <View style={className`h-0.5 w-[${dotWidth}px] ${fillColor3}`}></View>
    </View>
  );
};

export default DotsStroke;
