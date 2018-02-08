const debug = require('debug')('main-server:server')
const os = require('os')

/**
 * print server IP
 */
function printIP () {
  const ifaces = os.networkInterfaces()

  Object.keys(ifaces).forEach(function (ifname) {
    let alias = 0

    ifaces[ifname].forEach(function (iface) {
      if (iface.family !== 'IPv4' || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        debug(ifname + ':' + alias, iface.address)
      } else {
        // this interface has only one ipv4 adress
        debug(ifname, iface.address)
      }
      ++alias
    })
  })
}

module.exports = {
  printIP
}
