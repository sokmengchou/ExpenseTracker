import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { NavigationInterface } from '../../../../interface/package';
import { PayloadFetchCategory } from '../../../../interface/payload';
import { onFetchCategory } from '../../../../Redux/Actions/auth.action';
import CategoryScreen from './CategoryScreen';

interface Props {
    loading: boolean
    navigation: NavigationInterface
    categoryDocs: Array<any>
    refreshToken: string
    onFetchCategory: (payload: PayloadFetchCategory) => void
    categoryLoading: boolean
}

const _onSelectedCategory=(selectedCategory:any,navigation:any)=>{
    navigation.navigate('Add', { selectedCategory: selectedCategory })    
}

const CategoryContainer = (props: Props) => {
    React.useEffect(() => {
        const payload: PayloadFetchCategory = {
            refreshToken: props.refreshToken
        }
        props.onFetchCategory(payload)
    }, [])
    return (
        <CategoryScreen
            onSelectedCategory={(selectedCategory) => _onSelectedCategory(selectedCategory,props.navigation)}
            progress={props.loading}
            onBack={() => props.navigation.goBack()}
            categoryDocs={props.categoryDocs}
        />
    );
}

const mapStateToProps = (state: any) => {
    return {
        loading: state.authReducer.loading,
        categoryDocs: state.dataReducer.categoryDocs,
        refreshToken: state.authReducer.refreshToken,
        categoryLoading: state.dataReducer.loading
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onFetchCategory: (payload: PayloadFetchCategory) => {
            dispatch(onFetchCategory(payload))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
