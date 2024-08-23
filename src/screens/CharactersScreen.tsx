import React, {Suspense, useEffect} from 'react';
import {Federated} from '@callstack/repack/client';
import {useNavigation} from '@react-navigation/native';
import {Loading} from './Loading';

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
    <Suspense fallback={<Loading />}>
      <AppCharacters />
    </Suspense>
  );
};