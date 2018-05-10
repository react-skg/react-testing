jest.mock('../request')

const showsapi = require('../showsapi')

// retrive results via rest client
describe('GetShows via rest api', () => {
  it('should load user data', () => {
    return showsapi.shows()
    .then(data => {
      expect(data).toBeDefined()
      expect(data.status).toEqual(200)
    })
  })
})