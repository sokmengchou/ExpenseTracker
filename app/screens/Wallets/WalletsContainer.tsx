import * as React from 'react';
import { connect } from 'react-redux';
import WalletsScreen from './WalletsScreen';

interface Props {
}

const WalletsContainer = (props: Props) => {
    React.useEffect(() => {
    }, [])
    return (
        <WalletsScreen
            
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

export default connect(mapStateToProps, mapDispatchToProps)(WalletsContainer);
