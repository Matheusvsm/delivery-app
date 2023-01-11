import { Icon, Input, Text } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import Screen from '../../components/Screen';

function ProductsScreen() {
  return (
    <Screen>
      <Input
        w="full"
        rounded="2xl"
        placeholder="Pesquisar produto"
        fontSize="md"
        bgColor="white"
        InputLeftElement={
          <Icon as={EvilIcons} name="search" color="gray.800" size={8} ml={2} />
        }
      />
    </Screen>
  );
}

export default ProductsScreen;
