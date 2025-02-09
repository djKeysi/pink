export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export function randomSound(arr) {
  return Math.floor(Math.random() * arr.length);
}
export function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`
}