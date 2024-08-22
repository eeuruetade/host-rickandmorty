/**
 * @format
 */

import 'react-native-gesture-handler';

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';

const containers = {
  characters: `https://microfrontsrntest.blob.core.windows.net/rickmorty1/outputs/${Platform.OS}/remotes/[name][ext]`,
  // characters: 'http://localhost:9000/[name][ext]',
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
    cache: true, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
