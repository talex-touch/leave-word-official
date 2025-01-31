import { Features, FeaturesProps, Snippet } from '@lobehub/ui';
import { BrainCircuit, Map, Zap } from 'lucide-react';
import React from 'react';
import { Center } from 'react-layout-kit';

const items: FeaturesProps['items'] = [
  {
    description:
      'Multimodal engine integrates cross-domain intelligence, enhancing retention 4.8x.',
    icon: Map,
    title: 'RAGGenForm Memory Topography Engine',
  },
  {
    description:
      'High-dimensional folding for fast pattern matching, optimizing clusters, reducing complexity.',
    icon: Zap,
    title: 'REMDesign Semantic Entanglement Matrix',
  },
  {
    description: 'LSTM-GCN tracks memory in real-time, predicts thresholds, boosts retention 67%.',
    icon: BrainCircuit,
    title: 'CogniX Neural Augmentation Core',
  },
];

export default () => {
  return (
    <Center gap={32}>
      <Center>
        <h2 style={{ fontSize: 20 }}>Leave words, Embrace Worlds!</h2>
        <Snippet language={'bash'}>{'$ ALL PLATFORMS SUPPORTED'}</Snippet>
      </Center>
      <Features items={items} />
    </Center>
  );
};
