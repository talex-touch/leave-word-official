/*
	jsrepo 1.29.1
	Installed from https://reactbits.dev/tailwind/
	2025-1-30
*/
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import './stack.css'

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      drag
      dragConstraints={{ bottom: 0, left: 0, right: 0, top: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
      style={{ cursor: 'grab', position: 'absolute', rotateX, rotateY, x, y }}
      whileTap={{ cursor: 'grabbing' }}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { height: 208, width: 208 },
  cardsData = [],
  animationConfig = { damping: 20, stiffness: 260 },
  sendToBackOnClick = false,
}) {

  const [cards, setCards] = useState(
    cardsData.length > 0
      ? cardsData
      : [
          {
            id: 1,
            img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format',
          },
          {
            id: 2,
            img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format',
          },
          {
            id: 3,
            img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format',
          },
          {
            id: 4,
            img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format',
          },
        ],
  );

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="stack-container"
      style={{
        height: cardDimensions.height,
        perspective: 600,
        position: 'relative',
        width: cardDimensions.width,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 10 - 5 // Random degree between -5 and 5
          : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: '90% 90%',
              }}
              className="card"
              initial={false}
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              style={{
                borderRadius: '2rem',
                height: cardDimensions.height ?? '100%',
                overflow: 'hidden',
                position: 'absolute',
                width: cardDimensions.width ?? '100%',
              }}
              transition={{
                damping: animationConfig.damping,
                stiffness: animationConfig.stiffness,
                type: 'spring',
              }}
            >
              <img alt={`card-${card.id}`} className="card-image" src={card.img} style={{ height: '100%', objectFit: 'cover', width: '100%'}} />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
