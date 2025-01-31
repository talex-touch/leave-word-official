import { SpotlightCard } from '@lobehub/ui';
import { Divider } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';
import { Flexbox } from 'react-layout-kit';

const data = [
  {
    content: '优雅的触控设计，聆听生命韵律在指尖换换流淌。',
    favicon: 'https://img2.quotawish.com/2025/01/31/679c832fa86f7.png',
    title: '生命简约设计',
  },
  {
    content: '星轨动态呈现，光影如梭质感，柔和阴影随波滚动。',
    favicon: 'https://img2.quotawish.com/2025/01/31/679c832eb30a1.png',
    title: '动态光影质感',
  },
  {
    content: '层叠交相辉映，如溪流般自然渗透，错位纹理，深邃动感。',
    favicon: 'https://img2.quotawish.com/2025/01/31/679c8348a00c7.png',
    title: '模糊叠层混色',
  },
];

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

    &::before {
      content: '';
      position: absolute;

      top: 50%;
      left: 50%;

      height: 80%;
      width: 50%;

      opacity: 0.3;
      filter: blur(15px);
      transform: translate(-50%, -50%);
      background: linear-gradient(
        180deg,
        transparent,
        rgba(97, 106, 115, 0.23) 40%,
        rgba(97, 106, 115, 0.27) 60%,
        rgba(97, 106, 115, 0)
      );
    }
  `,
  header: css`
    margin: 1rem 0;
    display: flex;

    width: 100%;

    gap: 10%;
    align-items: flex-end;
    justify-content: space-between;

    h2 {
      flex: 1 1 40%;
      text-align: start !important;
      font-size: 45px !important;
    }
    p {
      flex: 1 1 40%;
      text-align: end !important;
      font-size: 15px !important;
    }
  `,
  main: css`
    position: relative
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    max-width: 800px;

    gap: 1rem;
    align-items: center;
    justify-content: center;

    h2 {
      margin: 0;
      font-size: 32px;
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      -webkit-text-fill-color: transparent;

      background: linear-gradient(90deg, #58E5BB 0.04%, #E1BB88 100.04%) text;
    }

    p {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;

      font-size: 24px;
      max-width: 920px;
      opacity: 0.6;
    }

    img {
      filter: brightness(1.25)
    }
  `,
  slogan: css`
    margin: 1rem 0;
    font-size: 38px;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    -webkit-text-fill-color: transparent;

    background: linear-gradient(90deg, #40ffaa 0.04%, #4079ff 100.04%) text;
  `,
}));

const render = ({ title, content, favicon }: (typeof data)[0]) => (
  <Flexbox align={'center'} gap={8} key={title} style={{ padding: 16 }}>
    <img title={title} src={favicon} />
    <Flexbox direction="vertical" gap={4}>
      <div style={{ fontSize: 18, fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 16, lineHeight: 1.4, opacity: 0.6 }}>{content}</div>
    </Flexbox>
  </Flexbox>
);

export default () => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h2>
            动态专注，
            <br />
            无缝工艺。
            {/* <p style={{ fontSize: '30px', margin: '0 1rem' }}>
              Dynamic Interface. Seamless Learning.
            </p> */}
          </h2>
          <p>
            重塑数字体验界面，采用呼吸式交互设计，手势操作沿人体工学黄金弧度自然延展，0.2秒的弹性微动画让信息如心跳般律动。
          </p>
        </div>

        <SpotlightCard items={data} renderItem={render} />
      </div>

      <h1 className={styles.slogan}>发现学习之美。</h1>

      <Divider />
    </div>
  );
};
