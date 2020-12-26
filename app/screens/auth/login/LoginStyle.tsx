import { StyleSheet } from "react-native";
import modules from "../../../modules";
import _styles from "../../../_styles";

export const styles = StyleSheet.create({
    boxTop: {
        flex: 1,
        justifyContent: 'center'
    },
    newUserBtn: {
        textAlign: 'center',
        paddingHorizontal: modules.PADDING / 2,
        paddingVertical: modules.PADDING,
        color: modules.ACTIVE
    },
    newUserTxt: {
        textAlign: 'center',
        paddingVertical: modules.PADDING
    },
    newUserContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    socialBtn: {
        flexDirection: 'row',
        paddingHorizontal: modules.PADDING / 2
    },
    loginBtn: {
        ..._styles.shadowSmall,
        paddingTop: modules.PADDING / 2
    },
    logo: {
        width: modules.VIEW_PORT_WIDTH,
        height: modules.VIEW_PORT_WIDTH / 2,
    },
    smallLogo: {
        width: 25,
        height: 25,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: modules.WHITE
    },
    buttonLoginWithSocialMedia: {
        marginHorizontal: modules.PADDING / 2,
        alignItems: 'center',
        borderRadius: modules.RADIUS,
        height: modules.VIEW_PORT_WIDTH / 10,
        justifyContent: 'center',

    },
    glassContainer: {
        flex: 1,
        // justifyContent:'center'
        // padding:modules.PADDING
        // backgroundColor:'rgba(255,255,255,0.8)',
        // borderRadius:modules.RADIUS,
    }
})