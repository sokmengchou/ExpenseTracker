import * as React from 'react';
import { View, Text, Alert, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { styles } from './RegisterStyle';
import _styles from '../../../_styles';
import modules from '../../../modules';
import TextInputWithoutIcon from '../../../components/text-input/TextInputWithoutIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';
import FastImage from 'react-native-fast-image';
import CloseButton from '../../../components/CloseButton';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
    progress: boolean
    onRegister: (email: string, password: string) => void
}

const RegisterScreen = ({ progress, onRegister }: Props) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    return (
        <View style={{ flex: 1, backgroundColor: modules.WHITE }}>
            <SafeAreaView />
            <CloseButton />
            <View style={styles.imgContainer}>
                <FastImage style={styles.img} source={require("../../../../assets/image/add.png")} />
            </View>
            <KeyboardAvoidingView
                enabled
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1, justifyContent: 'center' }}>
                {/* <View style={{backgroundColor:'rgba(255,255,255,0.8)'}}> */}
                    <TextInputWithoutIcon
                        style={{ ..._styles.shadowSmall }}
                        label={"Email and Username"}
                        placeholder={"Please enter Email and Username"}
                        onChangeText={text => setEmail(text)}
                        onSubmitEditing={() => Keyboard.dismiss()}
                    />
                    <TextInputWithoutIcon
                        style={{ ..._styles.shadowSmall }}
                        label={"Password"}
                        placeholder={"Please enter Password"}
                        onChangeText={text => setPassword(text)}
                        onSubmitEditing={() => Keyboard.dismiss()}
                    />
                    <TextInputWithoutIcon
                        style={{ ..._styles.shadowSmall }}
                        label={"Confirm Password"}
                        placeholder={"Please enter Confirm Password"}
                        onChangeText={text => setConfirmPassword(text)}
                        onSubmitEditing={() => Keyboard.dismiss()}
                    />
                    <PrimaryButton
                        style={{ paddingTop: modules.PADDING / 2 }}
                        text={"Register"}
                        progress={progress}
                        onPress={() => onRegister(email, password)}
                    />
                {/* </View> */}
            </KeyboardAvoidingView>

        </View>
    );
}
const _onRegister = (email: string, password: string, confirmPassword: string, onRegister: any) => {
    if (password !== confirmPassword) {
        Alert.alert("Password not match.")
        return
    }
    onRegister(email, password)
}
export default RegisterScreen
