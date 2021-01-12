import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import modules from '../modules';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fontBold, fontSemiBold } from '../../customs/customFont'
interface Props {
    progress: boolean,
    onPress: () => void,
    icon?: string

}


const RightSave = (props: Props) => {
    return (
        <TouchableOpacity
            disabled={props.progress}
            onPress={props.onPress}
            style={styles.containerIcon} >
            {
                props.progress ? <ActivityIndicator />
                    : <Text style={styles.textSave}>Save</Text>
                // <Icon style={styles.iconSearch} name={props.icon ? props.icon : 'save'} />
            }

        </TouchableOpacity>
    );
}
export default RightSave
const styles = StyleSheet.create({
    containerIcon: {
        height: 38,
        width: 38,
        borderRadius: 19,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    iconSearch: {
        fontSize: modules.FONT_H3,
        color: modules.BLACK,
    },
    textSave: {
        ...fontSemiBold,
        color: modules.PROGRESS_COLOR[4],
        opacity: 0.6,
        fontSize:modules.FONT_H5

    }
})
