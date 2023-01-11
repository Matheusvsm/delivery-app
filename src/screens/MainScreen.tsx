import { Avatar, HStack, Icon, Text, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Icon as AvatarIcon } from '../assets/Icons';
import BottomNav from '../components/MainPage/BottomNav';
import Screen from '../components/Screen';

function MainPage() {
  return (
    <Screen>
      <VStack p={6} space={6}>
        <HStack justifyContent="space-between">
          <HStack
            bgColor="darkBlue.400"
            alignItems="center"
            p={3}
            rounded="full"
            space={1}
          >
            <Icon as={AntDesign} name="enviromento" color="white" />
            <Text color="white">Oxford Street</Text>
          </HStack>

          <Avatar bg="darkBlue.400" source={AvatarIcon} />
        </HStack>
      </VStack>
      <BottomNav />
    </Screen>
  );
}

export default MainPage;
