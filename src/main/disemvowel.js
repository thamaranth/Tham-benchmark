export default (str) => {
  return str.replace(/[aeiou]/ig,'').replace(/\s+/ig,'')
}
