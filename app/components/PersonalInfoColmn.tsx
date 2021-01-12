import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import modules from '../modules';
import Icon from 'react-native-vector-icons/AntDesign';
import _styles from '../_styles';




interface Props {
    name: string
    text: string
    onPress?: () => void
}

const PersonalInfoColmn = (props: Props) => {
    return (

        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Icon
                style={styles.icon}
                name={props.name} />
            <Text>{props.text}</Text>
            <View style={_styles.flex1} />

        </TouchableOpacity>

    );
};

export default PersonalInfoColmn;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: modules.PADDING
    },
    icon: {
        fontSize: modules.FONT_H3,
        color: modules.SUB_TEXT,
        paddingRight: modules.PADDING
    }
});
