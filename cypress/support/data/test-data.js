export const TestData = {
    users: {
      valid: {
        email: 'testuser@example.com',
        password: 'Test123456!'
      },
      invalid: {
        email: 'invalid@example.com',
        password: 'wrongpassword'
      }
    },
    
    urls: {
      login: '/login',
      dashboard: '/dashboard',
      profile: '/profile'
    },
    
    timeouts: {
      short: 5000,
      medium: 10000,
      long: 30000
    }
  };