import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import Loading from '../../components/loading/Loading';
import { NavigationInterface } from '../../interface/package';
import TransactionScreen from './TransactionScreen';
import { UserInterface } from '../../interface';

interface Props {
    


}




const TransactionContainer = (props: Props) => {
    React.useEffect(() => {
        // const payload: PayloadCanActive = { navigation: props.navigation }
        // props.canActive(payload)
        // return () => { }

    }, [])
    return (
        <TransactionScreen
            
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
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionContainer);
