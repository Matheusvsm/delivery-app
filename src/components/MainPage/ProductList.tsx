import { useState } from 'react';
import { FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native';
import { ProductType } from '../../types/product';
import Product from './Product';
import { Heading, HStack, Text } from 'native-base';

type ProductListProps = {
  title: string;
  data: Array<any>;
  initialItems?: number;
};

function ProductList({ title, data, initialItems = 2 }: ProductListProps) {
  const [showAll, setShowAll] = useState<boolean>(false);

  const numItems = showAll ? data.length : initialItems;

  const handleShowAllButton = () => {
    setShowAll(!showAll);
  };

  const renderProduct = ({ item }: ListRenderItemInfo<ProductType>) => (
    <Product
      id={item.id}
      name={item.name}
      price={item.price}
      icon={item.icon}
    />
  );

  return (
    <>
      <HStack justifyContent="space-between" alignItems="center" mb={4}>
        <Heading fontSize="xl" color="gray.800">
          {title}
        </Heading>
        <TouchableOpacity onPress={handleShowAllButton}>
          <Text color="muted.400">
            {!showAll ? `Mostrar tudo (${data.length})` : 'Mostrar menos'}
          </Text>
        </TouchableOpacity>
      </HStack>
      <FlatList
        data={data.slice(0, numItems)}
        renderItem={renderProduct}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

export default ProductList;
