import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

interface AddBtnProps {
  showModal: () => void;
  closeModal: () => void;
}

function AddBtn({ ...props }: AddBtnProps) {
  const show = useSelector((state: any) => state.showForm.show);

  return (
    <>
      <Button variant="primary" onClick={props.showModal}>
        Add New Account
      </Button>

      <Modal show={show} onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>body</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddBtn;
