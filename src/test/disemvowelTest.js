import chai, { expect } from 'chai'
import disemvowel from '../main/disemvowel'


  describe('disemvowel', () => {

    it('does the thing', () => {
    })

    describe('disemvowel', () => {
      it('removes the vowels from a given string', () => {

        expect(disemvowel('yo check this out'))
        .to.equal('ychckthst')
        expect(disemvowel('yaldcakhcvasdnskcbjahvLZKxavkaacauceyficksgukUFugsjnnnxnnxFSHDBACKUgeuagfaukfavheywftcgjvcepmjgacd khufd'))
        .to.equal('yldckhcvsdnskcbjhvLZKxvkccyfcksgkFgsjnnnxnnxFSHDBCKggfkfvhywftcgjvcpmjgcdkhfd')
        expect(disemvowel('yo    check this out'))
        .to.equal('ychckthst')
      })
    })
  })
