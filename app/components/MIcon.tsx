import * as React from 'react';
import { Text, View, StyleSheet, ViewProps, StyleProp, StyleSheetProperties } from 'react-native';
import modules from '../modules';
import Icon from 'react-native-vector-icons/FontAwesome5'
interface Props extends ViewProps {
    children?: React.ReactElement
    name: string
    style: any
}

const MIcon = React.memo((props: Props) => {
    return (
        <Icon
            style={props.style}
            name={props.name} />
    );

})

export default MIcon;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: modules.PRIMARY,
    },
    icon: {
        fontSize: modules.FONT_H5,
        padding: 12,
        color: modules.SUB_TEXT
    }
});
