import * as React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ImageBackground, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './AddExpenseStyle';
import _styles from '../../../_styles';
import modules from '../../../modules';
import FastImage from 'react-native-fast-image';
import { fontBold } from '../../../../customs/customFont';
import Icon from 'react-native-vector-icons/MaterialIcons'
import ModalDate from '../../../components/modal/ModalDate';
import { _formatShortDate } from '../../../services/formatdate.service';
import ModalCategory from '../../../components/modal/ModalCategory';
import { CATEGORY, TYPE_TRANSACTION } from '../../../dummy';
import RadioButtonRN from 'radio-buttons-react-native';


interface Props {
    progress: boolean

}

const AddExpenseScreen = ({ progress }: Props) => {
    const [amount, setAmount] = React.useState('')
    const [date, setDate] = React.useState("")
    const [modalDate, setModalDate] = React.useState(false)
    const [modalCategory, setModalCategory] = React.useState(false)
    const [note, setNote] = React.useState('')
    const [category, setCategory] = React.useState<any>(null)

    return (
        <ImageBackground source={require("../../../../assets/image/back2.png")} style={styles.container}>
            <SafeAreaView />
            <Text style={styles.title}>Add Transaction</Text>


            <KeyboardAvoidingView
                enabled
                behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                <View style={{ flex: 1, }}></View>

                <View style={styles.enterMoney}>
                    <View style={styles.left}>
                        <Text style={{ ...fontBold }}>USD</Text>
                    </View>
                    <View style={styles.right}>
                        <TextInput
                            style={{ flex: 1, textAlign: 'center', color: modules.WHITE, ...fontBold }}
                            placeholder={"Please enter the amount of money"}
                            placeholderTextColor={modules.WHITE}
                            keyboardType={'number-pad'}
                            onChangeText={(txt) => setAmount(txt)}
                            onSubmitEditing={() => { Keyboard.dismiss() }}
                        />
                    </View>
                </View>
                {/* <View style={styles.incomeExpenseContainer}>
                    <TouchableOpacity style={styles.income}>
                        <Text style={{ ...fontBold }}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.expense}>
                        <Text style={{ ...fontBold }}>Expense</Text>

                    </TouchableOpacity>
                </View> */}

                <RadioButtonRN
                    data={TYPE_TRANSACTION}
                    style={styles.incomeExpenseContainer}
                    boxStyle={styles.income}
                    activeColor={"#a4ff07"}
                    boxActiveBgColor={"#a4ff07"}
                    textStyle={styles.radioBtn}
                    deactiveColor={"#FFF"}
                    icon={<></>}
                />

                <View style={{ flex: 1 }} />
                <TouchableOpacity onPress={() => setModalCategory(!modalCategory)} style={styles.category}>
                    <View style={styles.icon}>
                        <FastImage style={{ height: 20, width: 20 }} source={require("../../../../assets/image/beers.png")} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...fontBold }}>{category?.text ? category?.text : "Category"}</Text>
                    </View>
                    <Icon style={{ fontSize: modules.FONT_H4 }} name={"keyboard-arrow-down"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalDate(!modalDate)} style={styles.category}>
                    <View style={styles.icon}>
                        <FastImage style={{ height: 20, width: 20 }} source={require("../../../../assets/image/calendar.png")} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...fontBold }}>{(date) ? _formatShortDate(date) : "Date"}</Text>
                    </View>
                    <Icon style={{ fontSize: modules.FONT_H4 }} name={"keyboard-arrow-down"} />
                </TouchableOpacity>
                <View style={styles.category}>
                    <View style={styles.icon}>
                        <FastImage style={{ height: 20, width: 20 }} source={require("../../../../assets/image/sticky-note.png")} />
                    </View>

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TextInput
                            style={{ textAlign: 'center', ...fontBold }}
                            placeholder={"Please enter note here"}
                            placeholderTextColor={modules.BLACK}
                            onChangeText={(note) => setNote(note)}
                            onSubmitEditing={() => { Keyboard.dismiss() }}
                        />
                    </View>

                </View>
                <View style={{ flex: 1 }} />
            </KeyboardAvoidingView>

            <ModalDate
                onBackdropPress={() => setModalDate(!modalDate)}
                isVisible={modalDate}
                date={date}
                onDateChange={setDate}
            />

            <ModalCategory
                onBackdropPress={() => setModalCategory(!modalCategory)}
                onPress={(item) => { _seleteCategory(item.value, setModalCategory, setCategory) }}
                isVisible={modalCategory}
                data={CATEGORY} />
        </ImageBackground >

    );
}

const _seleteCategory = (item: any, setModalCategory: any, setCategory: any) => {
    setCategory(item)
    setModalCategory(false)
}

export default AddExpenseScreen
