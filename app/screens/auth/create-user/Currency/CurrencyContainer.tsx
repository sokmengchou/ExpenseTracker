import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive, onCreateUser } from '../../../../Redux/Actions/auth.action';
import Loading from '../../../../components/loading/Loading';
import { PayloadCanActive, PayloadCreateUser, PayloadFetchCurrency, PayloadSelectedCurrency } from '../../../../interface/payload';
import { NavigationInterface } from '../../../../interface/package';
import { UserCanActive } from '../../../../interface';
import { onFetchCurrency, onSelectedCurrency } from '../../../../Redux/Actions/data.action';
import CurrencyScreen from './CurrencyScreen';


interface Props {
    navigation: NavigationInterface
    loading: boolean
    currencyDocs: Array<any>
    onSelectedCurrency: (payload: PayloadSelectedCurrency) => void

}

const _onSelectedCurrency = (selectedCategory: any, navigation: any, onSelectedCurrency: any) => {
    const payload: PayloadSelectedCurrency = {
        navigation: navigation,
        selectedCurrency: selectedCategory
    }
    onSelectedCurrency(payload)
}

const CurrencyContainer = (props: Props) => {
    React.useEffect(() => {

        return () => { }
    }, [])
    console.log('props.currencyDocs :>> ', props.currencyDocs);
    return (
        <CurrencyScreen
            onBack={() => props.navigation.goBack()}
            progress={props.loading}
            onSelectedCurrency={(selectedCurrency) => _onSelectedCurrency(selectedCurrency, props.navigation, props.onSelectedCurrency)}
            currencyDocs={props.currencyDocs}

        />


    );
}

const mapStateToProps = (state: any) => {
    return {
        loading: state.authReducer.loading,
        currencyDocs: state.dataReducer.currencyDocs

    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSelectedCurrency: (payload: PayloadSelectedCurrency) => dispatch(onSelectedCurrency(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyContainer);

