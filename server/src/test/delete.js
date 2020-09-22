describe('/delete', () => {
  it('it should DELETE del-many', (done) => {
    const token = "token=test-token-test"
    const data = {
      pid: '0000',
      code: 99
    }
    chai.request(app)
      .delete('/api/user')
      .set('Cookie', token)
      .send(data)
      .end((err, res) => {
        expect(res.status).to.eql(200)
        done()
      })
  })
})