// import React, { Component } from 'react'
// import {
//   Text,
//   View,
//   PermissionsAndroid,
//   Platform,
//   Alert,
//   TextInput,
//   TouchableOpacity
// } from 'react-native'
// import MapView, { Marker, Callout, Region } from 'react-native-maps'
// import * as Location from 'expo-location'
// import className from 'twrnc'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
// import { Icon } from 'react-native-paper'
// import CustomButton from '@/components/CustomButton'

// interface MapState {
//   region: Region
//   currentLocation: { latitude: number; longitude: number } | null
//   searchQuery: string
//   address: string | null
//   groupList: string[]
//   selectedGroup: string | null
// }

// export class Map extends Component<{}, MapState> {
//   constructor (props: {}) {
//     super(props)
//     this.state = {
//       region: {
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//       },
//       currentLocation: null,
//       searchQuery: '',
//       address: null,

//       groupList: [], // This will hold the groups fetched from the API
//       selectedGroup: null // This will hold the selected group
//     }
//   }

//   async getCurrentLocation () {
//     if (Platform.OS === 'android') {
//       const hasLocationPermission = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//       )
//       if (hasLocationPermission !== PermissionsAndroid.RESULTS.GRANTED) {
//         Alert.alert(
//           'Permission Denied',
//           'Cannot access location without permission'
//         )
//         return
//       }
//     }

//     const { status } = await Location.requestForegroundPermissionsAsync()
//     if (status !== 'granted') {
//       Alert.alert(
//         'Permission Denied',
//         'Cannot access location without permission'
//       )
//       return
//     }

//     const location = await Location.getCurrentPositionAsync({})

//     const { latitude, longitude } = location.coords

//     // Reverse geocoding to get the address
//     const geocode = await Location.reverseGeocodeAsync({ latitude, longitude })
//     const address =
//       geocode.length > 0
//         ? `${geocode[0].street}, ${geocode[0].city}, ${geocode[0].region}`
//         : 'Address not found'

//     this.setState({
//       currentLocation: location.coords,
//       address,
//       region: {
//         ...this.state.region,
//         latitude,
//         longitude,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//       }
//     })
//   }

//   componentDidMount () {
//     this.getCurrentLocation()
//   }

//   onMarkerClick () {
//     Alert.alert(
//       'Marker Clicked',
//       'You can now select a location or perform an action here.'
//     )
//   }

//   handleSearchInputChange = (text: string) => {
//     this.setState({ searchQuery: text })
//   }

//   handleSearch = () => {
//     // You can integrate a geocoding API to fetch the coordinates from the search query.
//     // For now, we'll mock the location update for simplicity.
//     const mockLocation = { latitude: 37.7749, longitude: -122.4194 } // Example for San Francisco
//     this.setState({
//       currentLocation: mockLocation,
//       address: 'Market St, San Francisco, CA', // Mocked address
//       region: {
//         ...this.state.region,
//         latitude: mockLocation.latitude,
//         longitude: mockLocation.longitude,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//       }
//     })
//   }

//   async fetchGroups () {
//     // Replace this with actual API call
//     const groups = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5']
//     this.setState({ groupList: groups })
//   }

//   // Called when the input is focused (for API integration)
//   handleFocus = async () => {
//     await this.fetchGroups() // Fetch groups when the user focuses the input
//   }

//   // Handle when a group is selected
//   handleGroupSelect (group: string) {
//     this.setState({ selectedGroup: group, searchQuery: group })
//   }

//   render () {
//     const {
//       currentLocation,
//       region,
//       searchQuery,
//       address,
//       groupList,
//       selectedGroup
//     } = this.state

//     return (
//       // <SafeAreaView style={className`flex-1`}>

//       <View style={className`flex-1 h-[100%]`}>
//         <View style={className`  absolute top-10 left-8 right-8 z-10 `}>
//           {/* Display address */}

//           <View
//             style={className` flex-row bg-white py-2 px-5 rounded-lg  border border-[#705AFD]`}
//           >
//             <View style={className`flex-col py-3 justify-between items-center`}>
//               <View
//                 style={className`mr-2 w-2 h-2 rounded-full bg-[#705AFD]`} // Tailwind CSS classes for circle dot
//               />
//               <View
//                 style={className`mr-2 w-1 h-1 rounded-full bg-[#705AFD]`} // Tailwind CSS classes for circle dot
//               />
//               <View
//                 style={className`mr-2 w-1 h-1 rounded-full bg-[#705AFD]`} // Tailwind CSS classes for circle dot
//               />
//               <View
//                 style={className`mr-2 w-1 h-1 rounded-full bg-[#705AFD]`}
//                 // Tailwind CSS classes for circle dot
//               />
//               <View
//                 style={className`mr-2 w-1 h-1 rounded-full bg-[#705AFD]`} // Tailwind CSS classes for circle dot
//               />

