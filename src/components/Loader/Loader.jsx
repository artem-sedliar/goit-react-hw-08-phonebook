import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Grid } from 'react-loader-spinner';

import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loaderWrap}>
      <Grid color="#4985ff" height={80} width={80} />
    </div>
  );
};

export default Loader;
