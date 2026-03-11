export function formatDay(dateString: string) {
  const date = new Date(dateString)

  const formatted = new Intl.DateTimeFormat("en-CA", {
    weekday: "short",
    day: "numeric"
  }).format(date)

  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}