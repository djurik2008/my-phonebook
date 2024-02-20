import { Button } from 'antd';

const FormButton = ({ text, loading }) => {
  return (
    <Button
      type="primary"
      loading={loading}
      htmlType="submit"
      block
      size="large"
    >
      {text}
    </Button>
  );
};

export default FormButton;
