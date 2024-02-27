import { Modal } from 'antd';

const EditModal = ({ isModalOpen, onClose, children }) => {
  return (
    <Modal
      title="Edit contact"
      footer={null}
      open={isModalOpen}
      onCancel={onClose}
    >
      {children}
    </Modal>
  );
};

export default EditModal;
