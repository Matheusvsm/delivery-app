import { Icon } from '@expo/vector-icons/build/createIconSet';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  TextInputProps,
} from 'react-native';
import { COLORS } from '../constants/Colors';

type IconsLibs =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'Fontisto'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

interface InputProps {
  cabecario: string;
  icon?: React.ReactNode;
  inputOptions: TextInputProps;
}

function LoginInput(props: InputProps) {
  return (
    <>
      <Text style={styles.cabecario}>{props.cabecario}</Text>
      <View style={styles.inputForm}>
        <View style={styles.icon}>{props.icon}</View>
        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.gray_300}
          {...props.inputOptions}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3,
  },
  inputForm: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    height: 30,
    color: COLORS.gray_200,
  },
  cabecario: {
    color: COLORS.gray_300,
    fontSize: 16,
  },
});

export default LoginInput;
