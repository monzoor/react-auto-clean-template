import { Menu } from '@components';

const PublicLayout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export default PublicLayout;
