export interface Web3FormsResponse {
  success: boolean
  message?: string
}

export async function submitToWeb3Forms(formData: FormData): Promise<Web3FormsResponse> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

  if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
    return {
      success: false,
      message: 'Web3Forms Access Key is not configured yet. Please configure VITE_WEB3FORMS_ACCESS_KEY in your environment, or email admin@sm-eng.co directly.',
    }
  }

  formData.append('access_key', accessKey)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })

    const data = await response.json()
    return data
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send message due to network error. Please try again or email admin@sm-eng.co.',
    }
  }
}
