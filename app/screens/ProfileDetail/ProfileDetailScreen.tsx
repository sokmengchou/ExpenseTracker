import * as React from 'react';
import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './ProfileDetailStyle';
import _styles from '../../_styles';
import Icon from 'react-native-vector-icons/AntDesign'
import modules from '../../modules/';
import TextInputWithoutIcon from '../../components/text-input/TextInputWithoutIcon';
import { fontBold } from '../../../customs/customFont';
import { UserInterface } from '../../interface';
import TextInputWithIcon from '../../components/text-input/TextInputWithIcon';
import ModalDate from '../../components/modal/ModalDate';
import ModalGender from '../../components/modal/ModalGender';
import { GENDER } from '../../dummy';
import { _formatShortDate } from '../../services/formatdate.service';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationInterface } from '../../interface/package';
import RightSave from '../../components/RightSave';

interface Props {
    account: UserInterface,
    navigation: NavigationInterface,
    progress: boolean,
    onEditProfile: (firstName: string, lastName: string, email: string, gender: any, dateOfBirth: Date) => void
}


const ProfileDetailScreen = ({ account, navigation, progress, onEditProfile  }: Props) => {
    const [firstName, setfirstName] = React.useState(account.firstName)
    const [lastName, setlastName] = React.useState(account.lastName)
    const [email, setEmail] = React.useState(account.email)
    const [gender, setGender] = React.useState(account.gender)
    const [modalGender, setModalGender] = React.useState(false)
    const [modal, setModal] = React.useState(false)
    const [dateOfBirth, setdateOfBirth] = React.useState(account.dateOfBirth)
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <RightSave
                        progress={progress}
                        onPress={() => { onEditProfile(firstName, lastName, email, gender, dateOfBirth)}}
                    />
                )
            }
        });
    }, [navigation, firstName, lastName, email, gender, dateOfBirth, progress]);
    return (
        <View style={styles.container}>
            <Text style={[styles.inputName, { ...fontBold, fontSize: 20 }]}>Profile Info.</Text>
            <View style={styles.name}>
                <View style={{ flex: 1, marginRight: - modules.PADDING / 2 }}>
                    <TextInputWithoutIcon
                        label={"First Name"}
                        onChangeText={(txt) => setfirstName(txt)}
                        placeholder={"First-Name"}
                        value={firstName}
                        onSubmitEditing={()=>{Keyboard.dismiss()}}
                    />
                </View>

                <View style={{ flex: 1, marginLeft: - modules.PADDING / 2 }}>
                    <TextInputWithoutIcon
                        label={"Last Name"}
                        onChangeText={(txt) => setlastName(txt)}
                        placeholder={"Last-Name"}
                        value={lastName}
                        onSubmitEditing={()=>{Keyboard.dismiss()}}
                    />
                </View>
            </View>

            <TextInputWithoutIcon
                label={"Email"}
                onChangeText={(txt) => setEmail(txt)}
                placeholder={"Email"}
                keyboardType={"email-address"}
                value={email}
                onSubmitEditing={()=>{Keyboard.dismiss()}}
            />


            <TextInputWithIcon
                onPress={() => setModalGender(!modalGender)}
                iconName={"keyboard-arrow-down"}
                name={gender ? gender.text : 'Gender'}
                label={"Gender"}
                placeholder={"Select gender"}
            />

            <TextInputWithIcon
                iconName="event"
                onPress={() => setModal(!modal)}
                name={_formatShortDate(dateOfBirth)}
                label={"Date of Birth"}
                placeholder={"Date of Birth"}
            />

            <ModalDate
                onBackdropPress={() => setModal(!modal)}
                isVisible={modal}
                date={dateOfBirth.atEnd}
                onDateChange={setdateOfBirth}
            />

            <ModalGender
                onBackdropPress={() => setModalGender(!modalGender)}
                onPress={(item) => { _seleteGender(item.value, setModalGender, setGender) }}
                isVisible={modalGender}
                data={GENDER}
            />
        </View>
    );
}
export default ProfileDetailScreen


const _seleteGender = (item: any, setModalGender: any, setGender: any) => {
    setGender(item)
    setModalGender(false)
}

const _renderRightSave = () => {
    return (
        <TouchableOpacity
            onPress={() => { }}
            style={styles.containerIcon} >
            <Icon style={styles.iconSearch} name={'save'} />
        </TouchableOpacity>
    );
}