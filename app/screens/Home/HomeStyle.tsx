import { StyleSheet } from "react-native";
import { fontBold } from "../../../customs/customFont";
import modules from "../../modules";
import _styles from "../../_styles";

export const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
    },
    back: {
        position: 'absolute',
        // zIndex:-1
    },
    front: {
        zIndex:1
        // flex:1
    },
    horizontal: {
        flexDirection: 'row',
        paddingVertical: modules.PADDING,
        paddingHorizontal: modules.PADDING / 2
    },
    smallCard: {
        padding: modules.PADDING,
        alignItems: 'center',
        width: modules.VIEW_PORT_WIDTH / 3,
        backgroundColor: "rgba(255,255,255,0.75)",
        borderRadius: modules.RADIUS * 2,
        position: 'relative',
        zIndex: 1,
        marginHorizontal: modules.PADDING / 2


    },
    smallCardLogo: {
        height: 20,
        width: 20
    },
    smallCardLogoContainer: {
        borderRadius: 40,
        backgroundColor: modules.SUB_TITLE,
        padding: modules.PADDING
    },
    chart: {
        ..._styles.shadowSmall,
        alignItems:'center',
    },
    viewTransactionContainer:{
        padding:modules.PADDING,
        alignItems:'center',
        // backgroundColor: "rgba(255,255,255,0.75)",
        backgroundColor:modules.WHITE,
        borderRadius:modules.RADIUS*2,
        marginHorizontal:modules.PADDING,
        marginBottom:modules.PADDING,
        // ..._styles.shadowSmall
    }

})