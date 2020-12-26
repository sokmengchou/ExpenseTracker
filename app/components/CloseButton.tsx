import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import modules from '../modules';
import _styles from '../_styles';
import { useNavigation } from '@react-navigation/native';
interface Props {
    onBack?: () => void

}
const CloseButton = (props: Props) => {
    const navigation = useNavigation();
    if (props.onBack) {
        return (

            <TouchableOpacity onPress={props.onBack}
                style={styles.buttonClose}>
                <Icon style={styles.icon} name="close" />
            </TouchableOpacity>

        );
    } else {
        return (

            <TouchableOpacity onPress={() => navigation.goBack()}
                style={styles.buttonClose}>
                <Icon style={styles.icon} name="close" />
            </TouchableOpacity>

        );
    }

};

export default CloseButton;

const styles = StyleSheet.create({
    buttonClose: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: modules.WHITE,
        margin: modules.PADDING,
        justifyContent: 'center',
        alignItems: 'center',
        ..._styles.shadowSmall,
    },
    icon: {
        fontSize: modules.FONT_H6
    },
});
