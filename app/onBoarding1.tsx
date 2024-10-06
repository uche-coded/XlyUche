import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import CustomButton from '@/components/CustomButton'
import OnboardingImage from '@/components/OnboardingImage'
import OnboardingCard from '@/components/OnboardingCard'
import DotsStroke from '@/components/DotsStroke'


const onBoarding1 = () => {
  return (
    <View style={className`flex-1`}>
      <OnboardingImage source={require('../assets/images/onboarding1.png')} />

      <OnboardingCard
        title={'Your Ultimate Biking Companion'}
        body={
          'Register your bike with all the necessary details, create a riding group, and track your rides in real-time.'
        }
        fillColor1={'bg-[#705AFD]'}
        fillColor2={'bg-gray-300'}
        fillColor3={'bg-gray-300'}
        btntxt1={'Next'}
        btntxt2={'Sign Up'}
        href1={'/onBoarding2'}
        href2={'/signUp'}
      />
    </View>
  )
}

export default onBoarding1
