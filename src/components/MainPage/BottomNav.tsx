import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import OrderScreen from '../../screens/Main/OrderScreen';
import ProductsScreen from '../../screens/Main/ProductsScreen';

type BottomTabParamList = {
  Produtos: undefined;
  Pedidos: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomNav() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Produtos"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={AntDesign}
              name="shoppingcart"
              color={color}
              size={size}
            />
          ),
        }}
        component={ProductsScreen}
      />
      <Tab.Screen
        name="Pedidos"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon as={Ionicons} name="wallet-outline" color={color} size={size} />
          ),
        }}
        component={OrderScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
