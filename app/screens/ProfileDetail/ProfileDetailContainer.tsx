import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive, onLogOut } from '../../Redux/Actions/auth.action';
import Loading from '../../components/loading/Loading';
import { PayloadCanActive, PayloadLogOut } from '../../interface/payload';
import { NavigationInterface } from '../../interface/package';
import ProfileDetailScreen from './ProfileDetailScreen';
import { UserInterface } from '../../interface';

interface Props {
    

}




const ProfileDetailContainer = (props: Props) => {
    React.useEffect(() => {
        // const payload: PayloadCanActive = { navigation: props.navigation }
        // props.canActive(payload)
        // return () => { }

    }, [])
    return (
        <ProfileDetailScreen
           
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
        

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetailContainer);
