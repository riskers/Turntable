import TweenLite from 'TweenLite'
import 'CSSPlugin'

// import TweenLite from 'gsap'

class Turntable {
	constructor(container, config) {
		var turnsCount = config.turnsCount

		this.pointer = config.pointer || ''
		this.container = this.pointer || container
		this.ANGLE = 360 / turnsCount	// 计算角度
		this.INIT_TIME = 8	// 初始旋转时间
		this.ROTATION = 3600	// 初始旋转角度
		this.NOW_ROTATION = 0	// 已经旋转角度
	}

	action(time, rotation, onComplete) {
		var container = this.container
		var self = this

		TweenLite.to(container, time, {
			rotation: rotation,
			onUpdate: function() {
				self.NOW_ROTATION = Math.floor(this.ratio * self.ROTATION)
			},
			onComplete
		})
	}

	reset() {
		this.NOW_ROTATION = 0
		TweenLite.set(this.container, {rotation: 0})
	}

	/**
	 * 根据中奖奖品的 index 得到最后指针停留的位置
	**/
	getRotation(index) {
		var nowRotation = this.NOW_ROTATION
		var angle = this.ANGLE
		var disRotation = this.pointer ? index * angle : -index * angle

		return 360 * (Math.floor(nowRotation / 360) + 5) + disRotation
	}

	done(index, fn) {
		var rotation = this.getRotation(index)

		this.action(4, rotation, fn)
	}

	run() {
		this.reset()

		this.action(this.INIT_TIME, this.ROTATION)
	}

}

export default Turntable
