// frontend/src/lib/apiClient.js
import { API_BASE_URL } from './config.js';

export const apiClient = {
  async get(path) {
    const res = await fetch(`${API_BASE_URL}${path}`);
    if (!res.ok) throw new Error('Request failed');
    return res.json();
  },

  async post(path, body) {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error('Request failed');
    return res.json();
  },
};
