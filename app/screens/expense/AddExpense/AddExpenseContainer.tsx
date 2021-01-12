import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { canActive, onFetchCategory } from '../../../Redux/Actions/auth.action';
import Loading from '../../../components/loading/Loading';
import { PayloadCanActive, PayloadFetchCategory } from '../../../interface/payload';
import { NavigationInterface } from '../../../interface/package';
import AddExpenseScreen from './AddExpenseScreen';
import { RoutesNavigationInterface } from '../../../interface';

interface Props {
    canActive: (payload: PayloadCanActive) => void,
    navigation: NavigationInterface,
    loading: boolean,
    onFetchCategory: (payload: PayloadFetchCategory) => void
    refreshToken: string,
    categoryDocs: Array<any>,
    categoryLoading: boolean
    route: RoutesNavigationInterface
}
const AddExpenseContainer = (props: Props) => {
    React.useEffect(() => {
        console.log('props.route :>> ', props.route);
        const payload: PayloadFetchCategory = {
            refreshToken: props.refreshToken
        }
        props.onFetchCategory(payload)
        // console.log('props.refreshToken :>> ', props.refreshToken);
    }, [])
    return (
        <AddExpenseScreen
            route={props.route}
            categoryDocs={props.categoryDocs}
            onCategory={() => props.navigation.navigate("CATEGORY")}
            categoryLoading={props.categoryLoading}
            progress={props.loading}
        />

    );


}

const mapStateToProps = (state: any) => {
    return {
        loading: state.authReducer.loading,
        refreshToken: state.authReducer.refreshToken,
        categoryDocs: state.dataReducer.categoryDocs,
        categoryLoading: state.dataReducer.loading
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        canActive: (payload: PayloadCanActive) => {
            dispatch(canActive(payload))
        },
        onFetchCategory: (payload: PayloadFetchCategory) => {
            dispatch(onFetchCategory(payload))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseContainer);
