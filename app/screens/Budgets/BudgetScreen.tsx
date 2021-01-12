import * as React from 'react';
import { View, StyleSheet, Text, ActivityIndicator, Button, Alert, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { styles } from './BudgetStyle';
import _styles from '../../_styles';
import MIcon from '../../components/MIcon';
import modules from '../../modules/';
import FastImage from 'react-native-fast-image';
import PrimaryButton from '../../components/PrimaryButton';
import TextInputWithoutIcon from '../../components/text-input/TextInputWithoutIcon';
import { fontBold } from '../../../customs/customFont';
import { color } from 'react-native-reanimated';
import { UserInterface } from '../../interface';

interface Props {
    
}


const BudgetScreen = ({  }: Props) => {
    return (
        <ImageBackground source={require("../../../assets/image/back2.png")} style={styles.container}>
            <SafeAreaView />
            
        </ImageBackground>
    );
}
export default BudgetScreen
