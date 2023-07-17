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

  const sanitizedData = req.body.submissionData.filter((datum: {
    field: string;
    value: string;
  }) => datum.value);

  console.log('Sanitized data', sanitizedData);

  try {
    const submission = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: req.body.form,
          submissionData: sanitizedData,
        }),
      }
    );

    if (!submission.ok) {
      throw new Error(`${submission.status + ' | '}There was a problem`);
    }
    
    res.status(200).json({ status: true });
  } catch (e) {
    console.log('SERVERLESS FUNC ERROR', e);
  }
}