//               <View
//                 style={className`mr-2 w-2 h-2 rounded-full bg-[#705AFD]`} // Tailwind CSS classes for circle dot
//               />
//             </View>
//             <View style={className`flex-col`}>
//               <View style={className`flex-row col-1 py-2`}>
//                 <MaterialCommunityIcons
//                   name='map-marker'
//                   size={20}
//                   color='black'
//                   style={className`mr-2`}
//                 />
//                 <Text
//                   style={className`text-start text-gray-800  px-2 text-[12px] mb-4`}
//                 >
//                   {address ? address : 'Fetching address...'}
//                 </Text>
//               </View>

//               {/* Search input box */}
//               <View
//                 style={className`flex-col justify-center w-full items-center`}
//               >
//                 <View
//                   style={className`flex-row items-center w-full border-t border-gray-300 rounded-tl-lg rounded-tr-lg`}
//                 >
//                   {/* Leading Icon (Left Icon) */}
//                   <Ionicons
//                     name='search'
//                     size={24}
//                     color='#8F8F8FFF'
//                     style={className`mr-2`}
//                   />

//                   {/* TextInput */}
//                   <TextInput
//                     value={searchQuery}
//                     onChangeText={this.handleSearchInputChange}
//                     placeholder='Search Destination'
//                     style={className`flex-1 p-2 text-gray-800`}
//                     onSubmitEditing={this.handleSearch}
//                     returnKeyType='search'
//                     blurOnSubmit={false}
//                   />
//                 </View>
//               </View>
//             </View>
//           </View>

//           <View
//             style={className`flex-col justify-center mt-2 w-full bg-white items-center rounded-lg px-5 py-1 border border-[#705AFD]`}
//           >
//             <View
//               style={className`flex-row items-center w-full border-gray-100 rounded-tl-lg rounded-tr-lg`}
//             >
//               {/* Leading Group Icon */}
//               <View
//                 style={className`mr-2 w-3 h-3 rounded-full bg-[#705AFD]`} // Tailwind CSS classes for circle dot
//               />

//               <Ionicons
//                 name='people' // Use 'people' for group icon
//                 size={24}
//                 color='#8F8F8FFF'
//                 style={className`mr-2`}
//               />

//               {/* TextInput (acts as a dropdown input) */}
//               <TextInput
//                 value={searchQuery}
//                 onChangeText={text => this.setState({ searchQuery: text })}
//                 placeholder='Select Group'
//                 style={className`flex-1 p-2 text-gray-800`}
//                 onFocus={this.handleFocus} // Fetch groups when focused
//                 onSubmitEditing={() => {}}
//                 returnKeyType='done'
//                 blurOnSubmit={false}
//               />

//               {/* Trailing Dropdown Icon */}
//               <TouchableOpacity onPress={() => alert('Dropdown pressed!')}>
//                 <Ionicons
//                   name='chevron-down' // Dropdown icon
//                   size={24}
//                   color='#8F8F8FFF'
//                   style={className`ml-2`}
//                 />
//               </TouchableOpacity>
//             </View>

//             {/* Dropdown list (This would show only when the user interacts with the input) */}
//             {groupList.length > 0 && (
//               <View
//                 style={className`mt-2 w-full bg-white border border-gray-300 rounded-lg`}
//               >
//                 {groupList.map((group, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={className`p-2`}
//                     onPress={() => this.handleGroupSelect(group)}
//                   >
//                     <Text style={className`text-gray-800`}>{group}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             )}
//           </View>
//         </View>

//         {/* {Start ride button} */}
//         <View style={className`  absolute top-[82%] left-8 right-8 z-10 `}>
//           <CustomButton
//             fillColor='bg-[#705AFD]' // Default or dynamic color
//             borderColor='border-[#705AFD]'
//             textColor=' text-[#ffffff]'
//             text={'Start a Ride'}
//             href={'/'}
//           />
//         </View>

