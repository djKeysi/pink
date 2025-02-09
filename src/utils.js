export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export function randomSound(arr) {
  return Math.floor(Math.random() * arr.length);
}
export function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`
}

export function randomMessage(obj) {
  const numberOfMessage = random(0, Object.keys(obj).length - 1)
  const messageKeys = Object.keys(obj)
  const currentTypeOfMessage = messageKeys[numberOfMessage]

  return obj[currentTypeOfMessage]
}