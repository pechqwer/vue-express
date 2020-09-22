describe('/get', () => {
  it('it should GET find-all', (done) => {
    chai.request(app)
      .get('/api/user')
      .end((err, res) => {
        expect(res.status).to.eql(400)
        expect(res.body).to.eql({ info: 'query-string is least one' })
        done()
      })
  })

  it('it should GET find-all', (done) => {
    chai.request(app)
      .get('/api/user')
      .end((err, res) => {
        expect(res.status).to.eql(400)
        expect(res.body).to.eql({ info: 'query-string is least one' })
        done()
      })
  })
})

describe('/get/id', () => {
  it('it should GET find-by-id in database', (done) => {
    chai.request(app)
      .get('/api/user/' + 1234)
      .end((err, res) => {
        expect(res.status).to.eql(200)
        expect(res.body.pid).eql('1234')
        done()
      })
  })

  it('it should GET find-by-id is not data in database', (done) => {
    chai.request(app)
      .get('/api/user/' + 9999)
      .end((err, res) => {
        expect(res.status).to.eql(404)
        expect(res.body).eql({ info: 'ไม่พบข้อมูลใน user' })
        done()
      })

  })

  it('it should GET path is not valible', (done) => {
    chai.request(app)
      .get('/xxx')
      .end((err, res) => {
        expect(res.status).to.eql(401)
        expect(res.body).eql({ info: 'กรุณากรอก login ก่อนใช้งานระบบ' })
        done()
      })
  })

})