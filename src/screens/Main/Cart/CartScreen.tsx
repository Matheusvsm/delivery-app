import { Button, Heading, VStack } from 'native-base';
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
        <VStack justifyContent="center" space={4}>
          {cart.map(
            (item) =>
              item.quantity !== 0 && (
                <CartItem
                  key={item.product.id}
                  item={item}
                  addQuantity={() => addQuantityToItem(item)}
                  removeQuantity={() => removeQuantityFromItem(item)}
                />
              )
          )}
        </VStack>
        <Button onPress={() => console.log(cart)}>Fazer pedido</Button>
      </VStack>
    </Screen>
  );
}

export default CartScreen;
