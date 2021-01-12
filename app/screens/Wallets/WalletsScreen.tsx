import * as React from 'react';
import {  SafeAreaView, ImageBackground } from 'react-native';
import { styles } from './WalletsStyle';
import _styles from '../../_styles';

interface Props {
    
}


const WalletsScreen = ({  }: Props) => {
    return (
        <ImageBackground source={require("../../../assets/image/back2.png")} style={styles.container}>
            <SafeAreaView />
            
        </ImageBackground>
    );
}
export default WalletsScreen
