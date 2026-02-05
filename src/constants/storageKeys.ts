export const STORAGE_KEYS = ['is_onboarding_completed', 'saved_tasks'] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
