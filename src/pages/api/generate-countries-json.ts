import countriesWithCode from '../../assets/js/countries-with-codes.json'
import countriesWithEmojis from '../../assets/js/countries-with-emojis.json'

export default async (req, res) => {
  const result = countriesWithCode.map(c => {
    const withEmoji = countriesWithEmojis.findIndex(cE => cE.code === c.code);

    if(withEmoji > -1){
      return {
        ...c,
        emoji: countriesWithEmojis[withEmoji].emoji
      }
    }

    return {
      ...c
    }
  })

  res.send(result)
}