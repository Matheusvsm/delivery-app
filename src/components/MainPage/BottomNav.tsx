import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
      <Tab.Screen name="Produtos" component={ProductsScreen} />
      <Tab.Screen name="Pedidos" component={OrderScreen} />
    </Tab.Navigator>
  );
}

export default BottomNav;
