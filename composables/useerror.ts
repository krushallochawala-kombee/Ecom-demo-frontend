export const useApi = () => {
    /**
     * Handle API responses with status code mapping.
     */
    const handleApiResponse = async (response : any) => {
      if (!response.ok) {
        const status = response.status;
        let errorMessage = 'An unexpected error occurred.';
  
        // Map status codes to error messages
        switch (status) {
          case 400:
            errorMessage = 'Invalid request. Please check your input.';
            break;
          case 401:
            errorMessage = 'Unauthorized. Please log in.';
            break;
          case 403:
            errorMessage = 'Forbidden. You do not have access.';
            break;
          case 404:
            errorMessage = 'Resource not found.';
            break;
          case 500:
            errorMessage = 'Internal server error. Please try again later.';
            break;
          default:
            errorMessage = `Error: ${status} ${response.statusText}`;
        }
  
        // Attempt to extract additional message from the server's response body
        const errorData = await response.json().catch(() => null);
        if (errorData?.message) {
          errorMessage = errorData.message; // Use server-provided error message
        }
  
        // Throw error with message
        throw new Error(errorMessage);
      }
  
      // Return JSON response for successful requests
      return response.json();
    };
  
    return { handleApiResponse };
  };
  