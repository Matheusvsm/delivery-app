import { FormControl, Icon, Input, Pressable } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

type UserInfo = {
  infoTitle: string;
  infoValue?: string;
};

function UserInfo({ infoTitle, infoValue }: UserInfo) {
  const [disabled, setDisabled] = useState<boolean>(true);
  const handleEditButton = () => {
    setDisabled(!disabled);
  };

  return (
    <FormControl>
      <FormControl.Label>{infoTitle}</FormControl.Label>
      <Input
        onEndEditing={handleEditButton}
        px={0}
        variant="unstyled"
        defaultValue={infoValue ?? ''}
        isDisabled={disabled}
        InputRightElement={
          <Pressable
            onPress={handleEditButton}
            _pressed={{ bgColor: 'coolGray.300' }}
            borderRadius={100}
            p={2}
          >
            <Icon as={AntDesign} name="edit" />
          </Pressable>
        }
      />
    </FormControl>
  );
}

export default UserInfo;
