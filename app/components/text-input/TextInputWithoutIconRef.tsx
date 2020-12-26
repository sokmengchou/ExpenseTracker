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
    label: string,
    placeholder: string,
    style?: any
    autoFocus?: any

}

const TextInputWithoutIconRef = (props: Props) => {
    const ref = React.useRef<TextInput | any>()
    return (
        <>
            <Text style={styles.label}>{props.label ? props.label : 'Label'}</Text>
            <TextInput
                autoFocus={props.autoFocus}
                keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                style={[styles.container, props.style]}
                value={props.value}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder ? props.placeholder : 'Placeholder'}
                placeholderTextColor={modules.PLACE_HOLDER}
                ref={ref}
                returnKeyType={props.keyboardType ? 'done' : 'default'}
                onSubmitEditing={(event: any) => _onSubmitEditing(event, props.onSubmitEditing,ref)}
            />
        </>
    )
}
const _onSubmitEditing = (event: any, onSubmitEditing: any, ref: any) => {
    onSubmitEditing(event)
    if (ref) {
        ref.current?.clear()
    }

}

export default TextInputWithoutIconRef

const styles = StyleSheet.create({
    label: {
        fontSize: modules.FONT_S,
        paddingHorizontal: modules.PADDING,
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
