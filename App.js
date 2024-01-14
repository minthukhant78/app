// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcom to React Navigator </Text>
      <Button title='Go To DetisScreen'
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 0,
            otherParam: 'anything you want here',
          });
        }}

      />
    </View>
  );
}
function DetisScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetisScreen</Text>
      <Text> itemId : {JSON.stringify(itemId)}</Text>
      <Text>otherParam : {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details "
        onPress={() => navigation.navigate('Details', {
          itemId: Math.floor(Math.random() * 100)
        })
        }
      />
      < Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="Details" component={DetisScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;