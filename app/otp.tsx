// import { View, Text, TouchableOpacity, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import className from 'twrnc'
// import OnboardingImage from '../components/OnboardingImage'
// import CustomButton from '@/components/CustomButton'
// import { MaterialCommunityIcons } from '@expo/vector-icons'
// import { Link } from 'expo-router'
// import CountryPicker, { Country } from 'react-native-country-picker-modal'

// const otp = () => {
//   const [countryCode, setCountryCode] = useState('US')
//   const [callingCode, setCallingCode] = useState('+1')

//   const onSelect = (country: Country) => {
//     setCountryCode(country.cca2)
//     setCallingCode(country.callingCode[0])
//   }

//   return (
//     <View style={className`flex-1`}>
//       <OnboardingImage source={require('../assets/images/onboarding1.png')} />
//       <View
//         style={className`bg-gray-50 rounded-tl-2xl rounded-tr-2xl h-[45%] w-full p-5 absolute bottom-0 left-0 right-0 flex`}
//       >
//         <Text style={className`text-[30px] font-bold mb-1`}>Verify Phone</Text>
//         <Text style={className`text-[14px] mb-2 font-normal leading-[1.5]`}>
//           Code has been sent to +447283019280
//         </Text>
//         <View style={className`flex flex-row items-center mb-1 w-full`}>
//           {/* Phone Number Input Field */}
//           <TextInput
//             style={className`flex-1 h-[45px] border border-gray-300 rounded p-2`}
//             placeholder='Phone Number'
//             keyboardType='phone-pad'
//           />
//         </View>

//         <CustomButton
//           fillColor='bg-[#705AFD]'
//           borderColor='border-[#705AFD]'
//           textColor='text-[#ffffff]'
//           text='Next'
//           href={'/home'}
//         />
//       </View>
//     </View>
//   )
// }

// export default otp

import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc'
import OnboardingImage from '../components/OnboardingImage'
import CustomButton from '@/components/CustomButton'
import { Country } from 'react-native-country-picker-modal'

const OtpScreen = () => {
  const [countryCode, setCountryCode] = useState('US')
  const [callingCode, setCallingCode] = useState('+1')
  const [otp, setOtp] = useState(['', '', '', ''])
  const [activeIndex, setActiveIndex] = useState(0)

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCallingCode(country.callingCode[0])
  }

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp]
    newOtp[index] = text
    setOtp(newOtp)

    // Move to the next input field if there's input
    if (text && index < 3) {
      setActiveIndex(index + 1)
    }
  }

  const handleFocus = (index: React.SetStateAction<number>) => {
    setActiveIndex(index)
  }

  return (
    <View style={className`flex-1`}>
      <OnboardingImage source={require('../assets/images/onboarding1.png')} />
      <View
        style={className`bg-gray-50 rounded-tl-2xl rounded-tr-2xl h-[45%] w-full p-5 absolute bottom-0 left-0 right-0 flex`}
      >
        <Text style={className`text-[30px] font-bold mb-1`}>Verify Phone</Text>
        <Text style={className`text-[14px] mb-2 font-normal leading-[1.5]`}>
          Code has been sent to +447283019280
        </Text>

        <View style={className`flex flex-row justify-between mt-2 mb-4 w-full`}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={className`flex-1 h-[65px]  border border-[#705AFD] text-[25px] rounded-[10px] text-center mx-1 ${
                activeIndex === index
                  ? 'bg-[#705AFD] text-white'
                  : 'bg-white text-black'
              }`}
              placeholder=''
              maxLength={1}
              keyboardType='number-pad'
              value={value}
              onChangeText={text => handleChange(text, index)}
              onFocus={() => handleFocus(index)}
            />
          ))}
        </View>

        <View style={className`flex-row `}>
          <Text
            style={className`text-[14px] mb-2 font-normal mb-12 leading-[1.5]`}
          >
            Didn't get OTP Code ?
          </Text>

          <Text
            style={className`text-[14px] mb-2 font-bold underline mx-0.5 leading-[1.5]`}
          >
            Resend code
          </Text>
        </View>

        <CustomButton
          fillColor='bg-[#705AFD]'
          borderColor='border-[#705AFD]'
          textColor='text-[#ffffff]'
          text='Next'
          href={'/home'}
        />
      </View>
    </View>
  )
}

export default OtpScreen
