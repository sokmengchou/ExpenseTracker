import 'react-native-gesture-handler';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {setCustomText} from 'react-native-global-props';
import {enableScreens} from 'react-native-screens';
import App from './App';
import {name as appName} from './app.json';
import modules from './app/modules';
import {fontNormal} from './customs/customFont';

enableScreens();

const customTextProps = {
  style: {
    color: modules.TEXT,
    fontSize: modules.FONT,
    // ...fontNormal,
  },
};
setCustomText(customTextProps);
AppRegistry.registerComponent(appName, () => App);
