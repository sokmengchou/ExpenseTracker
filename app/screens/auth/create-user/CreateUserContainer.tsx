import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive, onCreateUser } from '../../../Redux/Actions/auth.action';
import Loading from '../../../components/loading/Loading';
import { PayloadCanActive, PayloadCreateUser } from '../../../interface/payload';
import { NavigationInterface } from '../../../interface/package';
import CreateUserScreen from './CreateUserScreen';
import { UserCanActive } from '../../../interface';


interface Props {
    canActive: (payload: PayloadCanActive) => void,
    navigation: NavigationInterface,
    progress: boolean,
    account: UserCanActive,
    onCreateUser: (payload: PayloadCreateUser) => void

}

const _onCreateUser = (firstName: string, lastName: string, gender: any, dateOfBirth: Date, account: UserCanActive, navigation: NavigationInterface, onCreateUser: any) => {
    const payload: PayloadCreateUser = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        dateOfBirth: dateOfBirth,
        account: account,
        navigation: navigation
    }
    onCreateUser(payload)
    console.log('payload :>> ', payload);
}


const CreateUserContainer = (props: Props) => {
    React.useEffect(() => {

        return () => { }
    }, [])
    return (
        <CreateUserScreen
            progress={props.progress}
            onCreateUser={(firstName, lastName, gender, dateOfBirth) => _onCreateUser(firstName, lastName, gender, dateOfBirth, props.account, props.navigation, props.onCreateUser)}
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
        onCreateUser: (payload: PayloadCreateUser) => { dispatch(onCreateUser(payload)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserContainer);

