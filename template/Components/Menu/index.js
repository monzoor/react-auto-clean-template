import { Link } from 'react-router-dom';
import { PATHS } from '@constants';

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={PATHS.HOME}>Home</Link>
        </li>
        <li>
          <Link to={PATHS.PAGE1}>Page 1</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