//         {/* Map view */}
//         <MapView
//           style={className`w-[100%] h-[100%]`}
//           provider='google'
//           initialRegion={region}
//           region={
//             currentLocation
//               ? {
//                   latitude: currentLocation.latitude,
//                   longitude: currentLocation.longitude,
//                   latitudeDelta: 0.0922,
//                   longitudeDelta: 0.0421
//                 }
//               : region
//           }
//           showsUserLocation={true}
//           followsUserLocation={true}
//         >
//           <Marker
//             coordinate={{
//               latitude: currentLocation ? currentLocation.latitude : 37.78825,
//               longitude: currentLocation ? currentLocation.longitude : -122.4324
//             }}
//           >
//             <Callout onPress={() => this.onMarkerClick()}>
//               <View style={className`p-4`}>
//                 <Text style={className`text-gray-800 font-semibold`}>
//                   You are here
//                 </Text>
//               </View>
//             </Callout>
//           </Marker>
//         </MapView>
//       </View>
//       // </SafeAreaView>
//     )
//   }
// }

// export default Map

import React, { Component } from 'react'
import {
  Text,
  View,
  PermissionsAndroid,
  Platform,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native'
import MapView, { Marker, Callout, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import className from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import CustomButton from '@/components/CustomButton'

interface MapState {
  region: Region
  currentLocation: { latitude: number; longitude: number } | null
  searchQuery: string
  address: string | null
  groupList: string[] // This will hold the groups fetched from the API
  selectedGroup: string | null // This will hold the selected group
}

export class Map extends Component<{}, MapState> {
  constructor (props: {}) {
    super(props)
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      currentLocation: null,
      searchQuery: '',
      address: null,
      groupList: [], // Initialize with an empty list of groups
      selectedGroup: null
    }
  }

  async getCurrentLocation () {
    try {
      if (Platform.OS === 'android') {
        const hasLocationPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )
        if (hasLocationPermission !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert(
            'Permission Denied',
            'Cannot access location without permission'
          )
          return
        }
      }

      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert(
          'Permission Denied',
          'Cannot access location without permission'
        )
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      const { latitude, longitude } = location.coords

      // Reverse geocoding to get the address
      const geocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      })
      const address =
        geocode.length > 0
          ? `${geocode[0].street}, ${geocode[0].city}, ${geocode[0].region}`
          : 'Address not found'

      this.setState({
        currentLocation: location.coords,
        address,
        region: {
          ...this.state.region,
          latitude,
          longitude
        }
      })
    } catch (error) {
      console.error('Failed to get location', error)
    }
  }

  componentDidMount () {
    this.getCurrentLocation()
  }

  onMarkerClick () {
    Alert.alert(
      'Marker Clicked',
      'You can now select a location or perform an action here.'
    )
  }

  handleSearchInputChange = (text: string) => {
    this.setState({ searchQuery: text })
  }

  handleSearch = () => {
    // Mocking the location update for simplicity
    const mockLocation = { latitude: 37.7749, longitude: -122.4194 } // Example for San Francisco
    this.setState({
      currentLocation: mockLocation,
      address: 'Market St, San Francisco, CA', // Mocked address
      region: {
        ...this.state.region,
        latitude: mockLocation.latitude,
        longitude: mockLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    })
  }

  async fetchGroups () {
    // Replace this with actual API call for fetching groups
    const groups = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5']
    this.setState({ groupList: groups })
  }

  // Called when the input is focused (for API integration)
  handleFocus = async () => {
    await this.fetchGroups() // Fetch groups when the user focuses the input
  }

  // Handle when a group is selected
  handleGroupSelect (group: string) {
    this.setState({ selectedGroup: group, searchQuery: group })
  }

  render () {
    const {
      currentLocation,
      region,
      searchQuery,
      address,
      groupList,
      selectedGroup
    } = this.state

    return (
      // <SafeAreaView style={className`flex-1`}>
        <View style={className`flex-1 h-[100%]`}>
          <View style={className`absolute top-10 left-8 right-8 z-10`}>
            {/* Display address */}
            <View
              style={className`flex-row bg-white py-2 px-5 rounded-lg border border-[#705AFD]`}
            >
              <View
                style={className`flex-col py-3 justify-between items-center`}
              >
                <View
                  style={className`mr-2 w-2 h-2 rounded-full bg-[#705AFD]`}
                />
                <View
                  style={className`mr-2 w-1 h-1 rounded-full bg-[#705AFD]`}
                />
                <View
                  style={className`mr-2 w-1 h-1 rounded-full bg-[#705AFD]`}
                />
                <View
                  style={className`mr-2 w-1 h-1 rounded-full bg-[#705AFD]`}
                />
                <View
                  style={className`mr-2 w-1 h-1 rounded-full bg-[#705AFD]`}
                />
                <View
                  style={className`mr-2 w-2 h-2 rounded-full bg-[#705AFD]`}
                />
              </View>
              <View style={className`flex-col`}>
                <View style={className`flex-row flex-1 py-2`}>
                  <MaterialCommunityIcons
                    name='map-marker'
                    size={20}
                    color='black'
                    style={className`mr-2`}
                  />
                  <Text
                    style={className`text-right text-gray-800 px-2 text-[12px] mb-4`}
                  >
                    {address ? address : 'Fetching address...'}
                  </Text>
                </View>

                {/* Search input box */}
                <View
                  style={className`flex-col justify-center w-full items-center`}
                >
                  <View
                    style={className`flex-row items-center w-full border-t border-gray-300 rounded-tl-lg rounded-tr-lg`}
                  >
                    <Ionicons
                      name='search'
                      size={24}
                      color='#8F8F8FFF'
                      style={className`mr-2`}
                    />
                    <TextInput
                      value={searchQuery}
                      onChangeText={this.handleSearchInputChange}
                      placeholder='Search Destination'
                      style={className`flex-1 p-2 w-full text-gray-800`}
                      onSubmitEditing={this.handleSearch}
                      returnKeyType='search'
                      blurOnSubmit={false}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={className`flex-col justify-center mt-2 w-full bg-white items-center rounded-lg px-5 py-1 border border-[#705AFD]`}
            >
              <View
                style={className`flex-row items-center w-full border-gray-100 rounded-tl-lg rounded-tr-lg`}
              >
                <View
                  style={className`mr-2 w-3 h-3 rounded-full bg-[#705AFD]`}
                />
                <Ionicons
                  name='people'
                  size={24}
                  color='#8F8F8FFF'
                  style={className`mr-2`}
                />
                <TextInput
                  value={searchQuery}
                  onChangeText={this.handleSearchInputChange}
                  placeholder='Select Group'
                  style={className`flex-1 p-2 text-gray-800`}
                  onFocus={this.handleFocus}
                  onSubmitEditing={() => {}}
                  returnKeyType='done'
                  blurOnSubmit={false}
                />
                <TouchableOpacity onPress={() => alert('Dropdown pressed!')}>
                  <Ionicons
                    name='chevron-down'
                    size={24}
                    color='#8F8F8FFF'
                    style={className`ml-2`}
                  />
                </TouchableOpacity>
              </View>

              {/* Dropdown list (This would show only when the user interacts with the input) */}
              {groupList.length > 0 && (
                <View
                  style={className`mt-2 w-full bg-white border border-gray-300 rounded-lg`}
                >
                  {groupList.map((group, index) => (
                    <TouchableOpacity
                      key={index}
                      style={className`p-2`}
                      onPress={() => this.handleGroupSelect(group)}
                    >
                      <Text style={className`text-gray-800`}>{group}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>

          {/* Start ride button */}
          <View style={className`absolute top-[82%] left-8 right-8 z-10`}>
            <CustomButton
              fillColor='bg-[#705AFD]'
              borderColor='border-[#705AFD]'
              textColor='text-[#ffffff]'
              text='Start a Ride'
              href='/'
            />
          </View>

          {/* Map view */}
          <MapView
            style={className`w-[100%] h-[100%]`}
            provider='google'
            initialRegion={region}
            region={
              currentLocation
                ? {
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }
                : region
            }
            showsUserLocation={true}
            followsUserLocation={true}
          >
            <Marker
              coordinate={{
                latitude: currentLocation ? currentLocation.latitude : 37.78825,
                longitude: currentLocation
                  ? currentLocation.longitude
                  : -122.4324
              }}
            >
              <Callout onPress={() => this.onMarkerClick()}>
                <View style={className`p-4`}>
                  <Text style={className`text-gray-800 font-semibold`}>
                    You are here
                  </Text>
                </View>
              </Callout>
            </Marker>
          </MapView>
        </View>
      // </SafeAreaView>
    )
  }
}

export default Map
