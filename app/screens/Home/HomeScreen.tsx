import * as React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { fontBold } from '../../../customs/customFont'
import SafeArea from '../../components/SafeArea'
import modules from '../../modules'
import _styles from '../../_styles'
import { styles } from './HomeStyle'
import { BlurView } from '@react-native-community/blur';
import { ScrollView } from 'react-native-gesture-handler'
import SmallCardCom from '../../components/SmallCardCom'
import { LineChart } from "react-native-chart-kit";
import { UserInterface } from '../../interface'
import { Icon } from 'react-native-vector-icons/Icon'


export interface Props {
  onAllTransaction: () => void,
  docs: any,
  account: UserInterface
  onWalletClick: () => void,
  onBudgetClick: () => void,

}

export default function HomeScreen(props: Props): React.ReactElement {

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 0.7) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 3 // optional
      }
    ],
    legend: ["Monthly Report"] // optional
  };

  const chartConfig = {
    backgroundColor: modules.ACTIVE,

    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  };

  return (
    <ImageBackground source={require("../../../assets/image/back.png")} style={styles.container}>
      <ScrollView style={styles.front}>
        <SafeAreaView />
        <Text style={{ fontSize: modules.FONT_H1, paddingHorizontal: modules.PADDING, color: modules.WHITE }}>Hello,</Text>
        <Text style={{ ...fontBold, fontSize: modules.FONT_H1, paddingHorizontal: modules.PADDING, color: modules.WHITE }}>{props.account.fullName}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontal}>

          <SmallCardCom />
          <SmallCardCom />
          <SmallCardCom />
          <SmallCardCom />
          <SmallCardCom />

        </ScrollView>
        <TouchableOpacity onPress={props.onAllTransaction} style={styles.viewTransactionContainer}>
          <Text style={{ ...fontBold }}>See all transaction</Text>
        </TouchableOpacity>

        <View style={[styles.viewTransactionContainer, { flexDirection: 'row' }]}>
          <TouchableOpacity onPress={props.onWalletClick} style={[styles.featureBtn, { borderRightWidth: 0.5, borderRightColor: modules.SUB_TITLE }]}>
            <FastImage style={styles.featureImage} source={require("../../../assets/image/wallet.png")} />
            <Text style={{ ...fontBold }}>Wallets</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={props.onBudgetClick} style={[styles.featureBtn, { borderLeftWidth: 0.5, borderLeftColor: modules.SUB_TITLE }]}>
            <FastImage style={styles.featureImage} source={require("../../../assets/image/budget.png")} />
            <Text style={{ ...fontBold }}>Budgets</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chart}>
          <LineChart
            data={data}
            width={modules.VIEW_PORT_WIDTH - modules.PADDING * 2}
            height={256}
            style={{ borderRadius: modules.RADIUS * 2, ..._styles.shadowSmall }}
            chartConfig={{
              backgroundColor: modules.WHITE,
              backgroundGradientFrom: modules.WHITE,
              backgroundGradientTo: modules.WHITE,
              color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`,

            }}
            bezier
          />
        </View>
        {/* {
          props.docs.length <= 0 ?
            null :
            props.docs.map((item: any) => {
              return (
                <Text>
                  {item.id}
                </Text>
              )
            })
        } */}
      </ScrollView>
    </ImageBackground>
  )
}