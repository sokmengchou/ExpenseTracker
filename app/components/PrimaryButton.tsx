import *  as React from 'react';
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { fontBold } from '../../customs/customFont';
import modules from '../modules';
import _styles from '../_styles';

interface Props {
    text: string,
    progress: boolean,
    onPress: () => void,
    style?: any
}

const PrimaryButton = (props: Props) => {
    return (
        <TouchableOpacity
            style={props.style}
            disabled={props.progress}
            onPress={props.onPress}>
            <LinearGradient colors={['#5758BB', '#5758BB']} style={styles.container}>
                {
                    props.progress ? <ActivityIndicator color={modules.WHITE} />
                        : <Text style={styles.text}>{props.text}</Text>
                }


            </LinearGradient>
        </TouchableOpacity>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        margin: modules.PADDING,
        alignItems: 'center',
        backgroundColor: modules.BLUE,
        borderRadius: modules.RADIUS,
        justifyContent: 'center',
        padding:modules.PADDING/2
    },
    text: {
        fontSize: modules.FONT_H5,
        color: modules.WHITE,
        ...fontBold
    }


});
