export const HTTP = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NOT_FOUND: 404,
};

export const getAllowedHosts = (): string[] => {
  return process.env.ALLOWED_HOSTS ? process.env.ALLOWED_HOSTS.split(',') : [];
};

export const DATABASE_URL = process.env.DATABASE_URL || '';
export const PORT = process.env.PORT || '';
export const NODE_ENV = process.env.NODE_ENV || '';
