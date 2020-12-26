import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import modules from '../../modules'
import Icon from 'react-native-vector-icons/MaterialIcons';
import _styles from '../../_styles';


interface Props {
    onChangeText?: (text: string) => void,
    onSubmitEditing?: (event: any) => void,
    keyboardType?: any
    returnKeyType?: any
    value?: string,
    label?: string,
    placeholder: string,
    style?: any
    textStyle?: any,
    autoFocus?: any,
    secureTextEntry?: boolean
}

const TextInputWithoutIcon = (props: Props) => {


    return (
        <>
            <Text style={[styles.label, props.style ? props.style : {}]}>{props.label ? props.label : 'Label'}</Text>
            <TextInput
                autoFocus={props.autoFocus}
                keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                style={[styles.container, props.style]}
                value={props.value}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder ? props.placeholder : 'Placeholder'}
                returnKeyType={props.keyboardType ? 'done' : 'default'}
                onSubmitEditing={(event: any) => _onSubmitEditing(event, props.onSubmitEditing)}
                placeholderTextColor={modules.PLACE_HOLDER}
                secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
            />
        </>
    )
}
const _onSubmitEditing = (event: any, onSubmitEditing: any,) => {
    onSubmitEditing(event)
}

export default TextInputWithoutIcon

const styles = StyleSheet.create({
    label: {
        fontSize: modules.FONT_S,
        marginHorizontal: modules.PADDING,
        paddingBottom: modules.PADDING / 2,
        paddingTop: modules.PADDING,
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

})
