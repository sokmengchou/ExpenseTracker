import * as React from 'react';
import { View, Text, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './LoginStyle';
import _styles from '../../../_styles';
import TextInputWithoutIcon from '../../../components/text-input/TextInputWithoutIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';
import FastImage from 'react-native-fast-image';

interface Props {
    progress: boolean,
    loginEmailPassword: (email: string, password: string) => void
    onCreateAccount: () => void
    onFacebook: () => void
    onGoogle: () => void

}

const LoginScreen = ({ progress, loginEmailPassword, onCreateAccount, onGoogle, onFacebook }: Props) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.boxTop}>
                <FastImage source={require("../../../../assets/image/EXPENSEBOOKS.png")} style={styles.logo} />
            </View>
            <KeyboardAvoidingView 
                enabled
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.glassContainer}>
                <TextInputWithoutIcon
                    style={{ ..._styles.shadowSmall }}
                    label={"Email or Username"}
                    placeholder={"Please enter your email"}
                    onChangeText={text => setEmail(text)}
                    onSubmitEditing={() => Keyboard.dismiss()}
                />

                <TextInputWithoutIcon
                    style={{ ..._styles.shadowSmall }}
                    label={"Password"}
                    placeholder={"Please enter Password"}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={() => Keyboard.dismiss()}
                    secureTextEntry={true}
                />

                <PrimaryButton
                    style={styles.loginBtn}
                    text={"Login"}
                    progress={progress}
                    onPress={() => loginEmailPassword(email, password)}
                />
                <View style={styles.socialBtn}>
                    <TouchableOpacity onPress={onGoogle} style={{ flex: 1 }}>
                        <View style={[styles.buttonLoginWithSocialMedia, { backgroundColor: '#F4B400' }]}>
                            <FastImage source={require("../../../../assets/image/google.png")} style={styles.smallLogo} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onFacebook} style={{ flex: 1 }}>
                        <View style={[styles.buttonLoginWithSocialMedia, { backgroundColor: '#526DA4' }]}>
                            <FastImage source={require("../../../../assets/image/facebook-logo.png")} style={styles.smallLogo} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.newUserContainer}>
                    <Text style={styles.newUserTxt}>New User?</Text>
                    <TouchableOpacity onPress={onCreateAccount}>
                        <Text style={styles.newUserBtn}>Create account</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </View>
    );
}
export default LoginScreen
