export function* generateColor() {
  const colors = [
    '#8CE7F3',
    '#18CEE7',
    '#15B6CC',
    '#598BDE',
    '#2F6DD5',
    '#2357AE',
  ];
  let i = 0;
  while (true) {
    yield colors[i];
    i = (i + 1) % 6; // Quando i arriva a 6, torna a 0
  }
}
