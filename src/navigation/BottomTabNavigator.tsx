import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CharacterNavigator from './ CharacterNavigator';

const Tab = createBottomTabNavigator();

export const ApiScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 24}}>API Screen</Text>
    </View>
  );
};

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 24}}>Information</Text>
      <View>
        <Text style={{fontSize: 16}}>
          This is a testing app that uses a microfronts architecture with
          Re.Pack
        </Text>
      </View>
    </View>
  );
};

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Personajes"
        options={{title: 'Character'}}
        component={CharacterNavigator}
      />
      <Tab.Screen name="Info" component={InfoScreen} />
      {/* <Tab.Screen name="Api" component={ApiScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
