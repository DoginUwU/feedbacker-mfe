const validateEmptyAndLength4 = (value) => {
  if (!value) return '* This field is required'
  if (value.length < 4) return '* This field needs at least 4 characters'

  return true
}

const validateEmptyAndEmail = (value) => {
  if (!value) return '* This field is required'
  if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) return '* Invalid email address'

  return true
}

export { validateEmptyAndLength4, validateEmptyAndEmail }
