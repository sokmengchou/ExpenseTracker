import * as React from 'react';
import { View, StyleSheet, Text, ActivityIndicator, Button, Alert, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { styles } from './SettingStyle';
import _styles from '../../_styles';
import MIcon from '../../components/MIcon';
import modules from '../../modules/';
import FastImage from 'react-native-fast-image';
import PrimaryButton from '../../components/PrimaryButton';
import TextInputWithoutIcon from '../../components/text-input/TextInputWithoutIcon';
import { fontBold } from '../../../customs/customFont';
import { color } from 'react-native-reanimated';
import { UserInterface } from '../../interface';

interface Props {
    progress: boolean
    onLogOut: () => void
    account: UserInterface
    onProfileDetail: () => void
}


const SettingScreen = ({ progress, onLogOut, account, onProfileDetail }: Props) => {
    return (
        <ImageBackground source={require("../../../assets/image/back2.png")} style={styles.container}>
            <SafeAreaView />
            {/* <View style={styles.back}>
                <View style={{ backgroundColor: "#C0C0C0", height: modules.VIEW_PORT_HEIGHT / 3, width: modules.VIEW_PORT_WIDTH }} />
                <View style={{ backgroundColor: modules.WHITE, height: modules.VIEW_PORT_HEIGHT, width: modules.VIEW_PORT_WIDTH }} />
            </View> */}
            <Text style={{ ...fontBold, fontSize: modules.FONT_H2, paddingBottom: modules.PADDING, color: modules.WHITE }}>Setting</Text>
            <TouchableOpacity onPress={onProfileDetail} style={[_styles.row, { padding: modules.PADDING, backgroundColor: modules.WHITE, borderRadius: modules.RADIUS }]}>
                <View style={styles.profileContainer}>
                    {
                        account?.gender?.key == 1 ? <FastImage style={styles.profile} source={require("../../../assets/image/man.png")} /> :
                            <FastImage style={styles.profile} source={require("../../../assets/image/businesswoman.png")} />
                    }
                </View>
                <View style={{ flex: 1, margin: modules.PADDING }}>
                    <Text style={{ ...fontBold }} numberOfLines={1}>{account.fullName}</Text>
                    <Text style={{ ...fontBold }} numberOfLines={1}>{account.email}</Text>

                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', padding: modules.PADDING, justifyContent: 'space-between', backgroundColor: modules.WHITE, borderRadius: modules.RADIUS, marginVertical: modules.PADDING }}>
                <Text>Currency</Text>
                <Text style={{ ...fontBold, textAlign:'right' }}>{account.selectedCurrency.name}</Text>
            </View>
            <View style={{ ..._styles.flex1 }}>
            </View>
            <View style={{}}>
                <PrimaryButton
                    text={"Logout"}
                    onPress={onLogOut}
                    progress={progress}
                />
            </View>
        </ImageBackground>
    );
}
export default SettingScreen
