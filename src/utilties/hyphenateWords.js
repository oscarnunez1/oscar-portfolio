function hyphenateWords(string) {
  string = string.replace(/\s+/g, '-').toLowerCase()
  return string
}

export default hyphenateWords