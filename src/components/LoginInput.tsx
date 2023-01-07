import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from 'native-base';

type InputProps = IInputProps & {
  title?: string;
  errorMessage?: string | null;
};

function LoginInput({ title, errorMessage = null, isInvalid, ...rest }: InputProps) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={6} isInvalid={invalid}>
      {title && <FormControl.Label>
        {title}
      </FormControl.Label>}
      <NativeBaseInput
        fontSize="md"
        h={10}
        variant="underlined"
        _invalid={{
          borderBottomColor: 'red.500'
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}

export default LoginInput;
