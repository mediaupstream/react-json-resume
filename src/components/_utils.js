/**
 * Get the current full year
 */
export const YEAR = new Date().getFullYear()

/**
 * Format job date, eg: `Jan 2019`
 * @param {date} date
 */
export const jobDate = date => {
  if (!date) return 'Current'
  const d = new Date(date)
  const month = d.toLocaleString('default', { month: 'short' })
  const year = d.getFullYear()
  return `${month} ${year}`
}
