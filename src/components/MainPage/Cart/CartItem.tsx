import { Box, HStack, Image, Text } from 'native-base';
import { CartItemType } from '../../../types/cart';
import QuantityInput from '../QuantityInput';

type CartItemProps = {
  item: CartItemType;
  addQuantity: () => void;
  removeQuantity: () => void;
};

function CartItem({ item, addQuantity, removeQuantity }: CartItemProps) {
  return (
    <HStack alignItems="center" space={2} w="full">
      <Image
        flexGrow={1}
        resizeMode="contain"
        source={{ uri: item.product.icon }}
        alt={item.product.name}
        borderRadius={10}
        size="md"
      />
      <Text flexGrow={2} fontWeight="bold">
        {item.product.name}
      </Text>
      <Box flexGrow={1}>
        <QuantityInput
          quantity={item.quantity}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
        />
      </Box>
    </HStack>
  );
}

export default CartItem;
