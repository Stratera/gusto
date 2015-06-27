# Gusto
## Public Application Location
```http://REPLACE.WITH.PUBLIC.URL.WHEN.AVAILABLE/```

## References
**GitHub:** https://github.com/Stratera/gusto

**JIRA:** https://strateratech.atlassian.net

**NPM:** TBD


## Dependencies
This is a node.js application which requires you to have node installed. To install node, please visit ```https://nodejs.org/download/``` and download and run the latest version of node.

Alternatively, it's available for installation through a number of package managers, for example:

*chocolatey:*
```choco install nodejs.install```

*yum:*
```sudo yum install nodejs npm --enablerepo=epel```

Other package manager examples can be found on [joyent's github page](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager "joyent's github page").
 

## Running gusto from source
- once you've downloaded the repo, change directory to the root gusto directory
- run commands
	-  ```npm install```
	-  ```node gusto```

At this point, you can hit gusto routes, for example:

```http://localhost:8999/```

```http://localhost:8999/stub/```