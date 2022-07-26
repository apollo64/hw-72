import React from 'react';
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const  HeaderBar=()=> {
    return <>
    <Center>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="#6200ee" />
        <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
          <HStack alignItems="center">
            <Text color="white" ml='3' fontSize="20" fontWeight="bold">
              Turtle Pizza
            </Text>
          </HStack>
     
        </HStack>
        </Center>
      </>;
  }


  export default HeaderBar;