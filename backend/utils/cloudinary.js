const cloudname="dgnmc58mq"
const apiKey="677565132957775"
const apiSecret="UKJUqrvDKUukWmAnvwIppxhsKNg"

import {v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: cloudname,
    api_key: apiKey,
    api_secret: apiSecret
})

export default cloudinary