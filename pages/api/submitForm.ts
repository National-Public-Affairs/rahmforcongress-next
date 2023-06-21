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

  const payloadReq = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    }
  );

  const payloadRes = await payloadReq.json();
    console.log('PAYLOAD RES', payloadRes);
  res.status(200).json({ status: true });
}
