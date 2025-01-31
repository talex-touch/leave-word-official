import { GradientButton } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import React from 'react';

const useStyles = createStyles(({ cx, token, responsive, css }, isPure: boolean) => ({
  container: css`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    width: 100%;
    height: 100%;

    gap: 1rem;
    align-items: center;
    justify-content: center;

    p {
      font-size: 24px;
    }
  `,
  slogan: css`
    margin: 1rem 0;
    font-size: 50px;
    font-weight: 800;
    line-height: 2;
    text-align: center;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    -webkit-text-fill-color: transparent;

    background: linear-gradient(90deg, #e6e6e6 0.04%, #6e6e6e 100.04%) text;
  `,
}));
export default () => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <h1 className={styles.slogan}>Download</h1>

      <p>Add the list and wait for us to be ready to pass immediately.</p>

      <GradientButton glow size="large">
        Join now
      </GradientButton>
    </div>
  );
};
