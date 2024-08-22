import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {CharactersScreen} from '../screens/CharactersScreen';

const Stack = createNativeStackNavigator();

const CharacterNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Characters" component={CharactersScreen} />
    </Stack.Navigator>
  );
};

export default CharacterNavigator;
