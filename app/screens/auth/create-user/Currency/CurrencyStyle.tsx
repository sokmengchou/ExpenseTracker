import { StyleSheet } from "react-native";
import { fontBold } from "../../../../../customs/customFont";
import modules from "../../../../modules";

export const styles = StyleSheet.create({
    headerObj: {
        fontSize: modules.FONT_H3,
        ...fontBold
    },
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: modules.PADDING,
        alignItems: 'center'
    },
    categoryList:{
        flexDirection:'row',
        flexWrap:'wrap',
        padding:modules.PADDING/2,
        justifyContent:'center'
    },
    row:{
        flexDirection:'row',
        margin:modules.PADDING/2
    }
})