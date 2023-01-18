import { Box, Center, HStack, Image, Text } from 'native-base';
import { CartItemType } from '../../../types/cart';
import QuantityInput from '../QuantityInput';

type CartItemProps = {
  item: CartItemType;
  addQuantity: () => void;
  removeQuantity: () => void;
};

function CartItem({ item, addQuantity, removeQuantity }: CartItemProps) {
  return (
    <HStack alignItems="center" w="full">
      <Center overflow="hidden" w="15%" bgColor="white" borderRadius={10}>
        <Image
          resizeMode="contain"
          source={{ uri: item.product.icon }}
          alt={item.product.name}
          size="xs"
        />
      </Center>
      <Text ml="5%" width="50%" fontSize="md" fontWeight="normal">
        {item.product.name}
      </Text>
      <Center width="30%">
        <QuantityInput
          quantity={item.quantity}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
        />
      </Center>
    </HStack>
  );
}

export default CartItem;
