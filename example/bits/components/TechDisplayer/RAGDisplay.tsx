import React, { useEffect, useRef } from 'react';

const drawRAG = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 初始化画布
  function resizeCanvas() {
    const parentEl = canvas.parentElement ?? document.body;
    const { width, height } = parentEl.getBoundingClientRect();

    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // 阶段配置
  const stages = [
    { color: '#4A90E2', name: 'Retrieval', x: 0.2 },
    { color: '#7ED321', name: 'Augumented', x: 0.5 },
    { color: '#F5A623', name: 'Generation', x: 0.8 },
  ];

  class DataBlock {
    phase: any;
    x: any;
    y: any;
    color: any;
    targetY: any;
    flashTimer: any;
    alpha: any;
    isActive: any;
    morphTimer: any;
    originalSize: any;
    size: any;
    colorTransition: any;
    enhanceTimer: any;
    enhanceScale: any;
    rotation: any;
    rotationSpeed: any;
    orbitRadius: any;
    orbitAngle: any;
    speedFactor: any;
    transitionProgress: any;

    constructor() {
      this.size = 15; // 稍微减小方块大小，这样画面不会太拥挤
      this.color = stages[0].color;
      this.reset();
    }

    reset() {
      this.phase = 0;
      this.x = -this.size;
      // 扩大随机起始范围
      this.y = canvas.height / 2 + (Math.random() - 0.5) * canvas.height * 0.8;
      this.targetY = canvas.height / 2;
      this.alpha = 0.8; // 稍微降低透明度，让重叠时不会太密集
      this.isActive = true;
      this.flashTimer = 0;
      this.morphTimer = 0;
      this.originalSize = this.size;
      this.colorTransition = 0;
      this.enhanceTimer = 0;
      this.enhanceScale = 1;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.1;
      this.orbitRadius = 0;
      this.orbitAngle = Math.random() * Math.PI * 2;
      // 降低基础速度范围
      this.speedFactor = 0.015 + Math.random() * 0.02; // 0.015-0.035的随机速度，原来是0.03-0.07
      this.transitionProgress = 0;
    }

    update() {
      if (!this.isActive) return;

      switch (this.phase) {
        case 0: {
          // 降低初始移动速度
          this.x += (canvas.width * stages[0].x - this.x) * (this.speedFactor * 0.8);
          this.y += (this.targetY - this.y) * (this.speedFactor * 0.5);
          this.rotation += this.rotationSpeed;

          if (this.x > canvas.width * stages[0].x - 10) {
            this.flashTimer += 0.1;
            this.alpha = 0.4 + Math.abs(Math.sin(this.flashTimer)) * 0.4;

            if (this.flashTimer > 2) {
              // 缩短停留时间
              this.phase = 0.5; // 添加过渡阶段
              this.alpha = 0.8;
              this.colorTransition = 0;
              this.transitionProgress = 0;
            }
          }
          break;
        }

        case 0.5: {
          // 检索到增强的过渡阶段
          const startX = canvas.width * stages[0].x;
          const endX = canvas.width * stages[1].x;
          // 减慢过渡速度
          this.transitionProgress = Math.min(1, this.transitionProgress + 0.01);

          const t = this.transitionProgress;
          const controlX = (startX + endX) / 2;
          const controlY = this.targetY - 150; // 增大弧线高度

          // 二次贝塞尔曲线插值
          this.x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * endX;
          this.y =
            (1 - t) * (1 - t) * this.targetY + 2 * (1 - t) * t * controlY + t * t * this.targetY;

          // 在运动过程中添加更明显的旋转和缩放效果
          this.rotation += this.rotationSpeed * 3;
          const scale = 1 + Math.sin(this.transitionProgress * Math.PI) * 0.5; // 增大缩放幅度
          this.size = this.originalSize * scale;

          // 颜色过渡
          this.colorTransition = this.transitionProgress;

          // 添加透明度变化
          this.alpha = 0.6 + Math.sin(this.transitionProgress * Math.PI) * 0.4;

          if (this.transitionProgress >= 1) {
            this.phase = 1;
            this.orbitRadius = 40;
            this.orbitAngle = Math.random() * Math.PI * 2;
            this.alpha = 0.8;
            this.size = this.originalSize;
          }
          break;
        }

        case 1: {
          const centerX = canvas.width * stages[1].x;
          // 减慢轨道运动速度
          this.orbitAngle += this.speedFactor * 1.5;
          this.orbitRadius = Math.max(0, this.orbitRadius - this.speedFactor * 8);

          this.x = centerX + Math.cos(this.orbitAngle) * this.orbitRadius;
          this.y = this.targetY + Math.sin(this.orbitAngle) * this.orbitRadius;

          this.rotation += this.rotationSpeed;
          this.colorTransition = Math.min(1, this.colorTransition + this.speedFactor * 0.8);

          if (this.orbitRadius < 1) {
            this.phase++;
            this.morphTimer = 0;
            this.colorTransition = 0;
            this.enhanceScale = 1.5;
          }
          break;
        }

        case 2: {
          // 减慢向生成阶段的移动速度
          this.x += (canvas.width * stages[2].x - this.x) * (this.speedFactor * 0.8);
          this.colorTransition = Math.min(1, this.colorTransition + this.speedFactor * 0.5);
          this.rotation += this.rotationSpeed * 0.5;

          if (Math.abs(this.x - canvas.width * stages[2].x) < 2) {
            this.morphTimer += 0.03; // 减慢变形速度
            if (this.morphTimer > Math.PI * 2) {
              this.phase++;
            }
          }
          break;
        }

        case 3: {
          // 减慢最终移动速度
          this.x += (canvas.width - this.size - this.x) * (this.speedFactor * 0.6);
          if (this.x > canvas.width - this.size * 1.5) {
            this.isActive = false;
          }
          break;
        }
      }
    }

    lerpColor(color1, color2, factor) {
      const r1 = Number.parseInt(color1.slice(1, 3), 16);
      const g1 = Number.parseInt(color1.slice(3, 5), 16);
      const b1 = Number.parseInt(color1.slice(5, 7), 16);

      const r2 = Number.parseInt(color2.slice(1, 3), 16);
      const g2 = Number.parseInt(color2.slice(3, 5), 16);
      const b2 = Number.parseInt(color2.slice(5, 7), 16);

      const r = Math.round(r1 + (r2 - r1) * factor);
      const g = Math.round(g1 + (g2 - g1) * factor);
      const b = Math.round(b1 + (b2 - b1) * factor);

      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    draw() {
      if (!this.isActive) return;

      ctx!.save();
      ctx!.globalAlpha = this.alpha;

      let currentColor;
      switch (this.phase) {
        case 0: {
          currentColor = stages[0].color;

          break;
        }
        case 0.5: {
          currentColor = this.lerpColor(stages[0].color, stages[1].color, this.colorTransition);

          break;
        }
        case 1: {
          currentColor = this.lerpColor(stages[0].color, stages[1].color, this.colorTransition);

          break;
        }
        case 2: {
          currentColor = this.lerpColor(stages[1].color, stages[2].color, this.colorTransition);

          break;
        }
        default: {
          currentColor = stages[2].color;
        }
      }

      ctx!.fillStyle = currentColor;

      let currentSize = this.size;
      let cornerRadius = this.size / 4;

      // 根据阶段应用不同的变换效果
      if (this.phase === 1) {
        currentSize = this.size * (1 + Math.sin(this.orbitAngle * 2) * 0.2);
        cornerRadius = (this.size / 3) * (1 + Math.sin(this.orbitAngle) * 0.5);
      } else if (this.phase === 2) {
        const scale = 1 + Math.sin(this.morphTimer) * 0.2;
        currentSize = this.size * scale * this.enhanceScale;
        cornerRadius = (this.size / 2) * Math.abs(Math.sin(this.morphTimer));
      }

      // 应用旋转
      ctx!.translate(this.x, this.y);
      ctx!.rotate(this.rotation);
      ctx!.translate(-this.x, -this.y);

      ctx!.beginPath();
      ctx!.roundRect(
        this.x - currentSize / 2,
        this.y - currentSize / 2,
        currentSize,
        currentSize,
        cornerRadius,
      );

      ctx!.fill();
      ctx!.restore();
    }
  }

  // 方块池
  const blocks: any[] = [];
  setInterval(() => {
    if (blocks.length < 200) {
      // 大幅增加最大方块数量
      blocks.push(new DataBlock());
    }
  }, 500); // 大幅减少生成间隔，让方块生成更频繁

  // 动画循环
  function animate() {
    ctx!.fillStyle = '#000';
    ctx!.fillRect(0, 0, canvas.width, canvas.height);

    // 绘制阶段标识
    for (const stage of stages) {
      ctx!.fillStyle = stage.color + '30';
      ctx!.beginPath();
      ctx!.arc(canvas.width * stage.x, canvas.height / 2, 50, 0, Math.PI * 2);
      ctx!.fill();

      ctx!.fillStyle = stage.color;
      ctx!.font = '16px Arial';
      ctx!.textAlign = 'center';
      ctx!.fillText(stage.name, canvas.width * stage.x, canvas.height / 2 + 70);
    }

    // 更新方块
    for (const [index, block] of blocks.entries()) {
      block.update();
      block.draw();
      if (!block.isActive) {
        blocks.splice(index, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
};

export const RAGDisplayer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const parent = canvasRef.current.parentElement;
        if (parent) {
          canvasRef.current.width = parent.clientWidth;
          canvasRef.current.height = parent.clientHeight;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onCanvasReady = (canvas: HTMLCanvasElement) => {
    drawRAG(canvas);
  };

  useEffect(() => {
    if (canvasRef.current) {
      onCanvasReady(canvasRef.current);
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} />;
};
