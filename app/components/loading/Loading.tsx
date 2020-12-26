import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import modules from '../../modules';
interface LoadingProps {

}

const Loading = React.memo((props: LoadingProps) => {
    return (
        <>
        </>
    );

})

export default Loading;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: modules.PRIMARY,
    }
});
