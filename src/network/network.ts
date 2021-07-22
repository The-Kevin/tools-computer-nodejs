import os from 'os';
import dns from 'dns';
import dgram from 'dgram';
import { BlockList } from 'net';

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
export const resolveDns = (url: string) => {
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
export const sendUpdPacket = (address: string, message: string) => {
  const seed = dgram.createSocket('udp4');

  try {
    seed.send(message, 0, 12, 12000, address, () => {
      seed.close();
    });
  } catch (error) {
    return new Error('packet not sent!');
  }
};

/**
 *
 * @param address #string
 */
export const blockAddress = (address: string) => {
  const blockList = new BlockList();

  blockList.addAddress(address);
  if (blockList.check(address) !== true)
    return new Error('Address not blocked');
};
