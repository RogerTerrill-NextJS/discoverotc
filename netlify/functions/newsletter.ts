import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: 'Missing request body',
    };
  }

  const { email } = JSON.parse(event.body);

  if (!email) {
    return {
      statusCode: 400,
      body: 'Email is required',
    };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        email,
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true,
        attributes: {
          SOURCE: 'website',
          BRAND: 'Outside The Cockpit',
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Brevo error:', error);
      throw new Error('Brevo request failed');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }
};
