import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  TextInputProps,
} from 'react-native';
import { COLORS } from '../constants/Colors';

interface InputProps {
  cabecario: string;
  icon?: React.ReactNode;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  inputProps?: TextInputProps;
  value: string,
  onChangeText: (text: string) => void;
}

function LoginInput(props: InputProps) {
  return (
    <>
      <Text style={styles.cabecario}>{props.cabecario}</Text>
      <View style={styles.inputForm}>
        {props.icon}
        <TextInput
          value={props.value}
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.gray_300}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
          {...props.inputProps}
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
