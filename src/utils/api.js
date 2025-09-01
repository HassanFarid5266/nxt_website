// API utility functions
export const API_BASE_URL = process.env.VUE_APP_API_URL || 'https://api.nextash.com'

// Generic API request function
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  }

  try {
    const response = await fetch(url, { ...defaultOptions, ...options })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

// GET request
export async function apiGet(endpoint, params = {}) {
  const queryString = new URLSearchParams(params).toString()
  const url = queryString ? `${endpoint}?${queryString}` : endpoint
  
  return apiRequest(url, { method: 'GET' })
}

// POST request
export async function apiPost(endpoint, data = {}) {
  return apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

// PUT request
export async function apiPut(endpoint, data = {}) {
  return apiRequest(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data)
  })
}

// DELETE request
export async function apiDelete(endpoint) {
  return apiRequest(endpoint, { method: 'DELETE' })
}

// File upload
export async function apiUpload(endpoint, file, onProgress = null) {
  const formData = new FormData()
  formData.append('file', file)
  
  return apiRequest(endpoint, {
    method: 'POST',
    body: formData,
    headers: {} // Let browser set content-type for FormData
  })
}

// Error handling
export function handleApiError(error) {
  if (error.response) {
    // Server responded with error status
    return {
      message: error.response.data?.message || 'An error occurred',
      status: error.response.status
    }
  } else if (error.request) {
    // Request made but no response
    return {
      message: 'No response from server. Please check your connection.',
      status: 0
    }
  } else {
    // Something else happened
    return {
      message: error.message || 'An unexpected error occurred',
      status: 0
    }
  }
}
