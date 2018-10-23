var funParabola = function (element, target, options) {

  var defaults = {
    speed: 166.67, // 每帧移动的像素大小，每帧（对于大部分显示屏）大约16~17毫秒
    curvature: 0.001, // 实际指焦点到准线的距离，你可以抽象成曲率，这里模拟扔物体的抛物线，因此是开口向下的
    endScale: 0.5,
    progress: function () {},
    complete: function () {}
  };

  var params = {};
  options = options || {};

  for (var key in defaults) {
    params[key] = options[key] || defaults[key];
  }

  var exports = {
    mark: function () {
      return this;
    },
    position: function () {
      return this;
    },
    move: function () {
      return this;
    },
    init: function () {
      return this;
    }
  };

  // 根据两点坐标以及曲率确定运动曲线函数（也就是确定a, b的值）
  /* 公式： y = a*x*x + b*x + c;
   */
  var a = params.curvature,
    b = 0,
    c = 0;

  // 是否执行运动的标志量
  var flagMove = true;

  if (element && target && element.nodeType == 1 && target.nodeType == 1) {
    var rectElement = {},
      rectTarget = {};

    // 移动元素的中心点位置，目标元素的中心点位置
    var centerElement = {},
      centerTarget = {};

    // 目标元素的坐标位置
    var coordElement = {},
      coordTarget = {};

    // 标注当前元素的坐标
    exports.mark = function () {
      if (flagMove == false) return this;
      if (typeof coordElement.x == "undefined") this.position();
      element.setAttribute("data-center", [coordElement.x, coordElement.y].join());
      target.setAttribute("data-center", [coordTarget.x, coordTarget.y].join());

      return this;
    }

    exports.position = function () {
      if (flagMove == false) return this;

      var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      element.style['transform'] = "translate(0, 0)";

      // 四边缘的坐标
      rectElement = element.getBoundingClientRect();
      rectTarget = target.getBoundingClientRect();

      // 移动元素的中心点坐标
      centerElement = {
        x: rectElement.left + (rectElement.right - rectElement.left) / 2 + scrollLeft,
        y: rectElement.top + (rectElement.bottom - rectElement.top) / 2 + scrollTop
      };

      // 目标元素的中心点位置
      centerTarget = {
        x: rectTarget.left + (rectTarget.right - rectTarget.left) / 2 + scrollLeft,
        y: rectTarget.top + (rectTarget.bottom - rectTarget.top) / 2 + scrollTop
      };

      // 转换成相对坐标位置
      coordElement = {
        x: 0,
        y: 0
      };
      coordTarget = {
        x: -1 * (centerElement.x - centerTarget.x),
        y: -1 * (centerElement.y - centerTarget.y)
      };

      /*
       * 因为经过(0, 0), 因此c = 0
       * 于是：
       * y = a * x*x + b*x;
       * y1 = a * x1*x1 + b*x1;
       * y2 = a * x2*x2 + b*x2;
       * 利用第二个坐标：
       * b = (y2+ a*x2*x2) / x2
       */
      // 于是
      b = (coordTarget.y - a * coordTarget.x * coordTarget.x) / coordTarget.x;

      return this;
    };

    // 按照这个曲线运动
    exports.move = function () {
      // 如果曲线运动还没有结束，不再执行新的运动
      if (flagMove == false) return this;

      var startx = 0,
        rate = coordTarget.x > 0 ? 1 : -1;

      var scale = 1;

      var step = function () {
        // 切线 y'=2ax+b
        var tangent = 2 * a * startx + b;
        // 下面是根据确定的移动速度，得到当前切线下x也就是水平方向移动的大小
        // 已知两点之间的距离为
        // Math.sqrt((x2-x1) * (x2-x1) + (y2-y1) * (y2-y1));
        // 因此应当是
        // Math.sqrt(△x*△x + △y*△y) = speed
        // 因为写这段代码的时候，脑子不在线，所以，根号忘记了
        // 就套用了下面的公式（导致很多小伙伴不理解，这里说声抱歉）
        // 不过对于大功能并不影响，就是这个speed参数值有些大，哈哈
        // y*y + x*x = speed
        // (tangent * x)^2 + x*x = speed
        // x = Math.sqr(speed / (tangent * tangent + 1));
        var xx = Math.sqrt(params.speed / (tangent * tangent + 1))
        startx = startx + rate * xx;

        // 设置缩放
        var r = (1 - params.endScale) * xx / Math.abs(coordElement.x - coordTarget.x)
        scale = scale - r

        // 防止过界
        if ((rate == 1 && startx > coordTarget.x) || (rate == -1 && startx < coordTarget.x)) {
          startx = coordTarget.x;
        }
        var x = startx,
          y = a * x * x + b * x;

        // 标记当前位置，这里有测试使用的嫌疑，实际使用可以将这一行注释
        element.setAttribute("data-center", [Math.round(x), Math.round(y)].join());

        element.style['transform'] = "translate(" + [x + "px", y + "px"].join() + ") scale(" + scale + ")";

        if (startx !== coordTarget.x) {
          params.progress(x, y);
          window.requestAnimationFrame(step);
        } else {
          // 运动结束，回调执行
          params.complete({
            x: x,
            y: y
          });
          flagMove = true;
        }
      };
      window.requestAnimationFrame(step);
      flagMove = false;

      return this;
    };

    // 初始化方法
    exports.init = function () {
      console.log('init')
      this.position().mark().move();
    };
  }

  return exports;
};

export default funParabola
