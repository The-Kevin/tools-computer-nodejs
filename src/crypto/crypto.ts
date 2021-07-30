import crypto from 'crypto';
/**
 *
 * @param algorithm
 * @param secret
 * @param base
 * @param message
 */

const encrypt = (algorithm = 'sha256', secret, base, message) => {
  return crypto.createHmac(algorithm, secret).update(message).digest(base);
};
