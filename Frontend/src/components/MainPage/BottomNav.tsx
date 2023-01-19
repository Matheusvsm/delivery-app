import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import CartScreen from '../../screens/Main/Cart/CartScreen';
import ProductsScreen from '../../screens/Main/Products/ProductsScreen';
import UserScreen from '../../screens/Main/UserScreen';
import { useCart } from '../../contexts/CartContext';
import { useAuthentication } from '../../contexts/AuthContext';
import OrdersScreen from '../../screens/Main/Orders/OrdersScreen';

type BottomTabParamList = {
  Produtos: undefined;
  Carrinho: undefined;
  Perfil: undefined;
  Pedidos: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomNav() {
  const { cart } = useCart();
  const { user } = useAuthentication();

  return (
    <Tab.Navigator
      initialRouteName="Produtos"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Produtos"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon as={Entypo} name="shop" color={color} size={size} />
          ),
        }}
        component={ProductsScreen}
      />
      <Tab.Screen
        name="Carrinho"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={AntDesign}
              name="shoppingcart"
              color={color}
              size={size}
            />
          ),
          tabBarBadge: cart.reduce(
            (previousValue, item) => previousValue + item.quantity,
            0
          ),
        }}
        component={CartScreen}
      />
      <Tab.Screen
        name="Perfil"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon as={AntDesign} name="user" color={color} size={size} />
          ),
        }}
        component={UserScreen}
      />
      {user.isAdmin && (
        <Tab.Screen
          name="Pedidos"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon as={Feather} name="list" color={color} size={size} />
            ),
          }}
          component={OrdersScreen}
        />
      )}
    </Tab.Navigator>
  );
}

export default BottomNav;
