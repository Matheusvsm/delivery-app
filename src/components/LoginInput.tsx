import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { COLORS } from '../constants/Colors';

interface InputProps {
  cabecario: string;
  icon?: React.ReactNode;
  value: string;
  inputOptions: TextInputProps;
  validator?: (text: string) => boolean;
}

function LoginInput({
  cabecario,
  icon,
  value,
  inputOptions,
  validator = (text: string) => true,
}: InputProps) {
  const [inputColor, setInputColor] = useState<'black' | 'red' | 'green'>(
    'black'
  );
  useEffect(() => {
    if (value) {
      if (validator(value)) setInputColor('green');
      else {
        setInputColor('red');
      }
    } else {
      setInputColor('black');
    }
  }, [value]);

  return (
    <>
      <Text style={styles.cabecario}>{cabecario}</Text>
      <View style={{ ...styles.inputForm, borderColor: inputColor }}>
        <View style={styles.icon}>{icon}</View>
        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.gray_300}
          value={value}
          {...inputOptions}
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
