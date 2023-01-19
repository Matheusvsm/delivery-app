import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HStack, VStack, Text, Badge, Pressable } from 'native-base';
import { ColorSchemeType } from 'native-base/lib/typescript/components/types';
import { OrdersStackPages } from '../../../screens/Main/Orders/OrdersScreen';
import { OrderType } from '../../../types/order';

type OrderProps = {
  order: OrderType;
};

function Order({ order }: OrderProps) {
  const navigation = useNavigation<NavigationProp<OrdersStackPages>>();
  const statusColor: (order: OrderType) => ColorSchemeType = (
    order: OrderType
  ) => {
    switch (order.status) {
      case 'Pedido recebido':
        return 'info';
      case 'Entrega em andamento':
        return 'warning';
      case 'Entregue':
        return 'success';
    }
  };

  const handlePress = () => {
    navigation.navigate('DetailedOrder', { orderId: order.id });
  };

  return (
    <Pressable
      _pressed={{
        bgColor: 'coolGray.200',
      }}
      onPress={handlePress}
      rounded="8"
      overflow="hidden"
      borderWidth="1"
      borderColor="coolGray.300"
      shadow="3"
      bgColor="white"
      mb={2}
      p={2}
    >
      <HStack p={2} alignItems="center" justifyContent="space-between">
        <VStack>
          <Text fontWeight="bold" fontSize="md">
            {order.user.name}
          </Text>
          <Text>{order.user.address}</Text>
        </VStack>
        <Badge colorScheme={statusColor(order)}>
          {order.status.toUpperCase()}
        </Badge>
      </HStack>
    </Pressable>
  );
}

export default Order;
