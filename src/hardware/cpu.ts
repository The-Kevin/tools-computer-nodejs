import os from 'os';

export const infoComputer = () => {
  return {
    OS: os.type(),
    arch: os.arch(),
    memory: {
      free: os.freemem(),
      total: os.totalmem(),
    },
    platform: os.platform(),
    uptime: os.uptime(),
  };
};

export const getCpus = () => {
  return os.cpus();
};
