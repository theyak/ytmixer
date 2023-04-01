import { writable } from 'svelte/store';

/**
 * Set to true to enable the login modal
 */
export const login = writable(false);

/**
 * Progress bar for various things. Negative value to hide.
 */
export const progress = writable(-1);