function colorHex(color) {
  var that = color;
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是rgb颜色表示
  if (/^(rgb|RGB)/.test(that)) {
    var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      if (hex.length < 2) {
        hex = '0' + hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = that;
    }
    return strHex;
  }
  else if (reg.test(that)) {
    var aNum = that.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return that;
    }
    else if (aNum.length === 3) {
      var numHex = "#";
      for (var i = 0; i < aNum.length; i += 1) {
        numHex += (aNum[i] + aNum[i]);
      }
      return numHex;
    }
  }
  return that;
}
function colorRgb(color, opacity) {
  var sColor = color.toLowerCase();
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    return "rgba(" + sColorChange.join(",") + "," + opacity + ")";
  }
  return sColor;
}

var Wave = /** @class */ (function () {
  function Wave(container, options) {
    var originOption = {
      number: 3,
      smooth: 50,
      velocity: 1,
      height: .3,
      colors: ['#ff7657'],
      border: {
        show: false,
        width: 2,
        color: ['']
      },
      opacity: .5,
      position: 'bottom',
    };
    this.container = document.querySelector(container);
    this.options = Object.assign(originOption, options);
    this.lines = [];
    this.frame = null;
    this.step = 0;
    this.status = 'pause';
    this.init();
    this.draw();
  }
  Wave.prototype.init = function () {
    if (this.container.querySelector('canvas') === null) {
      var canvas = document.createElement('canvas');
      this.container.appendChild(canvas);
    }
    this.canvas = this.container.querySelector('canvas');
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
    this.ctx = this.canvas.getContext('2d');
    this.setLines();
  };
  Wave.prototype.animate = function () {
    this.status = 'animating';
    this.draw();
  };
  Wave.prototype.pause = function () {
    cancelAnimationFrame(this.frame);
    this.frame = null;
    this.status = 'pause';
  };
  Wave.prototype.setOptions = function (options) {
    this.options = Object.assign(this.options, options);
    this.setLines();
    this.reset();
    if (this.status === 'pause') {
      this.draw();
    }
  };
  Wave.prototype.reset = function () {
    this.init();
  };
  Wave.prototype.draw = function () {
    var _this = this;
    var canvas = this.canvas;
    var ctx = this.ctx;
    var height = this.getWaveHeight();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.step += this.options.velocity;
    this.lines.forEach(function (line, index) {
      var angle = (_this.step + index * 180 / _this.lines.length) * Math.PI / 180;
      var leftHeight = Math.sin(angle) * _this.options.smooth;
      var rightHeight = Math.cos(angle) * _this.options.smooth;
      var vertexs = _this.getVertexs(leftHeight, rightHeight);
      ctx.fillStyle = line.rgba;
      ctx.beginPath();
      ctx.moveTo(vertexs[0][0], vertexs[0][1]);
      if (_this.options.border.show) {
        ctx.lineWidth = _this.options.border.width;
        ctx.strokeStyle = _this.options.border.color[index] ? _this.options.border.color[index] : line.hex;
      }
      if (_this.options.position === 'left' || _this.options.position === 'right') {
        ctx.bezierCurveTo(height + leftHeight - _this.options.smooth, canvas.height / 2, height + rightHeight - _this.options.smooth, canvas.width / 2, vertexs[1][0], vertexs[1][1]);
      }
      else {
        ctx.bezierCurveTo(canvas.width / 2, height + leftHeight - _this.options.smooth, canvas.width / 2, height + rightHeight - _this.options.smooth, vertexs[1][0], vertexs[1][1]);
      }
      if (_this.options.border.show) {
        ctx.stroke();
      }
      ctx.lineTo(vertexs[2][0], vertexs[2][1]);
      ctx.lineTo(vertexs[3][0], vertexs[3][1]);
      ctx.lineTo(vertexs[0][0], vertexs[0][1]);
      ctx.closePath();
      ctx.fill();
    });
    var that = this;
    if (this.status === 'animating') {
      this.frame = requestAnimationFrame(function () {
        that.draw();
      });
    }
  };
  Wave.prototype.setLines = function () {
    this.lines = [];
    for (var i = 0; i < this.options.number; i++) {
      var color = this.options.colors[i % this.options.colors.length];
      var line = {
        hex: colorHex(color),
        rgba: colorRgb(color, this.options.opacity)
      };
      this.lines.push(line);
    }
  };
  Wave.prototype.getVertexs = function (leftHeight, rightHeight) {
    var canvasHeight = this.canvas.height;
    var canvasWidth = this.canvas.width;
    var waveHeight = this.getWaveHeight();
    switch (this.options.position) {
      case 'bottom':
        return [
          [0, waveHeight + leftHeight],
          [canvasWidth, waveHeight + rightHeight],
          [canvasWidth, canvasHeight],
          [0, canvasHeight]
        ];
      case 'top':
        return [
          [0, waveHeight + leftHeight],
          [canvasWidth, waveHeight + rightHeight],
          [canvasWidth, 0],
          [0, 0],
        ];
      case 'left':
        return [
          [waveHeight + leftHeight, 0],
          [waveHeight + rightHeight, canvasHeight],
          [0, canvasHeight],
          [0, 0],
        ];
      case 'right':
        return [
          [waveHeight + leftHeight, 0],
          [waveHeight + rightHeight, canvasHeight],
          [canvasWidth, canvasHeight],
          [canvasWidth, 0],
        ];
    }
  };
  Wave.prototype.getWaveHeight = function () {
    if (this.options.height > 1) {
      switch (this.options.position) {
        case 'bottom':
          return this.canvas.height - this.options.height;
        case 'top':
          return this.options.height;
        case 'left':
          return this.options.height;
        case 'right':
          return this.canvas.width - this.options.height;
      }
    }
    else {
      switch (this.options.position) {
        case 'bottom':
          return this.canvas.height * (1 - this.options.height);
        case 'top':
          return this.canvas.height * this.options.height;
        case 'left':
          return this.canvas.width * this.options.height;
        case 'right':
          return this.canvas.width * (1 - this.options.height);
      }
    }
  };
  return Wave;
}());

export default Wave;
