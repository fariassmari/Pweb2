export function conversor(tipo, valor) {
  if (tipo === 1) {
    const resultado = (valor * 9/5) + 32;
    return `${valor}°C = ${resultado.toFixed(2)}°F`;
  } else {
    const resultado = (valor - 32) * 5/9;
    return `${valor}°F = ${resultado.toFixed(2)}°C`;
  }
}