const express = require('express')

module.exports = function(server){

    server.get('/', function(req, res) {
        res.send('hello world');
      });
    //url base
    const router = express.Router()
    server.use('/api', router)

    //rotas ciclo de pagamento
    const BillinCycle = require('../api/billingCycle/billingCycleService')
    BillinCycle.register(router, '/billingCycles')
}