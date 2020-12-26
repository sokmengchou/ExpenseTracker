import *  as React from 'react';
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { fontBold } from '../../customs/customFont';
import modules from '../modules';
import _styles from '../_styles';

interface Props {

}

const SmallCardCom = (props: Props) => {
    return (
        <>
            <View style={styles.smallCard}>
                <View style={styles.smallCardLogoContainer}>
                    <FastImage style={styles.smallCardLogo} source={require('../../assets/image/beers.png')} />
                </View>
                <Text style={{ ...fontBold }}>Beers</Text>
                <Text style={{ ...fontBold }}>$35</Text>

            </View>
        </>
    );
};

export default SmallCardCom;

const styles = StyleSheet.create({
    smallCard: {
        padding: modules.PADDING,
        alignItems: 'center',
        width: modules.VIEW_PORT_WIDTH / 3,
        // backgroundColor: "rgba(255,255,255,0.75)",
        backgroundColor:modules.WHITE,
        borderRadius: modules.RADIUS * 2,
        position: 'relative',
        zIndex: 1,
        marginHorizontal: modules.PADDING / 2,


    },
    smallCardLogo: {
        height: 20,
        width: 20
    },
    smallCardLogoContainer: {
        borderRadius: 40,
        backgroundColor: modules.SUB_TITLE,
        padding: modules.PADDING
    }


});
