import { writable } from 'svelte/store';

/**
 * Set to true to enable the login modal
 */
export const login = writable(false);