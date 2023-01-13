import { Icon, Input, VStack } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import Screen from '../../../components/Screen';
import ProductList from '../../../components/MainPage/ProductList';
import produtos from '../../../mock/produtos.json';
import TopBar from '../../../components/MainPage/TopBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllProducts from './AllProducts';
import SingleProduct from './SingleProduct';

export type ProductsStackPages = {
  AllProducts: undefined;
  SingleProduct: { productId: number };
};

const ProductsStack = createNativeStackNavigator<ProductsStackPages>();

function ProductsScreen() {
  return (
    <Screen>
      <ProductsStack.Navigator screenOptions={{ headerShown: false }}>
        <ProductsStack.Screen name="AllProducts" component={AllProducts} />
        <ProductsStack.Screen name="SingleProduct" component={SingleProduct} />
      </ProductsStack.Navigator>
    </Screen>
  );
}

export default ProductsScreen;
