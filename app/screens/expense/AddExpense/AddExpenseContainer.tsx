import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive } from '../../../Redux/Actions/auth.action';
import Loading from '../../../components/loading/Loading';
import { PayloadCanActive } from '../../../interface/payload';
import { NavigationInterface } from '../../../interface/package';
import AddExpenseScreen from './AddExpenseScreen';

interface Props {
    canActive: (payload: PayloadCanActive) => void,
    navigation: NavigationInterface,
    loading: boolean

}
const AddExpenseContainer = (props: Props) => {
    React.useEffect(() => {
        
    }, [])
    return (
        <AddExpenseScreen
            progress={props.loading}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseContainer);
