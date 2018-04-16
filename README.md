# SmartHoldem Faucet

## Params

file config.json

- node - The IP address of the SmartHoldem node the backend will use to query SmartHoldem's blockchain
- port - The port the web server will listen on
- payPerClick - How much SmartHoldem to credit users per use of the faucet
- cooldown - How long users have to wait before using the faucet again (in seconds)
- paySchedule - When the faucet automatically pays out, in cron format https://github.com/node-schedule/node-schedule
- payMinimum - The minimum balance users must accrue before they are paid out
- txFee - The transaction fee to be subtracted from users' payouts. Set to 0 if you want to pay their transaction fees.
- log - Filename of log file
- database:username - MySQL username
- database:password - MySQL password
- recaptcha:siteKey - ReCaptcha site key
- recaptcha:secretKey - ReCaptcha secret key

## Installation

> npm install
> node server --pass "Your Faucet Address Passphrase"