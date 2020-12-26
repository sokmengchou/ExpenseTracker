import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive, onFacebook, onGoogle, onLoginEmailPassword } from '../../../Redux/Actions/auth.action';
import Loading from '../../../components/loading/Loading';
import { PayloadCanActive, PayloadLoginEmailPassword, PayloadOnFacebook, PayloadOnGoogle } from '../../../interface/payload';
import { NavigationInterface } from '../../../interface/package';
import LoginScreen from './LoginScreen';
import { fetchUser } from '../../../Redux/Actions/test.action';

interface Props {
    canActive: (payload: PayloadCanActive) => void,
    navigation: NavigationInterface,
    loading: boolean,
    loginEmailPassword: (payload: PayloadLoginEmailPassword) => void
    progress: boolean,
    onFacebook: (payload: PayloadOnFacebook) => void,
    onGoogle: (payload: PayloadOnGoogle) => void,





}

const _onFacebook = (onFacebook: (payload: PayloadOnFacebook) => void) => {
    const payload: PayloadOnFacebook = {

    }
    console.log('object :>> ');
    onFacebook(payload)
}

const _onGoogle = (onGoogle: (payload: PayloadOnGoogle) => void) => {
    const payload: PayloadOnGoogle = {

    }
    onGoogle(payload)
}

const _loginEmailPassword = (email: string, password: string, loginEmailPassword: (payload: PayloadLoginEmailPassword) => void) => {
    const payload: PayloadLoginEmailPassword = {
        email: email,
        password: password
    }
    loginEmailPassword(payload)
    console.log('payload :>> ', payload);

}
const LoginContainer = (props: Props) => {
    React.useEffect(() => {
        return () => { }
    }, [])
    return (
        <LoginScreen
            progress={props.progress}
            loginEmailPassword={(email, password) => { _loginEmailPassword(email, password, props.loginEmailPassword) }}
            onCreateAccount={() => props.navigation.navigate("REGISTER")}
            onFacebook={() => _onFacebook(props.onFacebook)}
            onGoogle={() => _onGoogle(props.onGoogle)}

        />

    );
}

const mapStateToProps = (state: any) => {
    return {
        loading: state.authReducer.loading,
        progress: state.authReducer.progress
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        canActive: (payload: PayloadCanActive) => dispatch(canActive(payload)),
        loginEmailPassword: (payload: PayloadLoginEmailPassword) => dispatch(onLoginEmailPassword(payload)),
        onFacebook: (payload: PayloadOnFacebook) => dispatch(onFacebook(payload)),
        onGoogle: (payload: PayloadOnGoogle) => dispatch(onGoogle(payload))

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
