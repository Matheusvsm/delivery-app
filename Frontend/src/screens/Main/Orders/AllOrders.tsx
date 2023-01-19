import { FlatList, Heading, VStack } from 'native-base';
import { ListRenderItemInfo } from 'react-native';
import { OrderType } from '../../../types/order';
import Order from '../../../components/MainPage/Orders/Order';
import pedidos from '../../../mock/pedidos.json';

function AllOrders() {
  const renderOrder = ({ item }: ListRenderItemInfo<OrderType>) => (
    <Order order={item} />
  );

  return (
    <VStack p={4}>
      <Heading marginBottom={8}>Lista de pedidos</Heading>
      <FlatList data={pedidos} renderItem={renderOrder} />
    </VStack>
  );
}

export default AllOrders;
