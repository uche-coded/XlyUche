import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc'
import OnboardingImage from '../components/OnboardingImage'
import CustomButton from '@/components/CustomButton'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import CountryPicker, { Country } from 'react-native-country-picker-modal'

const SignUp = () => {
  const [countryCode, setCountryCode] = useState('US')
  const [callingCode, setCallingCode] = useState('+1')

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCallingCode(country.callingCode[0])
  }

  return (
    <View style={className`flex-1`}>
      <OnboardingImage source={require('../assets/images/onboarding1.png')} />
      <View
        style={className`bg-gray-50 rounded-tl-2xl rounded-tr-2xl h-[45%] w-full p-5 absolute bottom-0 left-0 right-0 flex`}
      >
        <Text style={className`text-[30px] font-bold mb-1`}>Sign Up</Text>
        <Text style={className`text-[14px] mb-2 font-normal leading-[1.5]`}>
          Enter Phone Number
        </Text>
        <View style={className`flex flex-row items-center mb-1 w-full`}>
          {/* Country Selector Dropdown with Flag */}
          <View
            style={className`flex-row items-center justify-center border border-gray-300 rounded w-[59px] h-[45px] mr-2`}
          >
            <CountryPicker
              countryCode={countryCode}
              withCallingCode
              withFilter
              withFlag
              withEmoji
              onSelect={onSelect}
              containerButtonStyle={className`h-[86%]  w-[25px] flex-1 justify-center items-center`} // Full height
              hideCountryNameFlag
              style={className`h-[86%]  flex-1 justify-center items-center`}
            />
            <MaterialCommunityIcons
              name='chevron-down'
              size={24} // Increased size for better visibility
              color='gray'
              style={className`ml-1 `} // Adjusted margin for spacing
            />
          </View>

          {/* Phone Number Input Field */}
          <TextInput
            style={className`flex-1 h-[45px] border border-gray-300 rounded p-2`}
            placeholder='Phone Number'
            keyboardType='phone-pad'
          />
        </View>

        <View
          style={className`flex flex-row items-center w-full mb-[2%] mt-[2%] justify-center`}
        >
          <View style={className`flex-1 border-b border-gray-300`} />
          <Text style={className`mx-4`}>Or</Text>
          <View style={className`flex-1 border-b border-gray-300`} />
        </View>

        <CustomButton
          fillColor='bg-[#ffffff]'
          borderColor='border-[#000009]'
          textColor='text-[#000009]'
          text='Continue with email'
          icon={
            <MaterialCommunityIcons
              name='email-outline'
              size={20}
              color='black'
            />
          }
          href={'/emailSignUp'}
        />

        <View style={className`mb-[2%]`}>
          {/* Agreement Row */}
          <View
            style={className`flex flex-row items-center mb-2 justify-center`}
          >
            {/* Agreement Checkbox */}
            <TouchableOpacity style={className`mr-2`}>
              <View style={className`w-5 h-5 border border-gray-300 rounded`} />
            </TouchableOpacity>

            {/* Agreement Text with Links */}
            <Text style={className`mr-2 text-[12px]`}>
              I agree to the{' '}
              <Link href={'/terms'} style={className`text-[#705AFD]`}>
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link href={'/privacy'} style={className`text-[#705AFD]`}>
                Privacy Policy
              </Link>
            </Text>
          </View>
        </View>

        <CustomButton
          fillColor='bg-[#705AFD]'
          borderColor='border-[#705AFD]'
          textColor='text-[#ffffff]'
          text='Next'
          href={'/otp'}
        />
      </View>
    </View>
  )
}

export default SignUp
