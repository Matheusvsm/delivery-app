import { Avatar, HStack, Icon, Text, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import BottomNav from '../components/MainPage/BottomNav';
import Screen from '../components/Screen';
import { PersonImg } from '../assets/Images';

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
            <Text color="white">Rua Marechal Rondon, 399</Text>
          </HStack>

          <Avatar bg="darkBlue.400" source={PersonImg} />
        </HStack>
      </VStack>
      <BottomNav />
    </Screen>
  );
}

export default MainPage;
