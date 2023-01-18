import { Avatar, HStack, Icon, Text, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import BottomNav from '../components/MainPage/BottomNav';
import Screen from '../components/Screen';
import { PersonImg } from '../assets/Images';
import { useAuthentication } from '../contexts/AuthContext';

function MainPage() {
  const { user } = useAuthentication();

  return (
    <Screen>
      <BottomNav />
    </Screen>
  );
}

export default MainPage;
