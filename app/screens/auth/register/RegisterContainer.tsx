import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive, onRegisterEmailPassword } from '../../../Redux/Actions/auth.action';
import Loading from '../../../components/loading/Loading';
import { PayloadCanActive, PayloadFetchData, PayloadLoginEmailPassword, PayloadRegisterEmailPassword } from '../../../interface/payload';
import { NavigationInterface } from '../../../interface/package';
import RegisterScreen from './RegisterScreen';
import { fetchUser } from '../../../Redux/Actions/test.action';
import { userInterface } from '../../../interface';

interface Props {
    canActive: (payload: PayloadCanActive) => void,
    navigation: NavigationInterface,
    progress: boolean,
    registerEmailPassword: (payload: PayloadRegisterEmailPassword) => void


}

const _registerEmailPassword = (email: string, password: string, loginEmailPassword: (payload: PayloadRegisterEmailPassword) => void) => {
    const payload: PayloadRegisterEmailPassword = {
        email: email,
        password: password
    }
    // console.log('payload :>> ', payload);
    loginEmailPassword(payload)
}
const RegisterContainer = (props: Props) => {
    React.useEffect(() => {
        // const payload: PayloadCanActive = { navigation: props.navigation }
        // props.canActive(payload)

    }, [])
    return (
        <RegisterScreen
            progress={props.progress}
            onRegister={(email, password) => { _registerEmailPassword(email, password, props.registerEmailPassword) }}

        />

    );
}

const mapStateToProps = (state: any) => {
    return {
        loading: state.authReducer.loading
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        canActive: (payload: PayloadCanActive) => { dispatch(canActive(payload)) },
        registerEmailPassword: (payload: PayloadRegisterEmailPassword) => dispatch(onRegisterEmailPassword(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
