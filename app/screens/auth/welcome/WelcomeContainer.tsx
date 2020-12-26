import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive } from '../../../Redux/Actions/auth.action';
import Loading from '../../../components/loading/Loading';
import WelcomeScreen from "./WelcomeScreen"
import { PayloadCanActive } from '../../../interface/payload';
import { NavigationInterface } from '../../../interface/package';
import auth from '@react-native-firebase/auth';

interface Props {
    canActive: (payload: PayloadCanActive) => void,
    user: any,
    navigation: NavigationInterface,
    loading: boolean,


}
const WelcomerContainer = (props: Props) => {
    React.useEffect(() => {
        const payload: PayloadCanActive = { navigation: props.navigation, user: props.user }
        props.canActive(payload)
        // auth()
        //     .signOut()
        //     .then(() => console.log('User signed out!'));
        // return () => { }
    }, [])
    return (
        <WelcomeScreen
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
        canActive: (payload: PayloadCanActive) => { dispatch(canActive(payload)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomerContainer);
