const disemvowel = str => {
  return str.replace(/[aeiou]/ig,'').replace(/\s+/ig,'')
}

console.log(disemvowel('yo check this out'))
console.log(disemvowel('yaldcakhcvasdnskcbjahvLZKxavkaacauceyficksgukUFugsjnnnxnnxFSHDBACKUgeuagfaukfavheywftcgjvcepmjgacd khufd'))
console.log(disemvowel('yo    check this out'))
