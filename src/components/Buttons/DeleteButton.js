import { Button } from 'antd';

const DeleteButton = ({ loading, onClick }) => {
  return (
    <Button
      loading={loading}
      htmlType="button"
      size="small"
      danger
      onClick={onClick}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
