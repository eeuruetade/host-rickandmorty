import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={[styles.loading, {backgroundColor: '#FFF'}]}>
      <ActivityIndicator size="large" color={'#019BEF'} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
