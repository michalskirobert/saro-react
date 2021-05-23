import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

import * as C from "@utils/constants";

export const CustomWarningModal = ({
  onSave,
  onCancel,
  onHide,
  content,
  confirmMsg,
  rejectMsg,
}) => {
  return (
    <Modal {...{ onHide }}>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <Button
          {...{
            variant: C.GENERAL_CONSTANTS.B_DANGER,
            onClick: onSave,
          }}
        >
          {confirmMsg}
        </Button>
        <Button
          {...{
            variant: C.GENERAL_CONSTANTS.B_DARK,
            onClick: onCancel,
          }}
        >
          {rejectMsg}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
