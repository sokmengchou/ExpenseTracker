import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive, onEditProfile, onLogOut } from '../../Redux/Actions/auth.action';
import Loading from '../../components/loading/Loading';
import { PayloadCanActive, PayloadEditProfile, PayloadLogOut } from '../../interface/payload';
import { NavigationInterface } from '../../interface/package';
import ProfileDetailScreen from './ProfileDetailScreen';
import { UserInterface } from '../../interface';

interface Props {
    account: UserInterface,
    navigation: NavigationInterface
    onEditProfile: (payload: PayloadEditProfile) => void,
    progress: boolean


}

const _onEditProfile = (firstName: string, lastName: string, email: string, gender: any, dateOfBirth: Date, account: UserInterface, navigation: NavigationInterface, onEditProfile: any) => {
    const payload: PayloadEditProfile = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender,
        dateOfBirth: dateOfBirth,
        account: account,
        navigation: navigation,
    }
    onEditProfile(payload)
}


const ProfileDetailContainer = (props: Props) => {
    React.useEffect(() => {
        // const payload: PayloadCanActive = { navigation: props.navigation }
        // props.canActive(payload)
        // return () => { }

    }, [])
    return (
        <ProfileDetailScreen
            navigation={props.navigation}
            account={props.account}
            progress={props.progress}
            onEditProfile={(firstName, lastName, email, gender, dateOfBirth) => _onEditProfile(firstName, lastName, email, gender, dateOfBirth, props.account, props.navigation, props.onEditProfile)}
        />

    );
}

const mapStateToProps = (state: any) => {
    return {
        loading: state.authReducer.loading,
        account: state.authReducer.account,
        progress: state.authReducer.progress
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        canActive: (payload: PayloadCanActive) => { dispatch(canActive(payload)) },
        onEditProfile: (payload: PayloadEditProfile) => { dispatch(onEditProfile(payload)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetailContainer);
