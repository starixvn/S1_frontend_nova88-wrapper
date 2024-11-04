module.exports = function () {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
      <style>
        body, html {
          overflow-y: hidden;
          overflow-x: hidden;
          background: #ecf3fd;
          height: 100%;
          font-size: 12px;
          font-family: "Microsoft YaHei",sans-serif;
          color: #fff;
        }
        
        #loading {
          display: flex;
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background: #ecf3fd;
          z-index: 4;
        }
        
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: row;
          margin: 0 auto;
          width: 50%;
          background: #ecf3fd;
        }
        
        .text {
          width: 100%;
          position: absolute;
          transform: translateY(25vw);
          font-size: 4vw;
          text-align: center;
          color: #5574a7;
        }
        
        h1 {
          transform: rotateX(-37.5deg) rotateY(45deg);
          -webkit-animation: rotate 3s ease infinite;
          animation: rotate 3s ease infinite;
          -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;
        }
        
        h1::after {
          font-size: 4vw;
          font-weight: 700;
          content: "NOVA88";
          position: absolute;
          color: #fff;
          transform: translateX(-50%) translateY(-50%);
          text-shadow: -1px -1px 1px #333, -2px -2px 1px #333, -3px -3px 1px #333,
            -4px -4px 1px #333, -5px -5px 1px #333, -6px -6px 1px #333,
            -7px -7px 5px rgb(0 0 128 / 75%);
        }
        
        .cube {
          -webkit-animation: rotate 3s ease infinite;
          animation: rotate 3s ease infinite;
          -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;
          transform-style: preserve-3d;
          transform: rotateX(-37.5deg) rotateY(45deg);
          position: absolute;
          width: 16vw;
          height: 16vw;
          z-index: 1;
        }
        
        .cube * {
          box-sizing: border-box;
          background-color: rgba(85, 116, 167, 0.1);
          border: 1px solid #5574a7;
          position: absolute;
          width: 16vw;
          height: 16vw;
          z-index: 1;
          -webkit-animation-delay: 0ms;
          animation-delay: 0ms;
          -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          transform-origin: 50% 50%;
        }
        
        .top {
          -webkit-animation: top-animation 3s ease infinite;
          animation: top-animation 3s ease infinite;
          transform: rotateX(90deg) translateZ(16vw);
        }
        
        .right {
          -webkit-animation: right-animation 3s ease infinite;
          animation: right-animation 3s ease infinite;
          transform: rotateY(90deg) translateZ(16vw);
        }
        
        .bottom {
          -webkit-animation: bottom-animation 3s ease infinite;
          animation: bottom-animation 3s ease infinite;
          transform: rotateX(-90deg) translateZ(16vw);
        }
        
        .left {
          -webkit-animation: left-animation 3s ease infinite;
          animation: left-animation 3s ease infinite;
          transform: rotateY(-90deg) translateZ(16vw);
        }
        
        .front {
          -webkit-animation: front-animation 3s ease infinite;
          animation: front-animation 3s ease infinite;
          transform: rotateY(0deg) translateZ(16vw);
        }
        
        .back {
          -webkit-animation: back-animation 3s ease infinite;
          animation: back-animation 3s ease infinite;
          transform: rotateY(-180deg) translateZ(16vw);
        }
        
        @keyframes rotate {
          0% {
            transform: rotateX(-37.5deg) rotateY(45deg);
          }
          50% {
            transform: rotateX(-37.5deg) rotateY(405deg);
          }
          100% {
            transform: rotateX(-37.5deg) rotateY(405deg);
          }
        }
        
        @keyframes top-animation {
          0% {
            opacity: 1;
            transform: rotateX(90deg) translateZ(16vw);
          }
          20% {
            opacity: 1;
            transform: rotateX(90deg) translateZ(8vw);
          }
          70% {
            opacity: 1;
            transform: rotateX(90deg) translateZ(8vw);
          }
          90% {
            opacity: 1;
            transform: rotateX(90deg) translateZ(16vw);
          }
          100% {
            opacity: 1;
            transform: rotateX(90deg) translateZ(16vw);
          }
        }
        
        @keyframes right-animation {
          0% {
            opacity: 1;
            transform: rotateY(90deg) translateZ(16vw);
          }
          20% {
            opacity: 1;
            transform: rotateY(90deg) translateZ(8vw);
          }
          70% {
            opacity: 1;
            transform: rotateY(90deg) translateZ(8vw);
          }
          90% {
            opacity: 1;
            transform: rotateY(90deg) translateZ(16vw);
          }
          100% {
            opacity: 1;
            transform: rotateY(90deg) translateZ(16vw);
          }
        }
        
        @keyframes bottom-animation {
          0% {
            opacity: 1;
            transform: rotateX(-90deg) translateZ(16vw);
          }
          20% {
            opacity: 1;
            transform: rotateX(-90deg) translateZ(8vw);
          }
          70% {
            opacity: 1;
            transform: rotateX(-90deg) translateZ(8vw);
          }
          90% {
            opacity: 1;
            transform: rotateX(-90deg) translateZ(16vw);
          }
          100% {
            opacity: 1;
            transform: rotateX(-90deg) translateZ(16vw);
          }
        }
        
        @keyframes left-animation {
          0% {
            opacity: 1;
            transform: rotateY(-90deg) translateZ(16vw);
          }
          20% {
            opacity: 1;
            transform: rotateY(-90deg) translateZ(8vw);
          }
          70% {
            opacity: 1;
            transform: rotateY(-90deg) translateZ(8vw);
          }
          90% {
            opacity: 1;
            transform: rotateY(-90deg) translateZ(16vw);
          }
          100% {
            opacity: 1;
            transform: rotateY(-90deg) translateZ(16vw);
          }
        }
        
        @keyframes front-animation {
          0% {
            opacity: 1;
            transform: rotateY(0deg) translateZ(16vw);
          }
          20% {
            opacity: 1;
            transform: rotateY(0deg) translateZ(8vw);
          }
          70% {
            opacity: 1;
            transform: rotateY(0deg) translateZ(8vw);
          }
          90% {
            opacity: 1;
            transform: rotateY(0deg) translateZ(16vw);
          }
          100% {
            opacity: 1;
            transform: rotateY(0deg) translateZ(16vw);
          }
        }
        
        @keyframes back-animation {
          0% {
            opacity: 1;
            transform: rotateY(-180deg) translateZ(16vw);
          }
          20% {
            opacity: 1;
            transform: rotateY(-180deg) translateZ(8vw);
          }
          70% {
            opacity: 1;
            transform: rotateY(-180deg) translateZ(8vw);
          }
          90% {
            opacity: 1;
            transform: rotateY(-180deg) translateZ(16vw);
          }
          100% {
            opacity: 1;
            transform: rotateY(-180deg) translateZ(16vw);
          }
        }
      </style>
    </head>
    <body>
    <div id="loading">
      <div class="container">
        <div class="cube">
          <div class="top"></div>
          <div class="right"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="front"></div>
          <div class="back"></div>
        </div>
        <h1></h1>
        <div class="text">{TextPlaceholder}<span>...</span></div>
      </div>
    </div>
    </body>
  </html>`;
};
