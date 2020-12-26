import * as React from 'react';
import { View, Text, SafeAreaView, Keyboard } from 'react-native';
import { styles } from './CreateUserStyle';
import _styles from '../../../_styles';
import MIcon from '../../../components/MIcon';
import modules from '../../../modules';
import TextInputWithoutIcon from '../../../components/text-input/TextInputWithoutIcon';
import PrimaryButton from '../../../components/PrimaryButton';
import TextInputWithIcon from '../../../components/text-input/TextInputWithIcon';
import FastImage, { Source } from "react-native-fast-image"
import { fontBold } from '../../../../customs/customFont';
import ModalGender from '../../../components/modal/ModalGender';
import { GENDER, CURRENCY } from '../../../dummy';
import ModalDate from '../../../components/modal/ModalDate';
import { _formatShortDate } from '../../../services/formatdate.service';
import ModalCurrency from '../../../components/modal/ModalCurrency';



interface Props {
    progress: boolean
    onCreateUser: (firstName: string, lastName: string, gender: any, dateOfBirth: any) => void
}

const CreateUserScreen = ({ progress, onCreateUser }: Props) => {
    const [firstName, setfirstName] = React.useState('')
    const [lastName, setlastName] = React.useState('')
    const [gender, setGender] = React.useState<any>()
    const [modalGender, setModalGender] = React.useState(false)
    const [modalDateOfBirth, setModalDateOfBirth] = React.useState(false)
    const [dateOfBirth, setdateOfBirth] = React.useState(new Date())
    const [modalCurrency, setModalCurrency] = React.useState(false)
    const [currency, setCurrency] = React.useState<any>()

    return (
        <SafeAreaView style={{ backgroundColor: modules.WHITE, flex: 1 }}>
            <Text style={[{ padding: modules.PADDING, fontWeight: 'bold' }]}>Please fill out your information to continue</Text>
            <View style={styles.imgContainer}>
                <FastImage style={styles.img} source={require("../../../../assets/image/business-partnership.png")} />
            </View>
            <View style={styles.name}>
                <View style={styles.half}>
                    <TextInputWithoutIcon
                        style={{ ..._styles.shadowSmall }}
                        label={"First name"}
                        placeholder={"Please enter your first-name"}
                        onSubmitEditing={() => { Keyboard.dismiss() }}
                        onChangeText={(txt) => setfirstName(txt)}
                    />
                </View>
                <View style={styles.half}>
                    <TextInputWithoutIcon
                        style={{ ..._styles.shadowSmall }}
                        label={"Last name"}
                        placeholder={"Please enter your last-name"}
                        onChangeText={(txt) => setlastName(txt)}
                        onSubmitEditing={() => { Keyboard.dismiss() }}

                    />
                </View>
            </View>
            <TextInputWithIcon
                style={{ ..._styles.shadowSmall }}
                onPress={() => setModalCurrency(!modalCurrency)}
                iconName={"keyboard-arrow-down"}
                name={currency ? currency.name : 'Currency'}
                label={"Currency *"}
                placeholder="Select currency"
            />

            <TextInputWithIcon
                style={{ ..._styles.shadowSmall }}
                onPress={() => setModalGender(!modalGender)}
                iconName={"keyboard-arrow-down"}
                name={gender ? gender.text : 'Gender'}
                label={"Gender *"}
                placeholder="Select gender"
            />

            <TextInputWithIcon
                style={{ ..._styles.shadowSmall }}
                iconName={"keyboard-arrow-down"}
                onPress={() => setModalDateOfBirth(!modalDateOfBirth)}
                name={_formatShortDate(dateOfBirth)}
                label={"Date of birth *"}
                placeholder="Select date of birth"
            />
            <PrimaryButton
                style={{ paddingTop: modules.PADDING / 2 }}
                text={"Go"}
                progress={progress}
                onPress={() => onCreateUser(firstName, lastName, gender, dateOfBirth)}

            />

            <ModalDate
                onBackdropPress={() => setModalDateOfBirth(!modalDateOfBirth)}
                isVisible={modalDateOfBirth}
                date={dateOfBirth}
                onDateChange={setdateOfBirth}
            />

            <ModalCurrency
                onBackdropPress={() => setModalCurrency(!currency)}
                onPress={(item) => { _selectCurrency(item.name, setModalCurrency, setCurrency) }}
                isVisible={modalGender}
                data={CURRENCY}
            />

            <ModalGender
                onBackdropPress={() => setModalGender(!modalGender)}
                onPress={(item) => { _selectGender(item.value, setModalGender, setGender) }}
                isVisible={modalGender}
                data={GENDER}
            />
        </SafeAreaView>
    );
}
const _selectGender = (item: any, setModalGender: any, setGender: any) => {
    setGender(item)
    setModalGender(false)
}

const _selectCurrency = (item: any, setModalCurrency: any, setCurrency: any) => {
    setCurrency(item)
    setModalCurrency(false)
}
export default CreateUserScreen

