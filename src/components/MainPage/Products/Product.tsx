import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HStack, VStack, Image, Text, Pressable } from 'native-base';
import { ProductsStackPages } from '../../../screens/Main/Products/ProductsScreen';
import { ProductType } from '../../../types/product';

function Product({ id, icon, name, price }: ProductType) {
  const navigation = useNavigation<NavigationProp<ProductsStackPages>>();

  const handlePress = () => {
    navigation.navigate('SingleProduct', { productId: id });
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
      <HStack>
        <Image
          resizeMode="contain"
          source={{ uri: icon }}
          alt={name + ' image'}
          borderRadius={10}
          size="lg"
        />
        <VStack justifyContent="space-between" px={4} py={2}>
          <Text color="muted.400">{name}</Text>
          <Text color="blue.800" fontWeight="bold" fontSize="lg">
            R$ {price.toFixed(2).replace('.', ',')}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}

export default Product;
