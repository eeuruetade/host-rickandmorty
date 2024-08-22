import {Federated} from '@callstack/repack/client';
import {useNavigation} from '@react-navigation/native';
import React, {Suspense, useEffect} from 'react';
import {Text} from 'react-native';

const AppCharacters = React.lazy(() =>
  Federated.importModule('characters', './App'),
);

export const CharactersScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <AppCharacters />
    </Suspense>
  );
};
