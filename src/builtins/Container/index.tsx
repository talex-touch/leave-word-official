import { Alert, Typography } from '@lobehub/ui';
import { type FC, type ReactNode } from 'react';

const Container: FC<{
  children: ReactNode;
  title?: string;
  type: 'info' | 'warning' | 'success' | 'error';
}> = ({ type, title, children }) => {
  return (
    <Typography fontSize={14} headerMultiple={0.25} marginMultiple={0}>
      <Alert
        description={children}
        message={title || type.toUpperCase()}
        showIcon
        style={{ marginBlock: '1em' }}
        type={type}
      />
    </Typography>
  );
};

export default Container;
