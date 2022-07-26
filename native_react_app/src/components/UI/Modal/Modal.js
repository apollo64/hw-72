import React from "react";
import { Button, Modal, Center, NativeBaseProvider } from "native-base";

const Modalist =({errorMessage,errorStatus,setModalHandler})=>{
    return (
        <Center>
      <Modal isOpen={errorStatus} onClose={setModalHandler} _backdrop={{
      _dark: {
        bg: "coolGray.800"
      },
      bg: "warmGray.50"
    }}>
        <Modal.Content maxWidth="350" maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Error Messsage</Modal.Header>
          <Modal.Body>
            {errorMessage}
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>;
    )
}

export default Modalist;
