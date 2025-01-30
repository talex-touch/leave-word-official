import { Features, FeaturesProps, Snippet } from '@lobehub/ui';
import { Map, Zap, BrainCircuit } from 'lucide-react';
import React from 'react';
import { Center } from 'react-layout-kit';

const items: FeaturesProps['items'] = [
  {
    description:
      '基于多模态记忆拓扑架构，通过多源信息整合协议实现语义光合作用。每秒完成1500次跨模态知识蒸馏，在智能分层流形存储架构中构建认知决策森林，信息留存效率提升4.8倍。',
    icon: Map,
    title: 'RAGGenForm 记忆拓扑引擎',
  },
  {
    description:
      '采用高维语义流形折叠技术，实现毫秒级语义匹配。通过智能关联协议自动生成语义网络、纠缠协议自动生成记忆超平面，使相似词簇的柯尔莫哥洛夫复杂度降低至最优解空间',
    icon: Zap,
    title: 'REMDesign 语义纠缠密度',
  },
  {
    description:
      '融合LSTM-GCN的认知增强框架，实时追踪记忆轨迹与行为特征。预测遗忘临界点并生成（词频×难度×场景）三维训练体，在记忆衰退期触发强化训练，使长期记忆保留率提升67%',
    icon: BrainCircuit,
    title: 'CogniX 神经增强体',
  },
];

export default () => {
  return (
    <Center gap={32}>
      <Center>
        <h2 style={{ fontSize: 20 }}>离开单词 抵达世界</h2>
        <Snippet language={'bash'}>{'$ 全平台支持'}</Snippet>
      </Center>
      <Features items={items} />
    </Center>
  );
};