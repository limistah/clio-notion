import { exec } from 'child_process';


export default function handler(req, res) {
  // if (
  //   req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`
  // ) {
  //   return res.status(401).end('Unauthorized')
  // }

  exec(
    `uname -a`,
    (errr, stdout, stderr) => {
      console.log({ errr, stderr, stdout })
    }
  )
  res.status(200).end(`Hello Cron! ${req.headers['authorization']}`)
}