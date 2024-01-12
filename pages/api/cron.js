import { exec } from 'child_process';


export default function handler(req, res) {
  // if (
  //   req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`
  // ) {
  //   return res.status(401).end('Unauthorized')
  // }
  console.log(req.headers)
  exec(
    `curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_KfewZLVrhXIUn4KVQv622WdmEE1l/aNbPQDxuWd`
  )
  res.status(200).end('Hello Cron!')
}