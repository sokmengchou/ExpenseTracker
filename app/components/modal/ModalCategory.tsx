import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal';
import _styles from '../../_styles';
import modules from '../../modules';
import GenderIcon from 'react-native-vector-icons/Fontisto';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GENDER } from '../../dummy';



interface Props {
    onBackdropPress: () => void
    onPress: (item: any) => void
    isVisible: boolean,
    data:any

}

const ModalCategory = (props: Props) => {
    return (

        <Modal
            onBackdropPress={props.onBackdropPress}
            style={[styles.modal]}
            isVisible={props.isVisible}
            backdropColor={'rgba(0,0,0,.2)'}
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            animationOutTiming={300}
            animationInTiming={300}
        >
            <ScrollView style={[styles.containModal, _styles.cardShadow]}>

                <View style={styles.ping} />
                {props.data?props.data.map((item:any) => {
                    console.log('item :>> ', item);
                    return (
                        <TouchableOpacity onPress={() => { props.onPress(item) }}
                            style={[styles.phonenumberContainer, { justifyContent: 'center', marginBottom: 0, marginHorizontal: 0 }]}>

                            <View style={{ width: modules.VIEW_PORT_WIDTH / 3, flexDirection: 'row', alignItems: "center", flex:1 }}>
                                <Text style={styles.inputName}>
                                    {item.id}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }):null}
                <SafeAreaView />

            </ScrollView>
        </Modal>
    )
}



const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        margin: 0
    },
    containModal: {
        // justifyContent:'center',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(255,255,255,0.85)',
        height: modules.VIEW_PORT_WIDTH
    },
    ping: {
        height: 8,
        width: modules.VIEW_PORT_WIDTH / 10,
        alignSelf:'center',
        borderRadius: 6,
        backgroundColor: modules.BORDER_COLOR,
        margin:12
    },
    phonenumberContainer:{
        flexDirection:'row',
        alignItems:'center',
        margin:modules.PADDING,
        borderRadius:modules.RADIUS,
        ..._styles.shadowSmall,
        backgroundColor:modules.WHITE,
        
       
    },
    iconDown: {
        fontSize: modules.FONT_H6-1,
        color: modules.SUB_TEXT,
        paddingHorizontal:modules.PADDING
    },
    inputName:{
        padding:modules.PADDING,
    },
})

export default ModalCategory