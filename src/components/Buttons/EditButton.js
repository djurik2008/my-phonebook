import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const EditButton = ({ onClick }) => {
  return (
    <Button
      icon={<EditOutlined />}
      aria-label="Edit"
      htmlType="button"
      size="small"
      onClick={onClick}
    >
      Edit
    </Button>
  );
};

export default EditButton;
