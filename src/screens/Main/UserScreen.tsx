import { Avatar, HStack, VStack, Text, Icon } from 'native-base';
import Screen from '../../components/Screen';
import { useAuthentication } from '../../contexts/AuthContext';
import { Feather } from '@expo/vector-icons';

function UserScreen() {
  const { user } = useAuthentication();

  return (
    <Screen>
      <VStack bgColor="blue.500" flex={1} px={6} pt={6} space={6}>
        <HStack alignItems="center" space={4}>
          <Avatar
            size="lg"
            bg="green.500"
            borderColor="white"
            source={{ uri: user.image }}
          >
            {user.name.charAt(0)}
          </Avatar>
          <VStack space={2}>
            <Text fontSize="md" color="white" fontWeight="semibold">
              {user.name.toUpperCase()}
            </Text>
            <Text fontSize="md" color="white" fontWeight="light">
              {user.email}
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems="center">
          <Icon as={<Feather name="map-pin" />} size={5} mr={2} color="white" />
          <Text color="white">{user.address}</Text>
        </HStack>
        <VStack
          flex={1}
          bgColor="white"
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
        ></VStack>
      </VStack>
    </Screen>
  );
}

export default UserScreen;
