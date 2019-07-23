import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import reservations from '../fixtures/reservations'

const mock = new MockAdapter(axios, {delayResponse: 300})
mock
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])
  .onGet('/reservations').reply(() => [200, reservations])
  .onPut('/reservations/0').reply(() => [200, 0])
  .onPut('/reservations/10').reply(() => [200, 10])
  .onPut('/reservations/20').reply(() => [200, 20])
  .onPost('/reservations').reply(() => [200, reservations])

  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
