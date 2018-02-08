const CustomError = require('../error/custom-error')
const {SC, EC} = require('../constants')

module.exports = {

  getQuote: async ({body}, res, next) => {
    // send quote

    // return the information including token as JSON
    res.set('type', 0)
    res.status(SC.SUCCESS).json({})
  }
}
