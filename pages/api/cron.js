import { exec } from 'child_process';


export default function handler(req, res) {
  // if (
  //   req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`
  // ) {
  //   return res.status(401).end('Unauthorized')
  // }

  exec(
    `cat /etc/os-releases && apt-get install curl && curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_KfewZLVrhXIUn4KVQv622WdmEE1l/aNbPQDxuWd`,
    (errr, stdout, stderr) => {
      console.log({ errr, stderr, stdout })
    }
  )
  res.status(200).end(`Hello Cron! ${req.headers['authorization']}`)
}