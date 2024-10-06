import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link, Href } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface CustomDropdownProps {
  city: string
  href: Href<string | object> // Adjust type to Href
  onSelectCity: () => void // Define the type of the function
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  city,
  href,
  // onSelectCity
}) => {
  return (

      <View
        style={className` border border-gray-300 rounded-20px p-1 flex-row items-center justify-between`}
      >
            <Link href={href} asChild>
        <TouchableOpacity
          // onPress={onSelectCity}
          style={className`flex-row items-center`}
        >
          <MaterialCommunityIcons name='map-marker' size={20} color='black' />

          <Text style={className`ml-1 text-gray-800 text-12px`}>{city}</Text>
        </TouchableOpacity>
        </Link>
        

        <Text style={className`text-gray-800`}>{''}</Text>
        <MaterialCommunityIcons
          name='chevron-down'
          size={18} // Increased size for better visibility
          color='gray'
          style={className`ml-1 mt-1 `} // Adjusted margin for spacing
        />
      </View>
    
  )
}

export default CustomDropdown

// import { View, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import className from 'twrnc';
// import { Link, Href } from 'expo-router'
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// interface CustomDropdownProps {
//   city: string;
//   onSelectCity: () => void;
//   href: Href<string | object>
//   navigation: any;  // Add navigation prop to navigate
// }

// const CustomDropdown: React.FC<CustomDropdownProps> = ({
//   city,
//   onSelectCity,
//   href,
//   navigation,
// }) => {
//   // Function to handle navigation to MapView screen
//   const handlePress = () => {
//     onSelectCity();  // Execute the provided onSelectCity callback
//     navigation.navigate('MapView');  // Navigate to the MapView screen
//   };

//   return (
//     <View style={className`border border-gray-300 rounded-20px p-1 flex-row items-center justify-between`}>
//       <TouchableOpacity
//         onPress={handlePress}
//         style={className`flex-row items-center`}>
//         <MaterialCommunityIcons name='map-marker' size={20} color='black' />
//         <Text style={className`ml-1 text-gray-800 text-12px`}>{city}</Text>
//       </TouchableOpacity>
//       <MaterialCommunityIcons
//         name='chevron-down'
//         size={18}
//         color='gray'
//         style={className`ml-1 mt-1`}
//       />
//     </View>
//   );
// };

// export default CustomDropdown;
