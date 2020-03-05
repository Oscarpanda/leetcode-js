const dns = require('dns');

dns.resolve4('archive.org', (err, addresses) => {
  if (err) throw err;

  console.log(`地址: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      let b = dns.getServers();
      console.log(b)
      if (err) {
        throw err;
      }
      console.log(`地址 ${a} 逆向解析到域名: ${JSON.stringify(hostnames)}`);
    });
  });
});