'use strict'

function isElement (element) {
  return element instanceof window.Element
}

class VideoThumbnail {
  constructor ({ container, videoId, urlParams, thumbnail }) {
    if (!isElement(container)) {
      throw new TypeError('container should a valid selector')
    }

    if (typeof videoId !== 'string') {
      throw new TypeError('videoId is required property and should be a String type')
    }

    this.container = container
    this.videoId = videoId
    this.urlParams = !urlParams ? '?autoplay=1' : `?autoplay=1&amp;${urlParams}`
    this.thumbnail = thumbnail
    this.image = document.createElement('img')
    this.imageSrc = `https://img.youtube.com/vi/${videoId}`

    this.setImageSrc = this.setImageSrc.bind(this)
    this.renderPlayer = this.renderPlayer.bind(this)
    this.pressEscCloseVideo = this.pressEscCloseVideo.bind(this)
    this.init = this.init.bind(this)
  }

  setImageSrc () {
    switch (this.thumbnail) {
      case 'xs':
        this.image.setAttribute('src', `${this.imageSrc}/default.jpg`)
        break

      case 'sm':
        this.image.setAttribute('src', `${this.imageSrc}/mqdefault.jpg`)
        break

      case 'md':
        this.image.setAttribute('src', `${this.imageSrc}/hqdefault.jpg`)
        break

      case 'lg':
        this.image.setAttribute('src', `${this.imageSrc}/sddefault.jpg`)
        break

      case 'xl':
        this.image.setAttribute('src', `${this.imageSrc}/maxresdefault.jpg`)
        break

      default:
        this.image.setAttribute('src', `${this.imageSrc}/hqdefault.jpg`)
    }
  }

  renderThumbnail () {
    this.setImageSrc()
    this.image.classList.add('youtube-thumb')
    this.container.appendChild(this.image)
  }

  renderPlayer () {
    const player = `<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${this.videoId}${this.urlParams}"></iframe></div>`
    this.container.innerHTML = player
  }

  pressEscCloseVideo (e) {
    const key = e.keyCode || e.which
    if (key !== 27) return
    this.container.innerHTML = ''
    this.container.appendChild(this.image)
  }

  init () {
    this.renderThumbnail()
    this.image.addEventListener('click', this.renderPlayer)
    document.addEventListener('keyup', this.pressEscCloseVideo)
  }
}

export default VideoThumbnail
