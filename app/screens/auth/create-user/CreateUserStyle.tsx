import { StyleSheet } from "react-native";
import modules from "../../../modules";

export const styles = StyleSheet.create({
    img: {
        width: modules.VIEW_PORT_WIDTH / 3,
        height: modules.VIEW_PORT_WIDTH / 3,
        
    },
    imgContainer:{
        alignItems:'center',
        padding:modules.PADDING
    },
    half: {
        flex: 1,
        marginHorizontal: - modules.PADDING / 2
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: modules.PADDING / 2
    },
})