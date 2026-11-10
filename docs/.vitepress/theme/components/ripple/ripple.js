const utils = {
  colorHex(color) {
    var that = color
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    // 如果是rgb颜色表示
    if (/^(rgb|RGB)/.test(that)) {
      var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",")
      var strHex = "#"
      for (var i = 0; i < aColor.length; i++) {
        var hex = Number(aColor[i]).toString(16)
        if (hex.length < 2) {
          hex = '0' + hex
        }
        strHex += hex
      }
      if (strHex.length !== 7) {
        strHex = that
      }
      return strHex
    } else if (reg.test(that)) {
      var aNum = that.replace(/#/, "").split("")
      if (aNum.length === 6) {
        return that
      } else if (aNum.length === 3) {
        var numHex = "#"
        for (var i = 0; i < aNum.length; i += 1) {
          numHex += (aNum[i] + aNum[i])
        }
        return numHex
      }
    }
    return that
  },

  colorRgb(color) {
    var sColor = color.toLowerCase()
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    // 如果是16进制颜色
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        var sColorNew = "#"
        for (var i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
        }
        sColor = sColorNew
      }
      //处理六位的颜色值
      var sColorChange = []
      for (var i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)))
      }
      // return "RGB(" + sColorChange.join(",") + ")"
      return sColorChange
    }
    return sColor
  },

  getRgbColor(color) {
    return this.colorRgb(this.colorHex(color))
  },

  randomAngle() {
    return Math.PI / 180 * parseInt(Math.random() * 360, 10)
  },

  randomInterval(min,max) {
    return parseInt(Math.random() * (max - min + 1) + min, 10)
  },

  addStyles(dom, styles) {
    if (dom) {
      for (let key in styles) {
        dom['style'][key] = styles[key]
      }
    }
  },

  loadSource(url){
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'arraybuffer';
      request.onload = function () {
        resolve(request.response)
      }
      request.send()
    })

  }
}

class Ripple {
  constructor(container, params = {}) {
    const originParams = {
      cover: '',
      size: 500,  // 画布 canvas 的尺寸
      radius: 100,  // 封面图，中心圆的半径，小于零则为容器的百分比
      interval: [500, 1500],  // 涟漪出现的最小频率（毫秒）
      centerColor: '#ddd',  // 封面图位置的颜色（在没有封面图时显示）
      borderWidth: 5,  //  封面图边框的宽度
      borderColor: '#aaa',  // 封面图边框的颜色
      rippleWidth: 4,  // 涟漪圆环的宽度
      rippleColor: '#fff',  // 涟漪颜色
      pointRadius: 8,  // 涟漪圆点的半径
      rotateAngle: .3, // 封面图每帧旋转的角度
    }

    this.container = typeof container === "string" ? document.querySelector(container) : container

    this.params = Object.assign(originParams, params)

    this.cover = this.params.cover  // 封面图，应当存在 audio 标签的 cover 属性中

    this.radius = this.params.radius < 1 ? this.params.size * this.params.radius : this.params.radius

    this.center = this.params.size / 2  // 中心点

    this.rate = 0  // 记录播放的帧数
    this.frame = null  // 帧动画，用于取消
    this.rippleLines = []  // 存储涟漪圆环的半径
    this.ripplePoints = []  // 存储涟漪点距离中心点的距离

    this.lastripple = 0
    this.isRandom = Array.isArray(this.params.interval)
    this.minInterval = this.isRandom ? utils.randomInterval(this.params.interval[0], this.params.interval[1]) : this.params.interval

    this.initCanvas()
  }

