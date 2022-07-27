console.log(`--- Drum Machine ---`)

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: '/audio/Heater-1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: '/audio/Heater-2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: '/audio/Heater-3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: '/audio/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: '/audio/Heater-6.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: '/audio/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: '/audio/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: '/audio/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: '/audio/Cev_H2.mp3',
  },
]

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Y',
    id: 'Chord-1',
    url: '/audio/Chord_1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'U',
    id: 'Chord-2',
    url: '/audio/Chord_2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'I',
    id: 'Chord-3',
    url: '/audio/Chord_3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'H',
    id: 'Shaker',
    url: '/audio/Give_us_a_light.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'J',
    id: 'Open-HH',
    url: '/audio/Dry_Ohh.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'K',
    id: 'Closed-HH',
    url: '/audio/Bld_H1.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'B',
    id: 'Punchy-Kick',
    url: '/audio/punchy_kick_1.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'N',
    id: 'Side-Stick',
    url: '/audio/side_stick_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'M',
    id: 'Snare',
    url: '/audio/Brk_Snr.mp3',
  },
]

// Wait for page to finish loading then load the drum machine
window.onload = function () {
  addButtons()
}

function addButtons() {
  console.log('Adding buttons ...')

  const bankOneContainer = document.getElementById('bank-one')
  const bankTwoContainer = document.getElementById('bank-two')

  // Set up the left drum pad
  bankOne.forEach((instrument) => {
    const button = document.createElement('button')
    button.innerHTML = instrument.keyTrigger
    button.id = instrument.id
    button.className = 'drum-pad'
    bankOneContainer.appendChild(button)

    // Add event listener to each button
    button.addEventListener('click', () => {
      playSound(instrument.url)
    })

    // Add event listener for keypresses
    document.addEventListener('keydown', (e) => {
      if (e === instrument.keyTrigger) {
        playSound(instrument.url)
      }
    })
  })

  // Set up the right drum pad
  bankTwo.forEach((instrument) => {
    const button = document.createElement('button')
    button.innerHTML = instrument.keyTrigger
    button.id = instrument.id
    button.className = 'drum-pad'
    bankTwoContainer.appendChild(button)

    // Add event listener to each button
    button.addEventListener('click', () => {
      playSound(instrument.url)
    })

    // Add event listener for keypresses
    document.addEventListener('keydown', (e) => {
      if (e === instrument.keyTrigger) {
        playSound(instrument.url)
      }
    })
  })
}

function playSound(url) {
  const audio = new Audio(url)
  audio.play()
}
