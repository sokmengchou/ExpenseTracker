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
    textStyle?: any,
    autoFocus?: any,
    onPress: () => void,
    iconName: string,
    currency: string
}

const TextInputWithKhmerWordAndIcon = (props: Props) => {


    return (
        <>
            <View style={{ flexDirection: 'row', marginBottom: modules.PADDING / 4, paddingTop: modules.PADDING / 1.4 }}>
                <Text style={[_styles.label, { paddingLeft: modules.PADDING / 2, paddingRight: 0, paddingTop: 0, paddingBottom: 0 }]}>{props.label}</Text>
                <Text style={[_styles.label, { paddingHorizontal: modules.PADDING / 4, paddingTop: 0, paddingBottom: 0 }]}>{props.currency}</Text>
            </View>
            <View style={[_styles.row, styles.inputSKU,]}>
                <TextInput
                    autoFocus={props.autoFocus}
                    keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                    style={[_styles.flex1, { alignItems: 'center' }]}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder ? props.placeholder : 'Placeholder'}
                    returnKeyType={props.keyboardType ? 'done' : 'default'}
                    onSubmitEditing={(event: any) => _onSubmitEditing(event, props.onSubmitEditing)}
                    placeholderTextColor={modules.PLACE_HOLDER}
                />
                <TouchableOpacity onPress={props.onPress}>
                    <Icon name={props.iconName} style={styles.iconScan} />
                </TouchableOpacity>

            </View>
        </>
    )
}
const _onSubmitEditing = (event: any, onSubmitEditing: any,) => {
    onSubmitEditing(event)
}

export default TextInputWithKhmerWordAndIcon

const styles = StyleSheet.create({
    iconScan: {
        fontSize: modules.FONT_H5 + 1
    },
    label: {
        fontSize: modules.FONT_S,
        marginHorizontal: modules.PADDING,
        paddingBottom: modules.PADDING / 3.5,
        paddingTop: modules.PADDING + 3,
        fontFamily: 'Battambang-Regular',
        lineHeight: modules.PADDING
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
    inputSKU: {
        backgroundColor: modules.WHITE,
        paddingHorizontal: modules.PADDING,
        flex: 1,
        marginHorizontal: modules.PADDING / 2,
        ..._styles.shadowSmall,
        borderRadius:modules.RADIUS
    },

})
