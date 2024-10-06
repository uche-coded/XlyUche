import React from 'react'
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Alert,
  ScrollView
} from 'react-native'
import className from 'twrnc'
import CustomDropdown from '@/components/CustomDown'
import SliderCard from '@/components/SliderCard'
import SearchInput from '@/components/SearchInput'
import NearBikeListTile from '@/components/NearBikeListTile'
import TileBtn from '@/components/TileBtn'

const Home = () => {
  const handleSelectCity = () => {
    console.log('City selected')
  }

  // Mock data for nearby bikers (this could come from an API)
  const nearbyBikers = [
    {
      id: '1',
      riderName: 'John Doe',
      distance: '3.3 KM Away',
      imageSource: require('../assets/images/icon_trail.png')
    },
    {
      id: '2',
      riderName: 'Jane Smith',
      distance: '5.2 KM Away',
      imageSource: require('../assets/images/icon_trail.png')
    },
    {
      id: '3',
      riderName: 'Rider 4532',
      distance: '7.4 KM Away',
      imageSource: require('../assets/images/icon_trail.png')
    }
  ]

  // Function to handle invite press
  const handleInvitePress = (riderName: string) => {
    Alert.alert(`Invite sent to ${riderName}`)
  }

  return (
    // <SafeAreaView style={className`flex-1 bg-white`}>
      <ScrollView style={className`flex-1 bg-white`}>
        <View style={className`flex-1 items-center`}>
          {/* Custom Dropdown */}
          <CustomDropdown
            city='Lagos, Nigeria'
            onSelectCity={handleSelectCity}
            href={'/map'}
          />
          <SliderCard />

          {/* Tab display rider counts appears here */}
          <View
            style={className`flex-row justify-between  px-4 w-full items-center`}
          >
            {/* First Block  Make sure to add the actual KM from api end point */}
            <View
              style={className`flex-row px-4 py-1 justify-center items-center bg-[#F9F9F9] rounded-[5px]`}
            >
              <Text style={className`text-gray-800 text-[10px] font-medium`}>
                Total Rides:
              </Text>
              <Text
                style={className`ml-1 text-[14px] font-bold text-[#705AFD]`}
              >
                0
              </Text>
            </View>

            {/* Second Block  Make sure to add the actual KM from api end point */}
            <View
              style={className`flex-row px-4 py-1 justify-center items-center bg-[#F9F9F9] rounded-[5px]`}
            >
              <Text style={className`text-gray-800 text-[10px] font-medium `}>
                Total Distance:
              </Text>
              <Text
                style={className`ml-1 text-[14px] font-bold text-[#705AFD]`}
              >
                0
              </Text>
            </View>

            {/* Third Block Make sure to add the actual KM from api end point */}
            <View
              style={className`flex-row px-4 py-1 justify-center items-center bg-[#F9F9F9] rounded-[5px]`}
            >
              <Text style={className`text-gray-800 font-medium text-[10px]`}>
                Total Riders:
              </Text>
              <Text
                style={className`ml-1 text-[14px] font-bold text-[#705AFD]`}
              >
                0
              </Text>
            </View>
          </View>

          <SearchInput />

          {/* Nearby Bikers List */}

          <View style={className`w-full px-5 mt-4`}>
            <Text style={className`text-[14px] font-bold text-gray-800`}>
              Nearby Bikers
            </Text>

            <FlatList
              data={nearbyBikers}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <NearBikeListTile
                  riderName={item.riderName}
                  distance={item.distance}
                  imageSource={item.imageSource}
                  onInvitePress={() => handleInvitePress(item.riderName)} // Pass onInvitePress callback
                />
              )}
            />
          </View>

          {/* Nearby Bikers List */}
          <View style={className`w-full px-5 mt-4`}>
            <Text style={className`text-[14px] font-bold text-gray-800`}>
              To do List
            </Text>
            <TileBtn
              leadingTxt={'Add a bike '}
              dscTxt={'Register your bike with all the necessary details'}
              onPress={function (): void {
                throw new Error('Function not implemented.')
              }}
            />

            <TileBtn
              leadingTxt={'Create A Riding Group '}
              dscTxt={'create or join riding groups'}
              onPress={function (): void {
                throw new Error('Function not implemented.')
              }}
            />

            <TileBtn
              leadingTxt={'Create A Ride'}
              dscTxt={
                'Track rides, report bike faults, and find fellow bikers nearby'
              }
              onPress={function (): void {
                throw new Error('Function not implemented.')
              }}
            />
          </View>
        </View>
      </ScrollView>
    // </SafeAreaView>
  )
}

export default Home
