import React from 'react'
import { StyleSheet, StyleSheetProperties, Text, TextInput, TouchableOpacity, View } from 'react-native'
import modules from '../modules'
import _styles from '../_styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { fontBold } from '../../customs/customFont';


interface Props {
    name: string,
    onPress: () => void
}

const CategoryList = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={{ textAlign: 'center', ...fontBold }}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryList

const styles = StyleSheet.create({
    container: {
        margin: modules.PADDING / 2,
        backgroundColor: modules.WHITE,
        padding: modules.PADDING / 2,
        borderRadius: modules.RADIUS,
        alignItems: 'center',
    }
})
