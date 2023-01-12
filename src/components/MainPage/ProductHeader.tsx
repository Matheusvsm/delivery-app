import { Heading, HStack, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

type ProductHeaderProps = {
  title: string;
  totalProducts: number;
};

function ProductHeader({ title, totalProducts }: ProductHeaderProps) {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <Heading fontSize="xl" color="gray.800" mb={2}>
        {title}
      </Heading>
      <TouchableOpacity
        onPress={() => {
          console.log('mostrar tudo pressionado');
        }}
      >
        <Text color="muted.400">Mostrar tudo (totalProducts)</Text>
      </TouchableOpacity>
    </HStack>
  );
}

export default ProductHeader;
