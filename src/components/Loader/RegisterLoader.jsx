import { ThreeDots } from 'react-loader-spinner';
import css from './loader.module.css';

const RegisterLoader = () => {
  return (
    <div className={css.loaderContainer}>
      <ThreeDots
        visible={true}
        height="30"
        width="80"
        color="#3f51b5"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClass=""
      />
    </div>
  );
};

export default RegisterLoader;
