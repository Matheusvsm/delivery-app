import { Button, HStack, Icon, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

type QuantityInputProps = {
  quantity: number;
  addQuantity: () => void;
  removeQuantity: () => void;
};

function QuantityInput({ quantity, addQuantity, removeQuantity }: QuantityInputProps) {

  return (
    <HStack alignItems="center" space={4} my={4}>
      <Button
        w="10"
        h="10"
        variant="subtle"
        onPress={removeQuantity}
        borderRadius={10}
      >
        <Icon as={AntDesign} name="minus" size={8} color="info.500" />
      </Button>
      <Text fontSize="lg">{quantity}</Text>
      <Button
        w="10"
        h="10"
        variant="subtle"
        p={4}
        onPress={addQuantity}
        borderRadius={10}
      >
        <Icon as={AntDesign} name="plus" size={8} color="info.500" />
      </Button>
    </HStack>
  );
}

export default QuantityInput;
