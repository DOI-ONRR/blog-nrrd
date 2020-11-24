---
title: "How we do Quality Assurance"
authors:
- Lindsay Goldstein, Jerome Louis, Jennifer Malcolm, Mojo Nichols
excerpt: "In this post, we discuss how we are evaluating, improving, and documenting our Quality Assurance processes."
tags:
- data management
- quality assurance

date: "2020-12-3"
---

Over the last few years, we’ve made a lot of changes to the Natural Resources Revenue Data site. Our goal with all of those changes has been to increase user value and address any problems we’ve seen users experience with our site. Some of our changes have resulted in an even greater need to focus on our quality assurance (QA) process. For example, we’ve gone from updating each of our datasets one time a year to providing monthly and annual data sets. We’ve also added a database behind the site to accommodate more data and improve site performance. We won’t be delivering user value if we aren’t delivering accurate, timely data to our users. So, in addition to the changes we’ve made to our site and the data behind it, we have focused on evaluating, improving, and documenting our QA processes. Our improvements are ongoing, but we have a solid foundation of procedures and technical processes that make us confident we’re minimizing bugs and delivering quality data and content to our users. Those include frequent user testing, documented processes for data and content checks, and automated tests and audits to review changes and identify bugs.

##  User testing
Our site was built using the user-centered design process so our user testing component has been integrated in how we work since the beginning. We design our site based on user research, best practices, and stakeholders requests. As we move through the design process, we continually run user studies to check in with our users to make sure that we are meeting their needs. During this process, we  show them prototypes, have them complete tasks and observe if they encounter any  bugs or problems completing those tasks. Once we launch a new feature, we will run another round of testing in which we have users complete user led tasks to make sure the feature looks and functions as the users require. This testing helps us find hidden bugs and we may find, for example, that many users don’t notice a certain menu item appearing on the page or are confused about terminology. User testing is the core of our quality assurance because we observe the quality actually experienced by the end user.

## Data reviews
Our data update process has changed as we incorporated more data into the website and built a database. While we have streamlined our process somewhat, we still have some challenges. Two different internal teams are responsible for providing us the source data, and the files do not always have consistent formatting. While we’re working toward more automation, we still receive flat files. Our data reviews include manual checks of the flat files for data anomalies and formatting issues.
We then load our data into our database. The process that loads the database provides a limited number of checks to ensure data will load.  In addition, any gross issues with data will cause this process to fail indicating there is an issue. Finally, we can synthesize the spreadsheets used to load the database for comparison with the originals.  In the future, automated tests will be written to verify data from the database matches the original data.
Once we’ve updated the database, we create a pull request for another review.

## Reviewing pull requests
### Manual tests
We have documented procedures for [creating and reviewing pull requests] (https://github.com/ONRR/nrrd/wiki/How-to-prepare-and-review-pull-requests) that we follow once we have a change we want to merge to dev.
We also have a [list] (https://github.com/ONRR/nrrd/wiki/Releasing-changes-to-production#appendix-things-to-check-while-reviewing-changes) of items to check. This includes a list of our datasets and which data driven components of the site to review when updating a specific dataset. This ensures that the site is pulling in the correct data and the map, charts, and tables are rendering properly.

### Automated tests
For our frontend testing, our plan starts off with analytics data about what devices and browsers users are using to access our site.  This helps provide a better picture into what type of unit testing is necessary and ultimately provides a better UI experience for the end user.
Most of our frontend code QA testing is being performed with the utilities testing library. The testing library is an open source suite of packages designed to help test our UI in a more user-centric way. This library contains DOM, Jest-DOM, React, React-Hooks and user event packages which are currently being utilized for unit testing on our Gatsby components. We also use Puppeteer and Jest to help out with end to end, performance, and regression testing.  In addition to these tests, we are automating Lighthouse audits for performance, progressive web app, best practices, accessibility, and SEO testing. All tests are performed with each commit to our repository in our continuous integration process.
Prior to releasing to production, we do one more end to end automated test of the site. This test points out the differences in the site prior to the release of the code.  
Looking into the future we also hope to add  automated BrowserStack testing into our unit tests,.  This will allow us to test against a wider range of mobile and browser environments.

## Final Review
Once the site passes our manual and automated tests in dev, we go live with our changes. We again move through our [list] (https://github.com/ONRR/nrrd/wiki/Releasing-changes-to-production#appendix-things-to-check-while-reviewing-changes) of items to check once we are live to make sure that everything has loaded properly. Then we start all over again with a round of user interviews!
