(async() => {
  const res = await fetch('data.json')
  const data = await res.json()
  const colorsCard = ['worked-card icon work', 'worked-card icon play', 'worked-card icon study', 'worked-card icon exercise', 'worked-card icon social', 'worked-card icon care']
  let index = 0
  const cards = document.querySelector('#card-section')
  const container = document.querySelector('main')

  showDaily = () => {
    cards.innerHTML = ''
    container.style.height = '100%'
    container.style.margin = '25px 0'
    objectCreatorDaily()

    function objectCreatorDaily() {
      if (index < 5) {
        let card = document.createElement('div')
        card.className = `${colorsCard[index]}`
        card.innerHTML += `
        <div class="worked-card__container">
          <div class="worked-card__event">
            <h2>${data[index].title}</h2>
            <p>${data[index].timeframes.daily.current}hrs</p>
          </div>
          <div class="worked-card__details">
            <figure>
              <img src="./src/assets/icon-ellipsis.svg" alt="">
            </figure>
            <p>Last Day - ${data[index].timeframes.daily.previous}hrs</p>
          </div>
        </div>
        `
        cards.appendChild(card)
        index++
        return objectCreatorDaily()
      } else {
        return index = 0
      }
    }
  }
  
  showWeekly = () => {
    cards.innerHTML = ''
    container.style.height = '100%'
    container.style.margin = '25px 0'
    objectCreatorWeekly()

    function objectCreatorWeekly() {
      if (index < 5) {
        let card = document.createElement('div')
        card.className = `${colorsCard[index]}`
        card.innerHTML += `
        <div class="worked-card__container">
          <div class="worked-card__event">
            <h2>${data[index].title}</h2>
            <p>${data[index].timeframes.weekly.current}hrs</p>
          </div>
          <div class="worked-card__details">
            <figure>
              <img src="./src/assets/icon-ellipsis.svg" alt="">
            </figure>
            <p>Last Week - ${data[index].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
        `
        cards.appendChild(card)
        index++
        return objectCreatorWeekly()
      } else {
        return index = 0
      }
    }
  }
  
  showMonthly = () => {
    cards.innerHTML = ''
    container.style.height = '100%'
    container.style.margin = '25px 0'
    objectCreatorMonthly()

    function objectCreatorMonthly() {
      if (index < 5) {
        let card = document.createElement('div')
        card.className = `${colorsCard[index]}`
        card.innerHTML += `
        <div class="worked-card__container">
          <div class="worked-card__event">
            <h2>${data[index].title}</h2>
            <p>${data[index].timeframes.monthly.current}hrs</p>
          </div>
          <div class="worked-card__details">
            <figure>
              <img src="./src/assets/icon-ellipsis.svg" alt="">
            </figure>
            <p>Last Month - ${data[index].timeframes.monthly.previous}hrs</p>
          </div>
        </div>
        `
        cards.appendChild(card)
        index++
        return objectCreatorMonthly()
      } else {
        return index = 0
      }
    }
  }
})()