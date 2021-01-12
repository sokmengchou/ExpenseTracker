import { StyleSheet } from "react-native";
import modules from "../../modules";
import { fontBold } from '../../../customs/customFont';
import _styles from "../../_styles";


export const styles = StyleSheet.create({
    name:{
        flexDirection: 'row', 
        alignItems: 'center',
    },
    //used/
    container: {
        flex: 1,
    },
    //used/
    inputName: {
        padding: modules.PADDING,
    },
    //used/
    containerIcon: {
        height: 38,
        width: 38,
        borderRadius: 19,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    //used/
    iconSearch: {
        fontSize: modules.FONT_H3,
        color: modules.BLACK,
    },
    
})