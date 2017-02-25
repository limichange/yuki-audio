class YukiAudio {
  constructor (config) {
    // TODO
    console.log('YukiAudio')

    this.audioList = Array.isArray(config.audioList)
      ? config.audioList
      : [config.audioList]

    if (config.auto) {
      this.play()
    }

    this.audioDom = {}
  }

  //
  // Play audio
  //
  play () {
    // TODO
  }

  //
  // Stop audio
  //
  stop () {
    // TODO
    this.audioList = []
  }

  pause () {
    // TODO
  }
}

export default YukiAudio
