import { StyleSheet } from "react-native";
import { fontBold } from "../../../../customs/customFont";
import modules from "../../../modules";
import _styles from "../../../_styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        ...fontBold,
        fontSize: modules.FONT_H2,
        paddingHorizontal: modules.PADDING,
        color: modules.WHITE
    },
    enterMoney: {
        flexDirection: 'row',
        // ..._styles.shadowSmall,
        marginHorizontal: modules.PADDING,
        // ..._styles.shadowSmall
    },
    left: {
        backgroundColor: modules.WHITE,
        padding: modules.PADDING,
        overflow: 'hidden',
        borderTopLeftRadius: modules.RADIUS*2,
        borderBottomLeftRadius: modules.RADIUS*2,
        borderWidth: 1,
        borderColor: modules.WHITE,
    },
    right: {
        ..._styles.flex1,
        borderWidth: 1,
        borderColor: modules.WHITE,
        borderBottomRightRadius: modules.RADIUS*2,
        borderTopRightRadius: modules.RADIUS*2,
        overflow: 'hidden',
    },
    incomeExpenseContainer: {
        flexDirection: 'row',
        paddingHorizontal: modules.PADDING / 2,
        marginVertical: modules.PADDING / 2,
        paddingTop: modules.PADDING / 2
    },
    radioBtn: {
        textAlign: 'center',
        ...fontBold
    },
    income: {
        flex: 1,
        padding: modules.PADDING,
        borderRadius: modules.RADIUS * 2,
        marginHorizontal: modules.PADDING / 2,
    },
    expense: {
        flex: 1,
        backgroundColor: modules.WHITE,
        alignItems: 'center',
        padding: modules.PADDING,
        borderRadius: modules.RADIUS,
        marginHorizontal: modules.PADDING / 2,
        // ..._styles.shadowSmall
    },
    category: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: modules.PADDING,
        ..._styles.shadowSmall,
        backgroundColor: modules.WHITE,
        marginHorizontal: modules.PADDING,
        marginVertical: modules.PADDING / 2,
        borderRadius: modules.RADIUS * 2
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 80,
        backgroundColor: modules.SUB_TITLE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    back: {
        position: 'absolute',
        // zIndex:-1
    },
})