/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import * as React from 'react';
import App from './App/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
