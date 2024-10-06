import React from 'react'
import { View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons' // Assuming you're using Expo for icons
import className from 'twrnc' // Import Tailwind classes

const SearchInput = () => {
  return (
    <View style={className`py-3 px-5 w-full`}>
      <View
        style={className`flex-row items-center bg-[#F9F9F9] rounded-[5px] px-3 py-3`}
      >
        {/* Search Icon */}
        <Ionicons
          name='search'
          size={24}
          color='#8F8F8FFF'
          style={className`mr-2`}
        />

        {/* Search Input */}
        <TextInput
          style={className`flex-1 p-0 text-[13px]`} // Styling the input with no border and padding
          placeholder='Search Nearby Bikers'
          placeholderTextColor='#666' // Adjust placeholder text color
          underlineColorAndroid='transparent' // Remove underline on Android
        />
      </View>
    </View>
  )
}

export default SearchInput
