import * as React from 'react'
import { pushToArray } from '../../services/mapping.service'
import firestore from '@react-native-firebase/firestore'
import HomeScreen from './HomeScreen'
import { connect } from 'react-redux'
import { PayloadFetchDataApi } from '../../interface/payload'
// import { fectDataApi } from '../../Redux/Functions'
// import { fetchDataApi } from '../../Redux/Actions/data.action'
import { UserInterface } from '../../interface'
import { NavigationInterface } from '../../interface/package'

interface Props {
  productDoc: Array<PayloadFetchDataApi>
  fetchDataApi: (payload: PayloadFetchDataApi) => void,
  docs: any,
  account: UserInterface,
  navigation: NavigationInterface,
  refreshToken: string
}

const _onFetchDataApi = (productDoc: Array<UserInterface>, lastVisible: any, fetchDataApi: any) => {
  const payload: PayloadFetchDataApi = {
    lastVisible: lastVisible,
    productDoc: productDoc
  }
  fetchDataApi(payload)
}

const HomeContainer = (props: Props) => {
  React.useEffect(() => {
    return () => {
    }
  }, [])
  return <HomeScreen
    account={props.account}
    onAllTransaction={() => props.navigation.navigate("TRANSACTION")}
    onBudgetClick={() => props.navigation.navigate("BUDGETS")}
    onWalletClick={() => props.navigation.navigate("WALLETS")}
    docs={props.docs}
  />
}

const mapStateToProps = (state: any) => (
  {
    docs: state.dataReducer.docs,
    account: state.authReducer.account,
    refreshToken: state.authReducer.refreshToken

  }
)

const mapDispatchToProps = (dispatch: any) => ({
  // fetchDataApi: (payload: PayloadFetchDataApi) => dispatch(fetchDataApi(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
