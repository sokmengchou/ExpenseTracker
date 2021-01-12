import React from 'react'
import { StyleSheet, StyleSheetProperties, Text, TextInput, TouchableOpacity, View } from 'react-native'
import modules from '../../modules'
import _styles from '../../_styles';
import Icon from 'react-native-vector-icons/MaterialIcons'


interface Props {
    onPress: () => void,
    iconName: string,
    name?: any,
    label: string,
    placeholder?: string,
    style?: any
    disabled?: boolean,
}

const TextInputWithIcon = (props: Props) => {
    return (
        <>
            <Text style={[styles.label,props.style ? props.style : {}]}>{props.label}</Text>
            <TouchableOpacity
                disabled={props.disabled}
                onPress={props.onPress}
                style={[styles.container, props.style ? props.style : {}]}>
                <Text style={props.name ? styles.nameActive : styles.nameDeactive}>{props.name ? props.name : props.placeholder}</Text>
                <Icon name={props.iconName ? props.iconName : "event"} style={styles.icon} />
            </TouchableOpacity>
        </>
    )
}

export default TextInputWithIcon

const styles = StyleSheet.create({
    label: {
        fontSize: modules.FONT_S,
        marginHorizontal: modules.PADDING,
        paddingBottom: modules.PADDING / 2,
        paddingTop: modules.PADDING,
    },
    nameActive: {
        color: modules.BLACK,

    },
    nameDeactive: {
        color: modules.PLACE_HOLDER,

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: modules.WHITE,
        padding: modules.PADDING,
        marginHorizontal: modules.PADDING,
        borderRadius: modules.RADIUS,
        justifyContent: 'space-between',
    },
    icon: {
        color: modules.BLACK,
        fontSize:modules.FONT_H5
    }
})
