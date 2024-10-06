import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import className from 'twrnc'
import InviteBtn from './InviteBtn' // Import InviteBtn

interface NearBikeListTileProps {
  riderName: string // Rider's name
  distance: string // Distance from the user
  imageSource: any // Rider's image
  onInvitePress: () => void // Invite button callback
}

const NearBikeListTile: React.FC<NearBikeListTileProps> = ({
  riderName,
  distance,
  imageSource,
  onInvitePress
}) => {
  return (
    <View style={className`w-full py-2`}>
      <View
        style={className`flex-row bg-[#F9F9F9] py-4 px-3 w-full rounded-lg items-center`}
      >
        {/* Image Section */}
        <View
          style={className`w-[35px] h-[35px] rounded-full justify-center items-center`}
        >
          <Image
            source={imageSource}
            style={className`w-35px h-25px rounded-full`}
            resizeMode='cover'
          />
        </View>

        {/* Biker Details Section */}
        <View style={className`flex-1 px-3`}>
          <Text style={className`text-gray-800 text-[12px] font-semibold`}>
            {riderName} wants to connect
          </Text>
          <Text style={className`text-gray-600 text-xs`}>{distance}</Text>
        </View>

        {/* Invite Button */}
        <InviteBtn onPress={onInvitePress} />
      </View>
    </View>
  )
}

export default NearBikeListTile
