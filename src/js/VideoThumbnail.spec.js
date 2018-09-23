/* eslint-disable no-unused-expressions */
'use strict'

import { expect } from 'chai'
import VideoThumbnail from './index'

describe('VideoThumbnail', () => {
  let videoThumbnail

  beforeEach(() => {
    document.body.innerHTML = '<div id="container-selector"></div>'
    videoThumbnail = new VideoThumbnail({
      container: document.getElementById('container-selector'),
      videoId: 'cDZuzgarnao',
      urlParams: 'controls=0&amp;rel=0&amp;showinfo=0',
      thumbnail: 'xl'
    })
  })

  test('should create an instance of VideoThumbnail', () => {
    expect(videoThumbnail).to.be.an.instanceof(VideoThumbnail)
  })

  test('should have a container property', () => {
    expect(videoThumbnail).to.have.property('container')
  })

  test('should throw an error when not add container selector', () => {
    const result = 'container should a valid selector'

    try {
      videoThumbnail = new VideoThumbnail({
        container: 'container-selector',
        videoId: 'cDZuzgarnao',
        urlParams: 'controls=0&amp;rel=0&amp;showinfo=0',
        thumbnail: 'xl'
      })
    } catch (e) {
      expect(e.message).to.be.equal(result)
    }
  })

  test('should have a videoId property', () => {
    expect(videoThumbnail).to.have.property('videoId')
  })

  test('should throw an error when not add videoId property', () => {
    const result = 'videoId is required property and should be a String type'

    try {
      videoThumbnail = new VideoThumbnail({
        container: document.getElementById('container-selector'),
        videoId: undefined,
        urlParams: 'controls=0&amp;rel=0&amp;showinfo=0',
        thumbnail: 'xl'
      })
    } catch (e) {
      expect(e.message).to.be.equal(result)
    }
  })

  test('should have a urlParams property', () => {
    expect(videoThumbnail).to.have.property('urlParams')
  })

  test('urlParams should return "?autoplay=1" when a value is not informed', () => {
    const before = new VideoThumbnail({
      container: document.getElementById('container-selector'),
      videoId: 'cDZuzgarnao',
      thumbnail: 'xl'
    })
    const after = '?autoplay=1'
    expect(before.urlParams).to.be.equal(after)
  })

  test('urlParams should return "?autoplay=1&amp;controls=0&amp;rel=0&amp;showinfo=0" when a value is informed', () => {
    const before = new VideoThumbnail({
      container: document.getElementById('container-selector'),
      videoId: 'cDZuzgarnao',
      urlParams: 'controls=0&amp;rel=0&amp;showinfo=0',
      thumbnail: 'xl'
    })
    const after = '?autoplay=1&amp;controls=0&amp;rel=0&amp;showinfo=0'
    expect(before.urlParams).to.be.equal(after)
  })

  test('should have a thumbnail property', () => {
    expect(videoThumbnail).to.have.property('thumbnail')
  })

  test('thumbnail should return "xl" when a value is informed', () => {
    const before = new VideoThumbnail({
      container: document.getElementById('container-selector'),
      videoId: 'cDZuzgarnao',
      urlParams: 'controls=0&amp;rel=0&amp;showinfo=0',
      thumbnail: 'xl'
    })
    const after = 'xl'
    expect(before.thumbnail).to.be.equal(after)
  })

  describe('VideoThumbnail.setImageSrc()', () => {
    test('should have .setImageSrc() method', () => {
      expect(videoThumbnail).to.respondTo('setImageSrc')
    })

    test('should return default image size when call VideoThumbnail.setImageSrc()', () => {
      videoThumbnail = new VideoThumbnail({
        container: document.getElementById('container-selector'),
        videoId: 'cDZuzgarnao',
        urlParams: 'controls=0&amp;rel=0&amp;showinfo=0'
      })

      videoThumbnail.setImageSrc()
      const before = videoThumbnail.image.getAttribute('src')
      const after = 'https://img.youtube.com/vi/cDZuzgarnao/hqdefault.jpg'
      expect(before).to.be.equal(after)
    })

    test('should return image xs size when call VideoThumbnail.setImageSrc()', () => {
      videoThumbnail = new VideoThumbnail({
        container: document.getElementById('container-selector'),
        videoId: 'cDZuzgarnao',
        urlParams: 'controls=0&amp;rel=0&amp;showinfo=0',
        thumbnail: 'xs'
      })

      videoThumbnail.setImageSrc()
      const before = videoThumbnail.image.getAttribute('src')
      const after = 'https://img.youtube.com/vi/cDZuzgarnao/default.jpg'
      expect(before).to.be.equal(after)
    })

    test('should return image sm size when call VideoThumbnail.setImageSrc()', () => {
      videoThumbnail = new VideoThumbnail({
        container: document.getElementById('container-selector'),
        videoId: 'cDZuzgarnao',
        urlParams: 'controls=0&amp;rel=0&amp;showinfo=0',
        thumbnail: 'sm'
      })

      videoThumbnail.setImageSrc()
      const before = videoThumbnail.image.getAttribute('src')
      const after = 'https://img.youtube.com/vi/cDZuzgarnao/mqdefault.jpg'
      expect(before).to.be.equal(after)
    })

    test('should return image md size when call VideoThumbnail.setImageSrc()', () => {
      videoThumbnail = new VideoThumbnail({
        container: document.getElementById('container-selector'),
        videoId: 'cDZuzgarnao',
        urlParams: 'controls=0&amp;rel=0&amp;showinfo=0',
        thumbnail: 'md'
      })

      videoThumbnail.setImageSrc()
      const before = videoThumbnail.image.getAttribute('src')
      const after = 'https://img.youtube.com/vi/cDZuzgarnao/hqdefault.jpg'
      expect(before).to.be.equal(after)
    })

    test('should return image lg size when call VideoThumbnail.setImageSrc()', () => {
      videoThumbnail = new VideoThumbnail({
        container: document.getElementById('container-selector'),
        videoId: 'cDZuzgarnao',
        urlParams: 'controls=0&amp;rel=0&amp;showinfo=0',
        thumbnail: 'lg'
      })

      videoThumbnail.setImageSrc()
      const before = videoThumbnail.image.getAttribute('src')
      const after = 'https://img.youtube.com/vi/cDZuzgarnao/sddefault.jpg'
      expect(before).to.be.equal(after)
    })

    test('should return image xl size when call VideoThumbnail.setImageSrc()', () => {
      videoThumbnail = new VideoThumbnail({
        container: document.getElementById('container-selector'),
        videoId: 'cDZuzgarnao',
        urlParams: 'controls=0&amp;rel=0&amp;showinfo=0',
        thumbnail: 'xl'
      })

      videoThumbnail.setImageSrc()
      const before = videoThumbnail.image.getAttribute('src')
      const after = 'https://img.youtube.com/vi/cDZuzgarnao/maxresdefault.jpg'
      expect(before).to.be.equal(after)
    })
  })

  describe('VideoThumbnail.renderThumbnail()', () => {
    test('should have .renderThumbnail() method', () => {
      expect(videoThumbnail).to.respondTo('renderThumbnail')
    })

    test('shoul return <img src="https://img.youtube.com/vi/cDZuzgarnao/maxresdefault.jpg" class="youtube-thumb"> when videoThumbnail.init()', () => {
      videoThumbnail.init()
      const before = videoThumbnail.container.innerHTML
      const after = '<img src="https://img.youtube.com/vi/cDZuzgarnao/maxresdefault.jpg" class="youtube-thumb">'
      expect(before).to.be.equal(after)
    })
  })

  describe('VideoThumbnail.renderPlayer()', () => {
    test('should have .renderPlayer() method', () => {
      expect(videoThumbnail).to.respondTo('renderPlayer')
    })

    test('shoul return iframe HTML when videoThumbnail.renderPlayer()', () => {
      videoThumbnail.renderPlayer()
      const before = videoThumbnail.container.innerHTML
      const after = `<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/cDZuzgarnao?autoplay=1&amp;controls=0&amp;rel=0&amp;showinfo=0"></iframe></div>`
      expect(before).to.be.equal(after)
    })
  })

  describe('VideoThumbnail.pressEscCloseVideo()', () => {
    test('should have .pressEscCloseVideo() method', () => {
      expect(videoThumbnail).to.respondTo('pressEscCloseVideo')
    })

    test('should press other key and not close video', () => {
      const event = {
        keyCode: 28
      }

      videoThumbnail.init()
      videoThumbnail.renderPlayer()
      const before = videoThumbnail.pressEscCloseVideo(event)
      expect(before).to.be.undefined
    })

    test('should key press ESC and close video (event.keyCode)', () => {
      const event = {
        keyCode: 27
      }

      videoThumbnail.init()
      videoThumbnail.renderPlayer()
      videoThumbnail.pressEscCloseVideo(event)
      const before = videoThumbnail.container.innerHTML
      const after = '<img src="https://img.youtube.com/vi/cDZuzgarnao/maxresdefault.jpg" class="youtube-thumb">'
      expect(before).to.be.equal(after)
    })

    test('should key press ESC and close video (event.which)', () => {
      const event = {
        which: 27
      }

      videoThumbnail.init()
      videoThumbnail.renderPlayer()
      videoThumbnail.pressEscCloseVideo(event)
      const before = videoThumbnail.container.innerHTML
      const after = '<img src="https://img.youtube.com/vi/cDZuzgarnao/maxresdefault.jpg" class="youtube-thumb">'
      expect(before).to.be.equal(after)
    })
  })

  describe('VideoThumbnail.init()', () => {
    test('should have .init() method', () => {
      expect(videoThumbnail).to.respondTo('init')
    })
  })
})
