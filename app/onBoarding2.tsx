import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import CustomButton from '@/components/CustomButton'
import OnboardingImage from '@/components/OnboardingImage'
import OnboardingCard from '@/components/OnboardingCard'
import DotsStroke from '@/components/DotsStroke'

const handlePress = () => {
  console.log('Button Pressed!')
}

const onBoarding2 = () => {
  return (
    <View style={className`flex-1`}>
      <OnboardingImage source={require('../assets/images/onboarding2.png')} />

      <OnboardingCard
        title={'Welcome to RideTogether!'}
        body={
          'Experience the ultimate biking community app. From registering your bike to joining riding group \n   '
        }
    
        fillColor1={'bg-gray-300'}
        fillColor2={'bg-[#705AFD]'}
        fillColor3={'bg-gray-300'}
        btntxt1={'Next'}
        btntxt2={'Sign Up'}
        href1={'/onBoarding3'}
        href2={'/signUp'}
      />
    </View>
  )
}

export default onBoarding2
