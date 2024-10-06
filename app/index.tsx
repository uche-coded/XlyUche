import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import className from 'twrnc'
import { useRouter } from 'expo-router'

const Index = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onBoarding1') // Replace the current screen with the onboarding screen
    }, 4000) // Delay time set to 4000 ms (4 seconds)

    return () => clearTimeout(timer) // Clear the timer on unmount
  }, [router])

  return (
    <View style={className`flex-1 bg-white justify-center items-center`}>
      <Text style={className`text-center text-black text-[25px]`}>
        RideTogether!
      </Text>
    </View>
  )
}

export default Index
