import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive, onLogOut, onProfileDetail } from '../../Redux/Actions/auth.action';
import Loading from '../../components/loading/Loading';
import { PayloadCanActive, PayloadGoProfileDetail, PayloadLogOut } from '../../interface/payload';
import { NavigationInterface } from '../../interface/package';
import SettingScreen from './SettingScreen';
import { UserInterface } from '../../interface';

interface Props {
    canActive: (payload: PayloadCanActive) => void,
    navigation: NavigationInterface,
    progress: boolean,
    logOut: (payload: PayloadLogOut) => void,
    account: UserInterface,
    goProfileDetail: (payload: PayloadGoProfileDetail) => void


}

const _logout = (logOut: (payload: PayloadLogOut) => void) => {
    const payload: PayloadLogOut = {

    }
    // console.log('payload :>> ', payload);
    logOut(payload)
}

const _goProfileDetail = (navigation: NavigationInterface, goProfileDetail: any) => {
    const payload: PayloadGoProfileDetail = {
        navigation: navigation
    }
    goProfileDetail(payload)
}


const SettingContainer = (props: Props) => {
    React.useEffect(() => {
        // const payload: PayloadCanActive = { navigation: props.navigation }
        // props.canActive(payload)
        // return () => { }
        console.log('props.accountL :>> ', props.account);

    }, [])
    return (
        <SettingScreen
            progress={props.progress}
            onLogOut={() => { _logout(props.logOut) }}
            account={props.account}
            onProfileDetail={() => props.navigation.navigate("PROFILE_DETAIL")}
        />

    );
}

const mapStateToProps = (state: any) => {
    return {
        loading: state.authReducer.loading,
        account: state.authReducer.account
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        canActive: (payload: PayloadCanActive) => { dispatch(canActive(payload)) },
        logOut: (payload: PayloadLogOut) => dispatch(onLogOut(payload)),
        goProfileDetail: (payload: PayloadGoProfileDetail) => dispatch(onProfileDetail(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
