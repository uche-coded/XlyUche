import React from 'react'
import { View } from 'react-native'
import { FAB } from 'react-native-paper'
import className from 'twrnc' // Import tw from twrnc

const ExtendedFAB = () => {
  return (
    <View style={className`flex-1 px-5 `}>
      {/* FAB at bottom-right corner */}
      <FAB
        style={className`absolute bottom-12  bg-[#6200ea] w-[200px] h-[56px] rounded-full`} // Using Tailwind classes for the FAB style
        icon='plus'
        label='Add Item'
        onPress={() => console.log('Pressed')}
        theme={{ colors: { text: 'white' } }}
      />
    </View>
  )
}

export default ExtendedFAB
