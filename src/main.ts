export const left = document.querySelector('.left') as HTMLDivElement
export const right = document.querySelector('.right') as HTMLDivElement
export const container = document.querySelector('.container') as HTMLElement

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))