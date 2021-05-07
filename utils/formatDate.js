import { format, isAfter, isToday } from 'date-fns'

export const formatChatDate = (date) => {
  const parsedDate = new Date(date)

  if (isToday(parsedDate)) {
    return format(parsedDate, 'HH:mm')
  } else {
    const todayOfWeek = new Date()
    const sevenDaysBefore = new Date(todayOfWeek).setDate(todayOfWeek.getDate() - 6)

    if (isAfter(todayOfWeek, sevenDaysBefore)) {
      return format(parsedDate, 'eee')
    } else {
      return format(parsedDate, 'dd/MM/yyyy')
    }
  }
}

export const formatHour = (date) => {
  return format(new Date(date), 'HH:mm')
}
