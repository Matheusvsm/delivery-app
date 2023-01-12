import { HStack, VStack, Image, Text } from 'native-base';
import { ProductType } from '../../types/product';

function Product({ id, icon, name, price }: ProductType) {
  return (
    <HStack bgColor="white" borderRadius={10} my={2}>
      <Image
        resizeMode="contain"
        source={{ uri: icon }}
        alt={name + ' image'}
        borderRadius={10}
        size="lg"
      />
      <VStack justifyContent="space-between" px={4} py={2}>
        <Text color="muted.400">{name}</Text>
        <Text color="rose.500" fontWeight="bold" fontSize="lg">
          R$ {price.toFixed(2).replace('.', ',')}
        </Text>
      </VStack>
    </HStack>
  );
}

export default Product;
