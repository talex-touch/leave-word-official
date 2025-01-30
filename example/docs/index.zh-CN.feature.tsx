import { SpotlightCard, Image } from '@lobehub/ui';
import { Button } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';
import { Flexbox } from 'react-layout-kit';

const data = [
  {
    content:
      '像翻阅电子书般流畅的背词体验',
    favicon: 'https://img2.quotawish.com/2025/01/30/679b4b5646ac6.png',
    title: '记忆，从未如此流动',
  },
  {
    content:
      '每个词汇自动生成记忆脉络',
    favicon: 'https://img2.quotawish.com/2025/01/30/679b4fd982d7b.png',
    title: '单词生长系统',
  },
  {
    content:
      '遗忘曲线化作自然记忆节律',
    favicon: 'https://img2.quotawish.com/2025/01/30/679b5037c4b72.png',
    title: '智能词频呼吸',
  },
];

const useStyles = createStyles(({ cx, token, responsive, css }, isPure: boolean) => ({
  container: css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    width: 100%;

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

      background: linear-gradient(90deg, rgb(255, 248, 85) 0.04%, rgb(70, 227, 183) 100.04%) text;
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
      max-width: 820px;
      opacity: 0.6;
    }
  `,
}));

const render = ({ title, content, favicon }: (typeof data)[0]) => (
  <Flexbox align={'flex-start'} gap={8} key={title} style={{ padding: 16 }}>
    <Image
      preview={false}
      src={favicon}
    />
    <Flexbox gap={4}>
      <div style={{ fontSize: 18, fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 16, lineHeight: 1.4, opacity: 0.6 }}>{content}</div>
    </Flexbox>
    <Button style={{ width: '100%' }}>
      了解更多
    </Button>
  </Flexbox>
);


export default () => {
  const { styles } = useStyles();

  return (
    <>
      <div className={styles.container}>
        <h2>词间蔓生</h2>
        <p className="layoutkit-flexbox css-o3n4io acss-pl6lf1 max-w-[800px] opacity-60">
          随时唤醒你的AI词库伙伴，直觉界面智能切换记忆场景，构建无界单词对话流
        </p>
      </div>
      <SpotlightCard items={data} renderItem={render} />
    </>
  );
};
