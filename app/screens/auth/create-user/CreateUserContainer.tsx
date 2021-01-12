import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive, onCreateUser } from '../../../Redux/Actions/auth.action';
import Loading from '../../../components/loading/Loading';
import { PayloadCanActive, PayloadCreateUser, PayloadFetchCurrency } from '../../../interface/payload';
import { NavigationInterface } from '../../../interface/package';
import CreateUserScreen from './CreateUserScreen';
import { UserCanActive } from '../../../interface';
import { onFetchCurrency } from '../../../Redux/Actions/data.action';


interface Props {
    canActive: (payload: PayloadCanActive) => void,
    navigation: NavigationInterface,
    progress: boolean,
    account: UserCanActive,
    onCreateUser: (payload: PayloadCreateUser) => void,
    currencyDocs: Array<any>,
    refreshToken: string,
    onFetchCurrency: (payload: PayloadFetchCurrency) => void
    selectedCurrency: any

}

const _onSelectedCurrency = (selectedCurrency: any, navigation: any) => {
    navigation.navigate('CREATE_USER', { selectedCurrency: selectedCurrency })
}

const _onCreateUser = (firstName: string, lastName: string, selectedCurrency: any, gender: any, dateOfBirth: Date, account: UserCanActive, navigation: NavigationInterface, onCreateUser: any) => {
    const payload: PayloadCreateUser = {
        firstName: firstName,
        lastName: lastName,
        selectedCurrency: selectedCurrency,
        gender: gender,
        dateOfBirth: dateOfBirth,
        account: account,
        navigation: navigation,
    }
    onCreateUser(payload)
    console.log('payload :>> ', payload);
}


const CreateUserContainer = (props: Props) => {
    React.useEffect(() => {
        const payload: PayloadFetchCurrency = {
            refreshToken: props.refreshToken
        }
        props.onFetchCurrency(payload)
        return () => { }
    }, [])
    return (
        <CreateUserScreen
            progress={props.progress}
            onCreateUser={(firstName, lastName, selectedCurrency, gender, dateOfBirth) => _onCreateUser(firstName, lastName, selectedCurrency, gender, dateOfBirth, props.account, props.navigation, props.onCreateUser)}
            onCurrency={() => props.navigation.navigate("CURRENCY")}
            currencyDocs={props.currencyDocs}
            selectedCurrency={props.selectedCurrency}
        />

    );
}

const mapStateToProps = (state: any) => {
    return {
        loading: state.authReducer.loading,
        account: state.authReducer.account,
        progress: state.authReducer.progress,
        currencyDocs: state.dataReducer.currencyDocs,
        refreshToken: state.authReducer.refreshToken,
        currencyLoading: state.dataReducer.loading,
        selectedCurrency: state.dataReducer.selectedCurrency
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        canActive: (payload: PayloadCanActive) => { dispatch(canActive(payload)) },
        onCreateUser: (payload: PayloadCreateUser) => { dispatch(onCreateUser(payload)) },
        onFetchCurrency: (payload: PayloadFetchCurrency) => {
            dispatch(onFetchCurrency(payload))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserContainer);

