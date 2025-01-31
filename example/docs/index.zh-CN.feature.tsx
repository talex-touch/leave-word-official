import { AuroraBackground, GridShowcase, Image, SpotlightCard, TabsNav, Video } from '@lobehub/ui';
import { Button, Divider } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { RAGDisplayer } from '../bits/components/TechDisplayer/RAGDisplay';
import Stack from './../bits/components/Stack/Stack';

const data = [
  {
    content: '像翻阅电子书般流畅的背词体验',
    favicon: 'https://img2.quotawish.com/2025/01/30/679b4b5646ac6.png',
    title: '记忆，从未如此流动',
  },
  {
    content: '每个词汇自动生成记忆脉络',
    favicon: 'https://img2.quotawish.com/2025/01/30/679b4fd982d7b.png',
    title: '词枢流形引擎',
  },
  {
    content: '遗忘曲线化作自然记忆节律',
    favicon: 'https://img2.quotawish.com/2025/01/30/679b5037c4b72.png',
    title: '记忆脉冲，随思而动',
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
  featureRecall: css`
    display: flex;
    flex-direction: column;

    gap: 1rem;
    align-items: center;

    h1 {
      margin: 1rem 0;
      font-size: 32px;
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      -webkit-text-fill-color: transparent;

      background: linear-gradient(90deg, #327648 0.04%, #e6b226 100.04%) text;
    }
    h2 {
      margin: 1rem 0;
      font-size: 30px;
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      -webkit-text-fill-color: transparent;

      opacity: 0.75;
      background: linear-gradient(90deg, #0086d1 0.04%, #fe2857 100.04%) text;
    }
  `,
  featureVocab: css`
    margin: 1rem 0;
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
        <h2>流动记忆，触手可及</h2>
        <p>手指的每一次轻弹都让你心跳加速</p>
        <p style={{ textAlign: 'end' }}>
          滑动以点燃好奇心
          <p>———— 「轻滑. 轻波. 轻抛.」</p>
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

const FeatureVocab = ({ className }: { className: string }) => {
  return (
    <>
      <div className={className}>
        <GridShowcase style={{ width: '100%' }}>
          {/* <LogoThree size={180} style={{ marginTop: -64 }} /> */}
          <div style={{ fontSize: 48, fontWeight: 600, marginTop: -16 }}>词根引力赛道</div>
          <div>驰骋词林长跑，每一次指尖潮涌催生记忆年轮</div>
        </GridShowcase>
      </div>
      <div style={{ width: '800px' }}>
        <Video
          poster={
            'https://img2.quotawish.com/video/cover/%E8%AF%8D%E5%90%91%E9%87%8F%E5%8F%AF%E8%A7%86%E5%8C%96%E8%A7%86%E9%A2%91%20-%20Compressed.mp4.png'
          }
          src="https://img2.quotawish.com/video/%E8%AF%8D%E5%90%91%E9%87%8F%E5%8F%AF%E8%A7%86%E5%8C%96%E8%A7%86%E9%A2%91%20-%20Compressed.mp4"
        />
      </div>
    </>
  );
};

const FeatureRecall = ({ className }: { className: string }) => {
  const [tabKey, setTabKey] = useState('vector');

  return (
    <div className={className}>
      <div style={{ height: '64px', position: 'relative', width: 'max-content' }}>
        <h1>记忆脉冲，随思而动</h1>
        <div
          style={{
            filter: 'blur(5px)',
            height: '100%',
            position: 'absolute',
            top: '1.5rem',
            width: '100%',
          }}
        >
          <AuroraBackground />
        </div>
      </div>

      <TabsNav
        items={[
          {
            key: 'vector',
            label: '多维词谱',
          },
          {
            key: 'neural',
            label: '神经共振',
          },
          {
            key: 'generation',
            label: '脉冲生成',
          },
        ]}
        onChange={(key) => setTabKey(key)}
        variant="compact"
      />
      {tabKey === 'vector' && (
        <div style={{ width: '800px' }}>
          <h2>突破传统词频逻辑，用768维向量空间重构你的记忆图谱。</h2>
          <Video
            poster={
              'https://img2.quotawish.com/video/cover/%E8%AF%8D%E5%90%91%E9%87%8F%E5%8F%AF%E8%A7%86%E5%8C%96%E8%A7%86%E9%A2%91%20-%20Compressed.mp4.png'
            }
            src="https://img2.quotawish.com/video/%E8%AF%8D%E5%90%91%E9%87%8F%E9%80%89%E6%8B%A9%E8%A7%86%E9%A2%91.mp4"
          />
        </div>
      )}
      {tabKey === 'neural' && (
        <div style={{ width: '800px' }}>
          <h2>学习轨迹是算法养料，重塑遗忘曲线。</h2>
          <Video
            poster={
              'https://img2.quotawish.com/video/cover/%E8%AF%8D%E5%90%91%E9%87%8F%E5%8F%AF%E8%A7%86%E5%8C%96%E8%A7%86%E9%A2%91%20-%20Compressed.mp4.png'
            }
            src="https://img2.quotawish.com/video/%E8%AF%8D%E5%90%91%E9%87%8F%E5%88%86%E6%9E%90%E8%A7%86%E9%A2%91.mp4"
          />
        </div>
      )}
      {tabKey === 'generation' && (
        <div style={{ width: '800px' }}>
          <h2>遗忘曲线遇见实时热点，记忆锚点永远精准卡位认知脉搏。</h2>
          <div style={{ height: '400px', width: '800px' }}>
            <RAGDisplayer />
          </div>
        </div>
      )}
    </div>
  );
};

const render = ({ title, content, favicon }: (typeof data)[0]) => (
  <Flexbox align={'flex-start'} gap={8} key={title} style={{ padding: 16 }}>
    <Image preview={false} src={favicon} />
    <Flexbox gap={4}>
      <div style={{ fontSize: 18, fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 16, lineHeight: 1.4, opacity: 0.6 }}>{content}</div>
    </Flexbox>
    <Button style={{ width: '100%' }}>了解更多</Button>
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

      <FeatureMotion className={styles.featureMotion} />
      <FeatureVocab className={styles.featureVocab} />
      <FeatureRecall className={styles.featureRecall} />

      <h1 className={styles.slogan}>遗忘，从此成为精密的艺术。</h1>

      <Divider />
    </>
  );
};
