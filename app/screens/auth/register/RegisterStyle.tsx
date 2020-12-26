import { StyleSheet } from "react-native";
import modules from "../../../modules";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:modules.WHITE
    },
    buttonLoginWithSocialMedia:{
        marginHorizontal: modules.PADDING/2,
        alignItems: 'center',
        borderRadius: modules.RADIUS,
        height:modules.VIEW_PORT_WIDTH/10,
        justifyContent:'center',
        backgroundColor:'red',
        
    },
    img: {
        width: modules.VIEW_PORT_WIDTH / 3,
        height: modules.VIEW_PORT_WIDTH / 3,
        
    },
    imgContainer:{
        alignItems:'center',
        padding:modules.PADDING
    },
})