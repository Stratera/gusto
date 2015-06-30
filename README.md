# Gusto
## Public Application Location 
http://52.24.97.8:8999/

## References
**GitHub:** https://github.com/Stratera/gusto

**JIRA:** https://strateratech.atlassian.net

**NPM:** https://www.npmjs.com/package/gusto-stratera


## Dependencies
This is a node.js application which requires you to have node installed. To install node, please visit ```https://nodejs.org/download/``` and download and run the latest version of node.

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

http://localhost:8999/

http://localhost:8999/stub/

## Unit Testing
**Local unit testing**

- once you've downloaded the repo, change directory to the root gusto directory
- run commands
	-  ```npm install```
	-  ```npm run unit-test```

**TeamCity unit testing**

- TeamCity will be running the testing using the mocha-teamcity-reporter package for output. the command executed by TeamCity is
	-  ```npm install```
	-  ```npm run test```

## Code Coverage
**Local unit testing**

- once you've downloaded the repo, change directory to the root gusto directory
- run commands
	-  ```npm install```
	-  ```npm run coverage```
