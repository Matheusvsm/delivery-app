import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Box, Button, Heading, HStack, Image, Text, VStack } from 'native-base';
import { ProductsStackPages } from './ProductsScreen';
import produtos from '../../../mock/produtos.json';
import Screen from '../../../components/Screen';
import QuantityInput from '../../../components/MainPage/QuantityInput';
import { useState } from 'react';
import { useCart } from '../../../contexts/CartContext';
import { Alert } from 'react-native';

function SingleProduct() {
  const navigation = useNavigation<NavigationProp<ProductsStackPages>>();
  const route = useRoute<RouteProp<ProductsStackPages, 'SingleProduct'>>();
  const product = produtos.aguas.find(
    (produto) => produto.id == route.params.productId
  );

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(0);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantity = () => {
    setQuantity(quantity === 0 ? 0 : quantity - 1);
  };

  const handleAddToCart = () => {
    if (product && quantity !== 0) {
      addToCart(product, quantity);
      Alert.alert(
        'Produto adicionado ao carrinho',
        `${quantity} ${product.name} foram adicionados ao carrinho.`,
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('AllProducts'),
          },
        ]
      );
    }
  };

  return (
    <Screen>
      <VStack bgColor="blue.500" flex={1}>
        <HStack alignItems="center" space={4} p={8} justifyContent="center">
          <Image
            borderRadius={100}
            size="lg"
            source={{ uri: product?.icon }}
            alt={product?.name}
          />
          <Heading color="white" fontSize="2xl" fontWeight="normal">
            {product?.name}
          </Heading>
          <Box
            position="absolute"
            bottom={-35}
            right={0}
            bgColor="blue.700"
            w={150}
            h={70}
            p={4}
            borderTopLeftRadius={20}
            borderBottomLeftRadius={20}
            justifyContent="center"
          >
            <Text fontSize="2xl" color="white" fontWeight="extrabold">
              R$ {product?.price}
            </Text>
          </Box>
        </HStack>
        <VStack
          bgColor="white"
          h="full"
          zIndex={-1}
          borderTopLeftRadius={50}
          p={10}
          space={10}
        >
          <Box>
            <Heading>Descrição</Heading>
            <Text>A {product?.name} é uma água boa e tals...</Text>
          </Box>
          <Box>
            <Heading>Quantidade</Heading>
            <QuantityInput
              quantity={quantity}
              addQuantity={addQuantity}
              removeQuantity={removeQuantity}
            />
          </Box>
          <Button onPress={handleAddToCart}>Adicionar ao carrinho</Button>
        </VStack>
      </VStack>
    </Screen>
  );
}

export default SingleProduct;
