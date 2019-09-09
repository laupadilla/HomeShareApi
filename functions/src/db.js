const firebase = require("firebase-admin");
const config = {
	"type": "service_account",
	"project_id": "homesharebackend-b21d5",
	"private_key_id": "cfa3e6db63d10669269e092fa87f1f0bc02eceff",
	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCl/qceADHOWg0k\nltUO7k9le1ktJGhHh3yojtWvG5XaN6HZg7MygC2+/S/yQgEO3nUofai/qvsH60wb\nDs8SoLbzlHP6vQI4B5zk3haxx0drRSpplPChR+GBxIdv10OXXFy8bCjbe/Wqr65E\nDYmruWU4LHU/iUKZ8NiNfKGkxtiq6lLn2/mB5vwmOTFIxmq436AOPdsoUGlXv2sN\n6Rcb2qXSWL/JOATow0cnwG8aj6l4PM69SIdC32Lq+F1IjY82tp5j85CI4OruqClb\nWIhzClsm++fw113MZ+p0ZPyfRinr+5w6jdVU7/QPQqSe5q6OKKFwd6/KfiOQNzhk\nordQpRVhAgMBAAECggEAAIyvHwQWNiAlwi3YiAp3f2MK/7F6wcad1dEl/YTDZGXl\n8I5hSGbsq9jKzPANcMghUjpXBcYsK0Wy7nWgP3ASNfyLPSCtQEwsZ5SxhZp2wtjv\nbdq+GJMYUM+iuQbY8rg913r6UEZ08OkQrCmRL7UTE+5f/58xvfiqX17K2lTFEq0H\nPXt5JOZ4Gx6g28E59NEMxvmbQxKN19OsX0hbg2KqTTuv2Bq4WDAVRsv6r8FS6Chc\njYmnCXsOnbBsTYDzau3DMiz5IFNX3125qYTDRBFXTlQSddYOng6cjpF+Bv1oKKPq\nTv2qE5s5gQD40YEhUOQvdUFz83vqpF9pbMPyuoRTQQKBgQDee0IKoTuq19J63byS\nh0r9cfgWQlPE/aAiP0Fs7y2xSHOIe5E1FYmZLqyFhptjbRvbpedFVmcwdf2Nh0Py\nenoCpBM6UoLrWJG+1+7BFWZo7jEbfEyYiG5X0BCbqNoaaC43KDb/i7b5REl8FK0q\n/OcViYC1Lw5kkUDliGMHC7N/wQKBgQC/AMt8pqWhzY2jWIoX23DoDBgQRi5MEwOn\nZe0v/X2TWq0d4w21DeZa0lGeTewxH0aa8H7/nmloenbk7pk8t035qS9dfgt3k+hL\nCD1hpwlO0/HM0lK06ENUQ5gSqw9yrk1Amw3vF6l0pG8Zc1B5xWQWrtcsPK9ZLw2S\nCJuUb4D9oQKBgQCxX0FKqjqgvQoQbKF/jJ9rqiYo0N5qSe4V/6pQh+s80M9TO3iM\nAsy9tGlU1vkhboZsOjtEm1sPVrI72GCCe8S0QE0YDVpU+TrRFORDSaVo+KVsDVAf\nt32JQtdK0nZ34SEfVk9qst/AoQGZC/73K8Or9wEG8ioeYXOEy5RvtJN5wQKBgQCv\nz2d+YVZsTOxmwoS52P9gWGF9+Vt8IrRmTWe5mLcR/5EBxZFEanrydk0yTb9up78x\nttTvLT0RMkhmCUl7na5kc9ppUC/17WsQRZFaZYonyOb1BVOjuXbgBSfhZxtdEBuD\nsDVvMnSELScmYgJdU9gBGQZubZ1pleoD1XB/fPNagQKBgQCoWR1LV0Ulh2GZoCTl\nneAm3Z2WM44z5CJMCRuU9GBk2v7K0hoQ3AyX4uyKPTbN7GJ+ypRruAk54tvXuG+e\n+bEoND2b5P5Ojoy8AU7Xame9Uju6Seip1EhkCDnXN35S22n0g6dVkb4FssgmsoWq\nWpGkeIAtIuJtJIuRBbJd6+dkAA==\n-----END PRIVATE KEY-----\n",
	"client_email": "firebase-adminsdk-12vry@homesharebackend-b21d5.iam.gserviceaccount.com",
	"client_id": "102644035044103858349",
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://oauth2.googleapis.com/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-12vry%40homesharebackend-b21d5.iam.gserviceaccount.com"
  }
firebase.initializeApp({
  credential: firebase.credential.cert(config),
  databaseURL: "https://homesharebackend-b21d5.firebaseio.com"
});
const db = firebase.database();

module.exports = {
	db,
} 