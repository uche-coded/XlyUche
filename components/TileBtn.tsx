import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import className from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

interface TileBtnProps {
  leadingTxt: string // Rider's name
  dscTxt: string // Distance from the user
  onPress: () => void // Function that triggers when the tile is pressed
}

const TileBtn: React.FC<TileBtnProps> = ({ leadingTxt, dscTxt, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={className`w-full py-2`}>
      <View
        style={className`flex-row bg-[#F9F9F9] py-4 px-3 w-full rounded-lg items-center`}
      >
        {/* Image Section */}
        <View
          style={className`w-[35px] h-[35px] rounded-full justify-center items-center`}
        >
          <Image
            source={require('../assets/images/tick-circle.png')}
            style={className`w-25px h-25px rounded-full`}
            resizeMode='cover'
          />
        </View>

        {/* Biker Details Section */}
        <View style={className`flex-1 px-3`}>
          <Text style={className`text-gray-800 text-[12px] font-semibold`}>
            {leadingTxt}
          </Text>
          <Text style={className`text-gray-600 text-xs`}>{dscTxt}</Text>
        </View>

        {/* Forward Arrow Icon */}
        <Ionicons name='chevron-forward' size={24} color='#6200ea' />
      </View>
    </TouchableOpacity>
  )
}

export default TileBtn
