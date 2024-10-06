import React, { useState } from 'react'
import Slider from '@react-native-community/slider'
import { View, Text, Image } from 'react-native'
import className from 'twrnc'

const SliderCard = () => {
  const [sliderValue, setSliderValue] = useState(0)

  return (
    <View style={className`w-full mx-6 px-5 py-6`}>
      <View
        style={className`flex-row bg-[#F9F9F9] py-4 px-2 w-full rounded-lg items-center`}
      >
        {/* Image Section */}
        <View
          style={className`w-[40px] h-[40px] bg-[#705AFD1A] p-2 rounded-full justify-center items-center`}
        >
          <Image
            source={require('../assets/images/hugeicons_motorbike.png')}
            style={className`w-full h-full rounded-full`}
            resizeMode='cover'
          />
        </View>

        {/* Text and Slider Section */}
        <View style={className`flex-1 px-3`}>
          <View style={className`flex-row justify-between items-center`}>
            <Text style={className`text-gray-800 text-[12px]`}>
              {sliderValue}Km Covered
            </Text>
            <Text style={className`text-gray-800 text-[12px]`}>This Month</Text>
          </View>

          {/* Slider */}
          <View style={className`mt-4`}>
            <Slider
              style={className`h-2`} // Make sure the slider has a defined height
              minimumValue={0}
              maximumValue={120}
              value={sliderValue}
              onValueChange={setSliderValue}
              minimumTrackTintColor='red'
              maximumTrackTintColor='blue'
              thumbTintColor='transparent'
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default SliderCard
