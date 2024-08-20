/**
 * @format
 */

import 'react-native-gesture-handler';

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';

const containers = {
  app1: `https://microfrontsrntest.blob.core.windows.net/app1/outputs/${Platform.OS}/remotes/[name][ext]`,
};

const resolveURL = Federated.createURLResolver({
  containers,
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
