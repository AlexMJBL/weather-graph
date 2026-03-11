export function formatDateLong(time: string) {
  const d = new Date(time)

  return (
    d.toLocaleDateString("en-US", { month: "long" }) +
    " " +
    d.getDate() +
    " " +
    d.getFullYear()
  )
}