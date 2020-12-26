import { StyleSheet } from "react-native";
import modules from "../../modules";
import { fontBold } from '../../../customs/customFont';
import _styles from "../../_styles";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: modules.PADDING,

    },
    back: {
        position: 'absolute',
        // zIndex:-1
    },
    profile: {
        height: modules.VIEW_PORT_WIDTH / 4,
        width: modules.VIEW_PORT_WIDTH / 4,
        borderRadius:modules.VIEW_PORT_WIDTH/8

    },
    profileContainer:{
    }
})