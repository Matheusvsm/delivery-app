import { Button, HStack, Icon, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

type QuantityInputProps = {
  quantity: number;
  addQuantity: () => void;
  removeQuantity: () => void;
};

function QuantityInput({ quantity, addQuantity, removeQuantity }: QuantityInputProps) {

  return (
    <HStack alignItems="center" space={2} my={4}>
      <Button
        w="8"
        h="8"
        variant="subtle"
        onPress={removeQuantity}
        borderRadius={10}
        borderColor="info.500"
        borderWidth="1"
      >
        <Icon as={AntDesign} name="minus" size={6} color="info.500" />
      </Button>
      <Text fontSize="lg" fontWeight="bold">{quantity}</Text>
      <Button
        w="8"
        h="8"
        variant="subtle"
        onPress={addQuantity}
        borderRadius={10}
        borderColor="info.500"
        borderWidth="1"
      >
        <Icon as={AntDesign} name="plus" size={6} color="info.500" />
      </Button>
    </HStack>
  );
}

export default QuantityInput;
