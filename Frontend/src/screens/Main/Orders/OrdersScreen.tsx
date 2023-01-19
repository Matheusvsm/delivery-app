import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from '../../../components/Screen';
import AllOrders from './AllOrders';
import DetailedOrder from './DetailedOrder';

export type OrdersStackPages = {
  AllOrders: undefined;
  DetailedOrder: { orderId: number };
};

const OrdersStack = createNativeStackNavigator<OrdersStackPages>();

function OrdersScreen() {
  return (
    <Screen>
      <OrdersStack.Navigator screenOptions={{ headerShown: false }}>
        <OrdersStack.Screen name="AllOrders" component={AllOrders} />
        <OrdersStack.Screen name="DetailedOrder" component={DetailedOrder} />
      </OrdersStack.Navigator>
    </Screen>
  );
}

export default OrdersScreen;
