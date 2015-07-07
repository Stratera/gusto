## Dependencies
This is a node.js application which requires you to have node installed. To install node, please visit [nodejs.org](https://nodejs.org/download/) and download and run the latest version of node.

Alternatively, it's available for installation through a number of package managers, for example:

*chocolatey:*
```bash
choco install nodejs.install
```

*yum:*
```bash
sudo yum install nodejs npm --enablerepo=epel
```

Other package manager examples can be found on [joyent's github page](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager "joyent's github page").
 

## Running gusto from source
- once you've downloaded the repo, change directory to the root gusto directory
- run commands
  -  ```npm install```
  -  ```npm run start```

At this point, you can hit gusto routes, for example:

[http://localhost:8999/](http://localhost:8999/)

[http://localhost:8999/version/](http://localhost:8999/version/)

[http://localhost:8999/v1/proxy/drug/event.json?search=patient.drug.openfda.pharm_class_epc:%22nonsteroidal+anti-inflammatory+drug%22&count=patient.reaction.reactionmeddrapt.exact](http://localhost:8999/v1/proxy/drug/event.json?search=patient.drug.openfda.pharm_class_epc:%22nonsteroidal+anti-inflammatory+drug%22&count=patient.reaction.reactionmeddrapt.exact)
