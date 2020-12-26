import { StyleSheet } from "react-native";
import { FontGSansSemiBold } from "../../customs/customFont";
import modules from "../modules";

export const styles = StyleSheet.create({
    blurBar: {
        backgroundColor:modules.WHITE,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: 'rgba(0,0,0,.9)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: 2,
        elevation: 10,
    },
    newStore: {
        ...FontGSansSemiBold

    },
    containText: {
        paddingHorizontal: modules.PADDING,
    },
    containerCreateStore: {
        padding: 12,
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderColor: '#ececec',
    },
    iconSearch: {
        fontSize: modules.FONT_H3,
        color: modules.BLACK,
    },
    containerIcon: {
        height: 38,
        width: 38,
        borderRadius: 19,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems:'flex-end',
        marginTop: 100,
    },
    containModal: {
        borderRadius:4,
        padding: modules.PADDING,
        backgroundColor: modules.WHITE,

    },
})