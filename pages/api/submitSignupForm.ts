// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type ResData = {
  status: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  console.log('REQ BODY', req.body);
  // ERROR IF NO OPT-IN
  if (!req.body.optIn) {
    res.status(400).json({
      status: false,
      error: 'User not opted-in',
    });
  }

  const payloadReq = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        form: '648c774f8e53add655fe8ed0',
        submissionData: {
          firstName: 'Andy',
          email: 'andrew@helloenterprises.com',
          optIn: true,
        },
      }),
    }
  );

  const payloadRes = await payloadReq.json();
    console.log('PAYLOAD RES', payloadRes);
  res.status(200).json({ status: true });
}
