import { defineEventHandler, readBody , createError  } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  const apiUrl = process.env.API_BASE_URL || "http://localhost:3001/user/signin";

  try {
    // Forward request to the Node.js API
    const response = await $fetch('http://localhost:3001/user/signin', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response; // Return API response to the frontend
  } catch (error: any) {
    console.error('Error fetching from Node API:', error);

    // Handle and propagate errors
    throw createError({
      statusCode: error?.response?.status || 500,
      statusMessage: error?.response?.statusText || error.message,
      data: error?.response?.data || { message: 'Internal Server Error' },
    });
  }
});