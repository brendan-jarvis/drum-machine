console.log(`--- Drum Machine ---`)

const bankOne = [
  {
    keyCode: 'q',
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: '/audio/Heater-1.mp3',
  },
  {
    keyCode: 'w',
    keyTrigger: 'W',
    id: 'Heater-2',
    url: '/audio/Heater-2.mp3',
  },
  {
    keyCode: 'e',
    keyTrigger: 'E',
    id: 'Heater-3',
    url: '/audio/Heater-3.mp3',
  },
  {
    keyCode: 'a',
    keyTrigger: 'A',
    id: 'Heater-4',
    url: '/audio/Heater-4_1.mp3',
  },
  {
    keyCode: 's',
    keyTrigger: 'S',
    id: 'Clap',
    url: '/audio/Heater-6.mp3',
  },
  {
    keyCode: 'd',
    keyTrigger: 'D',
    id: 'Open-HH',
    url: '/audio/Dsc_Oh.mp3',
  },
  {
    keyCode: 'z',
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: '/audio/Kick_n_Hat.mp3',
  },
  {
    keyCode: 'x',
    keyTrigger: 'X',
    id: 'Kick',
    url: '/audio/RP4_KICK_1.mp3',
  },
  {
    keyCode: 'c',
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: '/audio/Cev_H2.mp3',
  },
]

const bankTwo = [
  {
    keyCode: 'y',
    keyTrigger: 'Y',
    id: 'Chord-1',
    url: '/audio/Chord_1.mp3',
  },
  {
    keyCode: 'u',
    keyTrigger: 'U',
    id: 'Chord-2',
    url: '/audio/Chord_2.mp3',
  },
  {
    keyCode: 'i',
    keyTrigger: 'I',
    id: 'Chord-3',
    url: '/audio/Chord_3.mp3',
  },
  {
    keyCode: 'h',
    keyTrigger: 'H',
    id: 'Shaker',
    url: '/audio/Give_us_a_light.mp3',
  },
  {
    keyCode: 'j',
    keyTrigger: 'J',
    id: 'Open-HH',
    url: '/audio/Dry_Ohh.mp3',
  },
  {
    keyCode: 'k',
    keyTrigger: 'K',
    id: 'Closed-HH',
    url: '/audio/Bld_H1.mp3',
  },
  {
    keyCode: 'b',
    keyTrigger: 'B',
    id: 'Punchy-Kick',
    url: '/audio/punchy_kick_1.mp3',
  },
  {
    keyCode: 'n',
    keyTrigger: 'N',
    id: 'Side-Stick',
    url: '/audio/side_stick_1.mp3',
  },
  {
    keyCode: 'm',
    keyTrigger: 'M',
    id: 'Snare',
    url: '/audio/Brk_Snr.mp3',
  },
]

// Wait for page to finish loading then load the drum machine
window.onload = function () {
  addButtons()
  addLastPressedKey()
}

function addButtons() {
  const bankOneContainer = document.getElementById('bank-one')
  const bankTwoContainer = document.getElementById('bank-two')

  bankOneContainer.style = 'max-width: 300px;'
  bankTwoContainer.style = 'max-width: 300px;'

  // Set up the left drum pad
  bankOne.forEach((instrument) => {
    const button = document.createElement('button')
    button.innerHTML = instrument.keyTrigger
    button.id = instrument.id
    button.className = 'btn btn-dark'
    button.style = 'width: 80px; height: 80px;'
    bankOneContainer.appendChild(button)

    // Create audio element and add it to the button
    const audio = document.createElement('audio')
    audio.id = `${instrument.keyCode}-sound`
    audio.src = instrument.url
    audio.preload = 'auto'
    button.appendChild(audio)

    createEventListeners(button, instrument.keyCode, instrument.id)
  })

  // Set up the right drum pad
  bankTwo.forEach((instrument) => {
    const button = document.createElement('button')
    button.innerHTML = instrument.keyTrigger
    button.id = instrument.id
    button.className = 'btn btn-dark'
    button.style = 'width: 80px; height: 80px;'
    bankTwoContainer.appendChild(button)

    // Create audio element and add it to the button
    const audio = document.createElement('audio')
    audio.id = `${instrument.keyCode}-sound`
    audio.src = instrument.url
    audio.preload = 'auto'
    button.appendChild(audio)

    createEventListeners(button, instrument.keyCode, instrument.id)
  })
}

function createEventListeners(button, key, id) {
  // Add event listener to each button
  button.addEventListener('click', () => {
    playSound(key)
    document.getElementById('last-pressed-key').innerHTML = id
  })

  // Add event listener for touch
  button.addEventListener('touchstart', () => {
    playSound(key)
    document.getElementById('last-pressed-key').innerHTML = id
  })

  // Add event listener for touchend
  button.addEventListener('touchend', () => {
    pauseSound(key)
  })

  // Add event listener for keypresses
  document.addEventListener('keydown', (e) => {
    if (e.key === key) {
      playSound(key)
      document.getElementById('last-pressed-key').innerHTML = id
    }
  })

  // Add event listener for keyup
  document.addEventListener('keyup', (e) => {
    if (e.key === key) {
      pauseSound(key)
    }
  })
}

function playSound(key) {
  document.getElementById(`${key}-sound`).play()
}

function pauseSound(key) {
  document.getElementById(`${key}-sound`).pause()
}
