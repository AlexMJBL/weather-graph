export function formatTime(time: string) {
  let hour = Number(time.slice(11, 13))
  const suffix = hour >= 12 ? "pm" : "am"

  hour = hour % 12 || 12

  return `${hour}${suffix}`
}