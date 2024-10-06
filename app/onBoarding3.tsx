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

const onBoarding3 = () => {
  return (
    <View style={className`flex-1`}>
      <OnboardingImage source={require('../assets/images/onboarding3.png')} />

      <OnboardingCard
        title={'Join the Ride, Share the Journey'}
        body={
          'With our app, biking has never been more social and fun. Register your bike, create or join riding groups, and map out your adventures.'
        }
        fillColor1={'bg-gray-300'}
        fillColor2={'bg-gray-300'}
        fillColor3={'bg-[#705AFD]'}
        btntxt1={'Next'}
        btntxt2={'Sign Up'}
        href1={'/'}
        href2={'/signUp'}
      />
    </View>
  )
}

export default onBoarding3
