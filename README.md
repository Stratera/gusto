# Gusto
## Public Application Location 
http://gusto.strateratech.com:8999/

## References
**GitHub:** https://github.com/Stratera/gusto

**JIRA:** https://strateratech.atlassian.net

**NPM:** https://www.npmjs.com/package/gusto-stratera

1)
Assigned one leader, gave that person authority and responsibility, and held that person accountable for the quality of the prototype submitted.

[See email](DevelopmentPoolEvidence/team/TechnicalLeadEmail.JPG)

2)
Assembled a multidisciplinary and collaborative team that includes at a minimum of two of the labor categories limited to the Development Pool labor categories.    

Our Team consists of a DevOps Engineer and a Back-end Developer.  Both team members are experienced in the agile scrum development methodology and in playing the role of scrum master.  The DevOps Engineer plays the role of Scrum Master and also performs some of the development tasks.  The Web Developer performs the development quality assurance tasks such as peer reviews.

3)
used at least five modern and open-source technologies, regardless of architectural layer (frontend, backend, etc.)

centos 6.5 
node 0.12.0
express 4.12.3
express-http-proxy 0.6.0
istanbul 0.3.16
mocha 2.1.0
mocha-teamcity-reporter 0.0.1
should 7.0.1
supertest 1.0.1
docker (get version)
python (get version)
.... think about any others


4)
Deployed the prototype on an Infrastructure as a Service (IaaS) or Platform as a Service (PaaS) provider, and indicated which provider they used

Gusto application is being deployed to AWS using Elastic Beanstalk and docker orchestrated by our TeamCity build server.
<<EXPAND ON THIS>>

Provide Amazon public dns address as well as Public ip (edited)
http://gusto.strateratech.com:8999/
http://52.24.131.202:8999/


5) Wrote unit tests for their code.

Unit tests were written in the mocha framework. Istanbul was used for code coverage metric collection and the mocha-teamcity-reporter was used to feed the test results to our teamcity server. We have accomplished 100% code coverage.
<Get Link to screenshots>
<Expand on this>
<check this stat before submission>

6.) Set up or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider

TeamCity is monitoring all feature branches of the Stratera/Gusto GitHub repo on an ongoing basis in our PreRelease job in TeamCity. Any commits to any branch will trigger a build and unit test execution. Code coverage metrics are collected and all of the test result information is made available in TeamCity. The build result is also provided back to GitHub so that any pull requests are identified as safe or unsafe to merge. 
[add link to teamcity images]
[get evidence of delivery to prod]

7.) 
Set up or used configuration management

GitHub is used for our source code repository and our code and configuration content is version controlled, peer reviewed, and tracked on a change-by-change basis. We strictly follow the GitHub Flow branch management strategy.

8) 
Set up or used continuous monitoring

NEED TO REVISIT ONCE DOCKER HAS BEEN IMPLEMENTED

9.) 
Deploy their software in a container (i.e., utilized operating-system-level virtualization)
DOCKER -- get final info and put it here

10.) 
Make use of a API, by either consuming or providing one RESTfully.

The Gusto application was written in Node to leverage some of the elegant capabilities of the javascript language. The Express framework was used to extend routes to the node engine, allowing us to both serve RESTful routes and consume RESTful routes in a very consise manor. All of the openfda routes are available through the gusto "/v1/proxy" route.

[Add another example route which proxies and filters content if time permits] 

11.) 
Used an iterative approach, where feedback informed subsequent work or versions of the prototype

The Gusto Development and DevOps teams are both following an agile scrum methodology which has allowed for a fast pace iterative software development environment. Sprint planning, daily stand-ups, retrospectives, and the use of sprints allowed us to quickly identify blocker and prioritize the team's responsibilities. All of our work was managed in Atlassian JIRA.

ADD LINK TO THE 2 AGILE BOARD SCREENSHOTS
GET SCREENSHOT OF THE RETROSPECTIVE SUMMARY


12.) 
Provided sufficient documentation to install and run their prototype on another machine

LINK TO installation readme - consider having a consise instruction at the top of this readme.

13)
Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge

No technology used required a license or payment for use. Most of the prototype's development and technology stack is open source. The products used that are openly licensed and free of charge include:
teamcity