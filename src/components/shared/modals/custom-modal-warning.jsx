import React from "react";
import { Button, Modal } from "react-bootstrap";

import * as C from "@utils/constants";

export const CustomWarningModal = ({
  show,
  onSave,
  onCancel,
  onHide,
  content,
  confirmMsg,
  rejectMsg,
}) => {
  return (
    <Modal {...{ show, onHide }}>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
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
      </Modal.Footer>
    </Modal>
  );
};
