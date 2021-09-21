let obj
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    obj = data
    const work = obj[0]
    const play = obj[1]
    const study = obj[2]
    const exercise = obj[3]
    const social = obj[4]
    const care = obj[5]
    console.log(obj)
    const cards = document.querySelector('#card-section')

    showDaily = () => {
      const workCard = document.createElement('div')
      workCard.className = 'worked-card icon work'
      workCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${work.title}</h2>
          <p>${work.timeframes.daily.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${work.timeframes.daily.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(workCard)

      const playCard = document.createElement('div')
      playCard.className = 'worked-card icon play'
      playCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${play.title}</h2>
          <p>${play.timeframes.daily.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${play.timeframes.daily.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(playCard)

      const studyCard = document.createElement('div')
      studyCard.className = 'worked-card icon study'
      studyCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${study.title}</h2>
          <p>${study.timeframes.daily.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${study.timeframes.daily.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(studyCard)

      const exerciseCard = document.createElement('div')
      exerciseCard.className = 'worked-card icon exercise'
      exerciseCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${exercise.title}</h2>
          <p>${exercise.timeframes.daily.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${exercise.timeframes.daily.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(exerciseCard)

      const socialCard = document.createElement('div')
      socialCard.className = 'worked-card icon social'
      socialCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${social.title}</h2>
          <p>${social.timeframes.daily.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${social.timeframes.daily.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(socialCard)

      const careCard = document.createElement('div')
      careCard.className = 'worked-card icon care'
      careCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${care.title}</h2>
          <p>${care.timeframes.daily.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${care.timeframes.daily.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(careCard)
    }
    
    showWeekly = () => {
      const workCard = document.createElement('div')
      workCard.className = 'worked-card icon work'
      workCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${work.title}</h2>
          <p>${work.timeframes.weekly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${work.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(workCard)

      const playCard = document.createElement('div')
      playCard.className = 'worked-card icon play'
      playCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${play.title}</h2>
          <p>${play.timeframes.weekly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${play.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(playCard)

      const studyCard = document.createElement('div')
      studyCard.className = 'worked-card icon study'
      studyCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${study.title}</h2>
          <p>${study.timeframes.weekly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${study.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(studyCard)

      const exerciseCard = document.createElement('div')
      exerciseCard.className = 'worked-card icon exercise'
      exerciseCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${exercise.title}</h2>
          <p>${exercise.timeframes.weekly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${exercise.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(exerciseCard)

      const socialCard = document.createElement('div')
      socialCard.className = 'worked-card icon social'
      socialCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${social.title}</h2>
          <p>${social.timeframes.weekly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${social.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(socialCard)

      const careCard = document.createElement('div')
      careCard.className = 'worked-card icon care'
      careCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${care.title}</h2>
          <p>${care.timeframes.weekly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${care.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(careCard)
    }
    
    showMonthly = () => {
      const workCard = document.createElement('div')
      workCard.className = 'worked-card icon work'
      workCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${work.title}</h2>
          <p>${work.timeframes.monthly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${work.timeframes.monthly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(workCard)

      const playCard = document.createElement('div')
      playCard.className = 'worked-card icon play'
      playCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${play.title}</h2>
          <p>${play.timeframes.monthly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${play.timeframes.monthly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(playCard)

      const studyCard = document.createElement('div')
      studyCard.className = 'worked-card icon study'
      studyCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${study.title}</h2>
          <p>${study.timeframes.monthly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${study.timeframes.monthly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(studyCard)

      const exerciseCard = document.createElement('div')
      exerciseCard.className = 'worked-card icon exercise'
      exerciseCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${exercise.title}</h2>
          <p>${exercise.timeframes.monthly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${exercise.timeframes.monthly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(exerciseCard)

      const socialCard = document.createElement('div')
      socialCard.className = 'worked-card icon social'
      socialCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${social.title}</h2>
          <p>${social.timeframes.monthly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${social.timeframes.monthly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(socialCard)

      const careCard = document.createElement('div')
      careCard.className = 'worked-card icon care'
      careCard.innerHTML += `
      <div class="worked-card__container">
        <div class="worked-card__event">
          <h2>${care.title}</h2>
          <p>${care.timeframes.monthly.current}hrs</p>
        </div>
        <div class="worked-card__details">
          <figure>
            <img src="./src/assets/icon-ellipsis.svg" alt="">
          </figure>
          <p>Last Week - ${care.timeframes.monthly.previous}hrs</p>
        </div>
      </div>
      `
      cards.appendChild(careCard)
    }

  })
  // .then(()=> console.log(obj))
// async function cargarDatos() {
//   fetch('data.json')
//     .then(response => response.json()) 
//     .then(activity => {
//       return data = {...activity}
//     })
// }
// cargarDatos()
// console.log(data[0])

// const work = obj.find( index => index.title === 'Work')
// console.log(work)