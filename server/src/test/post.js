describe('/post', () => {
  it('it should POST one-record have cookies', (done) => {
    const token = "token=test-token-test"
    const data = {
      pid: '0000',
      code: 99
    }
    chai.request(app)
      .post('/api/user')
      .set('Cookie', token)
      .send(data)
      .end((err, res) => {
        expect(res.status).to.eql(200)
        done()
      })
  })

  it('it should POST one-record not have cookies', (done) => {
    const data = {
      pid: '0000',
      code: 99
    }
    chai.request(app)
      .post('/api/user')
      .send(data)
      .end((err, res) => {
        expect(res.status).to.eql(401)
        done()
      })
  })

  it('it should POST one-record data is not validate', (done) => {
    const token = "token=test-token-test"
    const data = {
      pid: 0
    }
    chai.request(app)
      .post('/api/user')
      .set('Cookie', token)
      .send(data)
      .end((err, res) => {
        expect(res.status).to.eql(400)
        done()
      })
  })
})