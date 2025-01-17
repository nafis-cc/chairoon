export const monthNames = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]

export const formatDate = (date) => {
  const savedDate = new Date(date)
  const day = String(savedDate.getDate()).padStart(2, '0')
  const month = String(monthNames[savedDate.getMonth()])
  const year = String(savedDate.getFullYear())
  // return new Date(date).toLocaleDateString()
  return `${day} ${month} ${year}`
}

export const formatMonth = (date) => {
  const savedDate = new Date(date)
  const month = String(monthNames[savedDate.getMonth()])
  const year = String(savedDate.getFullYear())
  // return new Date(date).toLocaleDateString()
  return `${month} ${year}`
}

export const formatYear = (date) => {
  const savedDate = new Date(date)
  const year = String(savedDate.getFullYear())
  // return new Date(date).toLocaleDateString()
  return `${year}`
}

