import * as React from 'react';
import { View, StyleSheet, Text, ActivityIndicator, Button, Alert } from 'react-native';
import { styles } from './WelcomeStyle';
import SafeArea from '../../../components/SafeArea';
import _styles from '../../../_styles';
import MIcon from '../../../components/MIcon';
import modules from '../../../modules';
import { NavigationInterface } from '../../../interface/package';

interface Props {

}

const WelcomeScreen = ({ }: Props) => {
    return (
        <SafeArea style={[_styles.center, styles.container]}>
            <ActivityIndicator color={modules.PRIMARY} />

        </SafeArea>
    );
}
export default WelcomeScreen
