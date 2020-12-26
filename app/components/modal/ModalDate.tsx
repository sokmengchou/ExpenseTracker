import React from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import Modal from 'react-native-modal';
import _styles from '../../_styles';
import modules from '../../modules';
import DatePicker from 'react-native-date-picker';

interface Props {
    onBackdropPress: () => void
    isVisible: boolean,
    date?: any,
    onDateChange?: any,
    minimumDate?: any

}

const ModalDate = (props: Props) => {
    return (
        <KeyboardAvoidingView>
            <Modal
                onBackdropPress={props.onBackdropPress}
                style={[styles.modal,]}
                isVisible={props.isVisible}
                backdropColor={'rgba(0,0,0,.2)'}
                animationIn="fadeInUp"
                animationOut="fadeOutDown"
                animationOutTiming={300}
                animationInTiming={300}
            >
                <View style={[styles.containModal, _styles.shadowSmall, _styles.center]}>
                    <DatePicker
                        date={props.date}
                        mode="date"
                        onDateChange={props.onDateChange}
                        minimumDate={props.minimumDate}
                    />
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        margin: 0
    },
    containModal: {
        borderTopLeftRadius: modules.RADIUS*4,
        borderTopRightRadius: modules.RADIUS*4,
        padding: 12,
        backgroundColor: 'rgba(255,255,255,0.85)',
        height: modules.VIEW_PORT_WIDTH / 2
    },
})

export default ModalDate