  initCanvas() {
    this.container.innerHTML = `<canvas width="${this.params.size}" height="${this.params.size}"></canvas>${this.cover ? `<img src="${this.cover}" alt="">` : ''}`

    this.cover = this.container.querySelector('img')
    this.canvas = this.container.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')

    this.rotate = 0

    const containerStyle = {
      'position': 'relative',
      'overflow': 'hidden',
      'width':`${this.params.size}px`,
      'height':`${this.params.size}px`,
    }
    const canvasStyle = {
      'display': 'block',
      'background': 'transparent',
    }
    const coverStyle = {
      'width': `${this.radius * 2}px`,
      'height': `${this.radius * 2}px`,
      'border-radius': '50%',
      'object-fit': 'cover',
      'position': 'absolute',
      'left': '0',
      'right': '0',
      'top': '0',
      'bottom': '0',
      'margin': 'auto'
    }

    utils.addStyles(this.container, containerStyle)
    utils.addStyles(this.canvas, canvasStyle)
    utils.addStyles(this.cover, coverStyle)

    this.strokeBorder()
  }

  strokeCenterCircle() {
    const ctx = this.ctx
    ctx.beginPath()
    ctx.arc(this.center, this.center, this.radius, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = this.params.centerColor
    ctx.fill()
  }

  strokeBorder() {
    const ctx = this.ctx
    ctx.beginPath()
    ctx.arc(this.center, this.center, this.radius + this.params.borderWidth / 2, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.strokeStyle = this.params.borderColor
    ctx.lineWidth = 5
    ctx.stroke()
  }

  strokeripple() {
    if (this.rippleLines[0] > this.params.size) {
      this.rippleLines.shift()
      this.ripplePoints.shift()
    }

    if (this.rate - this.lastripple >= this.minInterval) {
      if (this.isRandom) {
        this.minInterval = utils.randomInterval(this.params.interval[0], this.params.interval[1])
      }

      this.rippleLines.push({
        r: this.radius + this.params.borderWidth + this.params.rippleWidth / 2,
        color: utils.getRgbColor(this.params.rippleColor)
      })

      this.ripplePoints.push({
        angle: utils.randomAngle()
      })

      this.lastripple = this.rate
    }

    this.rippleLines = this.rippleLines.map((line, index) => {
      line.r += 1
      line.color[3] = (this.center - line.r) / (this.center - this.radius)
      line.gapAngle = Math.asin(this.params.pointRadius / 2 / line.r) * 2
      line.startAngle = this.ripplePoints[index]['angle'] + line.gapAngle

      return line
    })

    this.ripplePoints = this.rippleLines.map((line, index) => {
      const point = this.ripplePoints[index]

      point.x = this.center + line.r * Math.cos(point.angle)
      point.y = this.center + line.r * Math.sin(point.angle)
      point.color = line.color

      return point
    })

    this.strokerippleLine()
    this.strokeripplePoint()
  }

  strokerippleLine() {
    const ctx = this.ctx
    this.rippleLines.forEach((line, index) => {

      ctx.beginPath()
      ctx.arc(this.center, this.center, line.r, line.startAngle, line.startAngle + 2 * Math.PI - line.gapAngle * 2)
      ctx.strokeStyle = `rgba(${line.color.join(',')})`
      ctx.lineWidth = this.params.rippleWidth
      ctx.stroke()
    })
  }

  strokeripplePoint() {
    const ctx = this.ctx
    this.ripplePoints.forEach((point) => {
      ctx.beginPath()
      ctx.arc(point.x, point.y, this.params.pointRadius, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fillStyle = `rgba(${point.color.join(',')})`
      ctx.fill()
    })
  }

  animate() {
    this.ctx.clearRect(0, 0, this.params.size, this.params.size)

    this.strokeripple()
    this.strokeCenterCircle()
    this.strokeBorder()

    if (this.cover) {
      this.rotate += this.params.rotateAngle
      this.cover.style.transform = `rotate(${this.rotate}deg)`
    }

    this.rate += 16.7

    var that = this;
    this.frame = requestAnimationFrame(function () {
      that.animate()
    })

  }

  cancelAnimate() {
    cancelAnimationFrame(this.frame)
  }

  setCover(src) {
    this.cover.setAttribute('src', src)
  }
}


export default Ripple
