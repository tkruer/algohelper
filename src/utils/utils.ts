
export function objectToColor(obj: string): string {
  if (obj === 'Hard') {
    return "bg-red-500"
  }
  if (obj === 'Easy') {
    return "bg-green-500"
  }
  if (obj === 'Medium') {
    return "bg-yellow-500"
  }
  if (obj === 'purple') {
    return "bg-purple-500"
  }
  if (obj === 'gray') {
    return "bg-gray-500"
  }
  if (obj === 'pink') {
    return "bg-pink-500"
  }
  if (obj === 'Incomplete') {
    return "bg-red-500"
  }
  return "bg-blue-500"
}

