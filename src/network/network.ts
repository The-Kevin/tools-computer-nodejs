import os from 'os';
import dns from 'dns';
import dgram from 'dgram';

export const getHostName = () => {
  return os.hostname();
};

export const getInterfaces = () => {
  return os.networkInterfaces();
};

/**
 *
 * @param url #string
 *
 * */
export const resolveDns = (url) => {
  dns.lookup(url, (err, address, family) => {
    return {
      address,
      family,
    };
  });
};

export const getDns = () => {
  return dns.getServers();
};

/**
 *
 * @param address #string
 * @param message #string
 */
export const sendUpdPacket = (address, message) => {
  const seed = dgram.createSocket('udp4');

  try {
    seed.send(message, 0, 12, 12000, address, () => {
      seed.close();
    });
  } catch (error) {
    return new Error('packet not sent!');
  }
};
