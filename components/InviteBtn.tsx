
// export default InviteBtn;
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import className from 'twrnc';

interface InviteBtnProps {
  onPress: () => void; // Function type that accepts no arguments
}

const InviteBtn: React.FC<InviteBtnProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={className`px-2 py-2 border border-[#6200ea] rounded-full justify-center items-center`}
      >
        <Text
          style={className`text-[#6200ea] text-[10px] font-semibold text-center`}
        >
          Accept Invite 
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default InviteBtn;
