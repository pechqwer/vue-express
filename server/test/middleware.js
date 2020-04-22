const mwCookie = require('../middleware/cookie')

describe('middleware cookie', () => {
  it('use middleware cookie with token, should call next()', () => {
    const req = {
      cookies: { token: 'xxx' }
    }
    mwCookie()(req, null, () => {
      console.log('call next()')
    })
  })

  // it('use middleware cookie without token, should not call next()', () => {
  //     const req = {
  //         cookies: {}
  //     }
  //     mwCookie()(req, null, () => {
  //         console.log('not call next()')
  //     })
  // })
})

