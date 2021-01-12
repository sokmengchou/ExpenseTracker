import * as React from 'react'
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { styles } from './style'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PersonalInfoColmn from '../components/PersonalInfoColmn';

export const _renderProductRightNavigation = (navigation: any, routeName: string, param?: any, icon?: string) => {
    const [modalAdd, setModalAdd] = React.useState(false)
    return (
        <>
            {
                modalAdd ?
                    <TouchableOpacity
                        onPress={() => setModalAdd(!modalAdd)}
                        style={styles.containerIcon} >
                        <Icon style={styles.iconSearch} name={"close"} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={() => setModalAdd(!modalAdd)}
                        style={styles.containerIcon} >
                        <Icon style={styles.iconSearch} name={"add"} />
                    </TouchableOpacity>
            }

            <Modal
                onBackdropPress={() => setModalAdd(!modalAdd)}
                style={[styles.modal, { backgroundColor: "transparent" }]}
                isVisible={modalAdd}
                backdropColor="transparent"
                animationIn="fadeInDown"
                animationOut="fadeOutUp"
                animationInTiming={300}
                animationOutTiming={300}
            >
                <View style={[styles.containModal,]}>
                    <PersonalInfoColmn name='select1' text='Add new inventory' onPress={() => { _addNewInventory(navigation, setModalAdd) }} />
                    <PersonalInfoColmn name='exception1' text='Add new non-inventory' onPress={() => { }} />
                    <PersonalInfoColmn name='switcher' text='Add new bundle' onPress={() => { }} />

                </View>
            </Modal>
        </>
    );
}

export const _renderRightNavigation = (navigation: any, routeName: string, param?: any, icon?: string) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routeName, { ...param })}
            style={styles.containerIcon} >
            <Icon style={styles.iconSearch} name={icon ? icon : "add"} />
        </TouchableOpacity>
    );
}

const _addNewInventory = (navigation: any, setModalAdd: any) => {
    setModalAdd(false)
    setTimeout(() => {
        navigation.navigate("ADDSTOREPRODUCT")
    }, 500);

}

export const _renderRightSave = (param: any, progress: boolean, onSave: any) => {
    return (
        <TouchableOpacity
            disabled={progress}
            onPress={() => { onSave(param) }}
            style={styles.containerIcon} >
            {
                progress ? <ActivityIndicator />
                    :
                    <Icon style={styles.iconSearch} name={'save'} />
            }

        </TouchableOpacity>
        
    );
}