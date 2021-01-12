import * as React from 'react';
import { SafeAreaView, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './CategoryStyle';
import _styles from '../../../../_styles';
import { _formatShortDate } from '../../../../services/formatdate.service';
import Icon from 'react-native-vector-icons/Ionicons'
import modules from '../../../../modules';
import { fontBold } from '../../../../../customs/customFont';
import TextInputWithoutIcon from '../../../../components/text-input/TextInputWithoutIcon';
import CategoryList from '../../../../components/CategoryList';
import { useState } from 'react';

interface Props {
    progress: boolean,
    onBack: () => void
    onSelectedCategory: (category: any) => void
    categoryDocs: Array<any>
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

const CategoryScreen = ({ progress, onBack, categoryDocs, onSelectedCategory }: Props) => {
    const [shouldShow, setShouldShow] = useState(true);
    const [seletedCategory, setSeletedCategory] = React.useState(categoryDocs[0])

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
                {shouldShow ? (<TextInputWithoutIcon placeholder={"Example: Services"} label={"Search Category"} />) : null}
            </View>
            <View style={styles.row}>
                {_stateFromProps(categoryDocs).map((col) => {
                    return (
                        <View style={[_styles.flex1, {}]}>
                            {
                                col.map((item: any, index: any) => {
                                    return (
                                        <CategoryList
                                            name={item.name}
                                            onPress={() => _goBack(item, onSelectedCategory)}
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
const _goBack = (selectedCategory: any, onSelectedCategory: any) => {
    onSelectedCategory(selectedCategory)
}
export default CategoryScreen
