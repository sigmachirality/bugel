const express = require('express')
const app = express()
const fetch = require('node-fetch')
const ical = require('ical-generator')

const PORT = 3000
const APPLICATION_ID = ``

const REGIONS = new Proxy({
        ru: `ru`,
        eu: `eu`,
        na: `com`,
        asia: `asia`
    }, {
        get: (target, name) => name in target ? target[name] : `com`
})