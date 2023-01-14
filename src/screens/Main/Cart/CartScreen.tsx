import {
  Text,
  Button,
  Heading,
  TextArea,
  VStack,
  ScrollView,
} from 'native-base';
import CartItem from '../../../components/MainPage/Cart/CartItem';
import TopBar from '../../../components/MainPage/TopBar';
import Screen from '../../../components/Screen';
import { useCart } from '../../../contexts/CartContext';
import { CartItemType } from '../../../types/cart';

function CartScreen() {
  const { cart, addToCart } = useCart();

  const addQuantityToItem = (item: CartItemType) => {
    addToCart(item.product, 1);
  };

  const removeQuantityFromItem = (item: CartItemType) => {
    addToCart(item.product, -1);
  };

  return (
    <Screen>
      <VStack p={6} flex={1} space={6}>
        <TopBar />
        <Heading>Carrinho</Heading>
        {cart.length ? (
          <>
            <ScrollView>
              <VStack justifyContent="center" space={2}>
                {cart.map((item) => (
                  <CartItem
                    key={item.product.id}
                    item={item}
                    addQuantity={() => addQuantityToItem(item)}
                    removeQuantity={() => removeQuantityFromItem(item)}
                  />
                ))}
              </VStack>
            </ScrollView>
            <TextArea
              maxLength={200}
              bgColor="white"
              placeholder="Observações"
              w="full"
              autoCompleteType={undefined}
            />
            <Button onPress={() => console.log(cart)}>Fazer pedido</Button>
          </>
        ) : (
          <Text italic>Carrinho vazio</Text>
        )}
      </VStack>
    </Screen>
  );
}

export default CartScreen;
