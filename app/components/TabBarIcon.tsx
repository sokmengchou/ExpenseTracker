// import React from 'react';
// import FontAwesome from 'react-native-vector-icons/Ionicons'

// type Props = {
//   name: string;
//   color: string;
//   resize?: string
// };

// export const TabBarIcon: React.FC<Props> = ({ name, color, resize }) => (
//   <FontAwesome
//     name={name}
//     style={[{color: color || 'white'},resize?{fontSize:resize}:null]}
//   />
// );

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/Ionicons'
interface Props {
  name: string;
  color: string;
  resize?: number
}

const TabBarIcon = ({ name, color, resize }: Props) => {
  return (
    <FontAwesome
      name={name}
      size={resize ? resize : 25}
      style={[{ color: color || 'white' }]}
    />
  )
}

export default TabBarIcon

const styles = StyleSheet.create({})
