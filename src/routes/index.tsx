import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from '../pages/home';
import { DetailCrypto } from '../pages/detailCrypto';

const Stack = createNativeStackNavigator();

export function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Home' 
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name='DetailCrypto' 
                    component={DetailCrypto}
                    options={{
                        title: 'Detalhes',
                        headerStyle:{
                            backgroundColor: '#46005F',
                        },
                        headerTintColor: 'white'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}