import { HStack, Icon, Text, Avatar } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useAuthentication } from '../../contexts/AuthContext';

function TopBar() {
  const { user } = useAuthentication();

  return (
    <HStack justifyContent="space-between" alignItems="center">
      <HStack
        bgColor="darkBlue.400"
        alignItems="center"
        p={3}
        rounded="full"
        space={1}
      >
        <Icon as={AntDesign} name="enviromento" color="white" />
        <Text color="white">{user.address}</Text>
      </HStack>

      <Avatar
        bg="green.500"
        source={{ uri: user.image }}
        justifyContent="center"
        alignItems="center"
      >
        {user.name.charAt(0)}
      </Avatar>
    </HStack>
  );
}

export default TopBar;
