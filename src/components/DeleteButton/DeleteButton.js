import { Button } from 'antd';

const DeleteButton = ({ loading, func }) => {
  return (
    <Button
      loading={loading}
      htmlType="button"
      size="small"
      danger
      onClick={func}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
