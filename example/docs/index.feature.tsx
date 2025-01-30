import { Image, SpotlightCard } from '@lobehub/ui';
import { Button, Divider } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';
import { Flexbox } from 'react-layout-kit';

import Stack from './../bits/components/Stack/Stack';

const data = [
  {
    content: 'Swipe through words like turning pages',
    favicon: 'https://img2.quotawish.com/2025/01/30/679b4b5646ac6.png',
    title: 'Memory in Motion',
  },
  {
    content: 'Let words grow roots in your mind',
    favicon: 'https://img2.quotawish.com/2025/01/30/679b4fd982d7b.png',
    title: 'Vocab Ecosystem',
  },
  {
    content: "Your brain's rhythm, learned by AI",
    favicon: 'https://img2.quotawish.com/2025/01/30/679b5037c4b72.png',
    title: 'Adaptive Recall Pulse',
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
      max-width: 920px;
      opacity: 0.6;
    }
  `,
  featureMotion: css`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10%;
    width: 100%;

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

    h2 {
      margin: 0;
      font-size: 32px;
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      -webkit-text-fill-color: transparent;

      background: linear-gradient(90deg, #327648 0.04%, #e6b226 100.04%) text;
    }
  `,
}));

const render = ({ title, content, favicon }: (typeof data)[0]) => (
  <Flexbox align={'flex-start'} gap={8} key={title} style={{ padding: 16 }}>
    <Image preview={false} src={favicon} />
    <Flexbox gap={4}>
      <div style={{ fontSize: 18, fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 16, lineHeight: 1.4, opacity: 0.6 }}>{content}</div>
    </Flexbox>
    <Button style={{ width: '100%' }}>Learn more</Button>
  </Flexbox>
);

const FeatureMotion = ({ className }: { className: string }) => {
  const images: any = [
    { id: 1, img: 'https://img2.quotawish.com/2025/01/30/679b72b2c381e.png', word: 'variant' },
    { id: 2, img: 'https://img2.quotawish.com/2025/01/30/679b727384b2c.png', word: 'appreciate' },
    { id: 3, img: 'https://img2.quotawish.com/2025/01/30/679b727f04a7a.png', word: 'blur' },
    { id: 4, img: 'https://img2.quotawish.com/2025/01/30/679b72978979d.png', word: 'grayish' },
    { id: 5, img: 'https://img2.quotawish.com/2025/01/30/679b72a59a266.png', word: 'retrieve' },
  ];

  return (
    <div className={className}>
      <div style={{ position: 'relative', top: '1rem' }}>
        <h2>Fluid Cognition. Effortless Mastery. </h2>
        <p>Every flick of your finger feels like the first touch. </p>
        <p style={{ textAlign: 'end' }}>
          Swipe to Ignite Curiosity
          <p>---- 「Swipe. Scroll. Slide.」</p>
        </p>
      </div>
      <Stack
        cardDimensions={{ height: 300, width: 220 }}
        cardsData={images}
        randomRotation={true}
        sendToBackOnClick={false}
        sensitivity={180}
      />
    </div>
  );
};

export default () => {
  const { styles } = useStyles();

  return (
    <>
      <Divider />
      <div className={styles.container}>
        <h2>LeafTalk</h2>
        <p className="layoutkit-flexbox css-o3n4io acss-pl6lf1 max-w-[800px] opacity-60">
          Activate your lexical AI companion anywhere, toggle memory contexts via neural interface,
          and flow through unbounded vocabulary conversations.
        </p>
      </div>
      <SpotlightCard items={data} renderItem={render} />

      <FeatureMotion className={styles.featureMotion} />
    </>
  );
};
