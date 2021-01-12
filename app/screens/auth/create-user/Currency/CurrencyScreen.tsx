import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { styles } from './CurrencyStyle';
import _styles from '../../../../_styles';
import TextInputWithoutIcon from '../../../../components/text-input/TextInputWithoutIcon';
import { _formatShortDate } from '../../../../services/formatdate.service';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoryList from '../../../../components/CategoryList';
import { useState } from 'react';
import CurrencyList from '../../../../components/CurrencyList';



interface Props {
    progress: boolean,
    onBack: () => void
    onSelectedCurrency: (currency: any) => void
    currencyDocs: Array<any>
}

const _stateFromProps = (data: any[]) => {
    const columns: any[] = [[], []]
    data.map((element, index) => {
        if (index % 2) {
            columns[0].push(element)
        } else {
            columns[1].push(element)
        }
    });
    return columns
};

const CurrencyScreen = ({ onBack, progress, onSelectedCurrency, currencyDocs }: Props) => {
    const [shouldShow, setShouldShow] = useState(true);
    const [seletedCurrency, setSeletedCurrency] = React.useState()
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <Icon style={styles.headerObj} name={"arrow-back"} />
                </TouchableOpacity>
                <Text style={styles.headerObj}>Category</Text>
                <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <Icon style={styles.headerObj} name={"search"} />
                </TouchableOpacity>
            </View>
            <View>
                {shouldShow ? (<TextInputWithoutIcon placeholder={"Example: Dollar"} label={"Search Currency"} />) : null}
            </View>
            <View style={styles.row}>
                {_stateFromProps(currencyDocs).map((col) => {
                    return (
                        <View style={[_styles.flex1, {}]}>
                            {
                                col.map((item: any, index: any) => {
                                    return (
                                        <CurrencyList
                                            name={item.name}
                                            onPress={() => onSelectedCurrency(item)}
                                        />
                                    )
                                })
                            }
                        </View>
                    )
                }
                )}
            </View>
        </View >
    );
}

// const _goBack = (selectedCurrency: any, onSelectedCurrency: any) => {
//     onSelectedCurrency(selectedCurrency)
// }

export default CurrencyScreen