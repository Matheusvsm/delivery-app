import { Icon } from '@expo/vector-icons/build/createIconSet';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';
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
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
}

function LoginInput(props: InputProps) {
  return (
    <>
      <Text style={styles.cabecario}>{props.cabecario}</Text>
      <View style={styles.inputForm}>
        {props.icon}
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.gray_300}
          onChangeText={() => {}}
          keyboardType={props.keyboardType}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputForm: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputStartIcon: {
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingRight: 3,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    color: '#424242',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  cabecario: {
    color: COLORS.gray_300,
    fontSize: 16,
  },
});

export default LoginInput;
