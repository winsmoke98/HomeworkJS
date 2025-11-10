
const hoursblock = document.querySelector('.timer__hours')
const minutesblock = document.querySelector('.timer__minutes')
const secondsblock = document.querySelector('.timer__seconds')
const dayblock = document.querySelector('.timer__days')

let interval

const numWord = (value, words) => {
    value = Math.abs(value) % 100

    const lastNum = value % 10

    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 & lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]
    
    return words[2]
}

const updateTimer = () => {
    const date = new Date()
    const dateDeadline = new Date('12 november 2025').getTime()
    const timeRemaining = (dateDeadline - date)/1000

    const day = Math.floor((timeRemaining/60/60/24))
    const hours = Math.floor((timeRemaining/60/60) % 24)
    const minute = Math.floor((timeRemaining/60) % 60)
    const seconds = Math.floor(timeRemaining % 60)

    const fDay = day < 10 ? '0' + day: day
    const fHours = hours < 10 ? '0' + hours: hours
    const fMinute = minute < 10 ? '0' + minute: minute
    const fSecond = seconds < 10 ? '0' + seconds: seconds

    dayblock.textContent = fDay
    hoursblock.textContent = fHours
    minutesblock.textContent = fMinute
    secondsblock.textContent = fSecond

    dayblock.nextElementSibling.textContent = numWord(day, ['день', 'дня', 'дней'])
    secondsblock.nextElementSibling.textContent = numWord(seconds, ['секунда', 'секунды', 'секунд'])
    minutesblock.nextElementSibling.textContent = numWord(minute, ['минута', 'минуты', 'минут'])
    hoursblock.nextElementSibling.textContent = numWord(hours, ['час', 'часа', 'часов'])


    if (timeRemaining <=0)  {
        clearInterval(interval)
        dayblock.textContent = '00'
        dayblock.style.color = 'red';
        hoursblock.textContent = '00'
        hoursblock.style.color = 'red';
        minutesblock.textContent = '00'
        minutesblock.style.color = 'red';
        secondsblock.textContent = '00'
        secondsblock.style.color = 'red';

    }
}

interval = setInterval(updateTimer, 500)
