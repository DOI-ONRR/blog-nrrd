---
title: "The U.S. Web Design System (USWDS) and onrr.gov"
authors:
- Erin Elzi
- Christine Thomas
excerpt: "The U.S. Web Design System (USWDS) includes five design principles that facilitate human-centered design. In this post, we look at the work our team does to make sure we're meeting each principle."
tags:
- IDEA
- development
- design
- USWDS
date: "2023-02-25"
---

The [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) is a design system that makes it easier for federal government website to create an accessible and mobile-friendly user experience. USWDS was created in 2015 by [18F](https://18f.gsa.gov/) and the [U.S. Digital Service](https://www.usds.gov/). 18F is the same group that initiated the work that our Open Data, Design and Development (ODDD) team at the Office of Natural Resources Revenue (ONRR) continues to do.

USWDS includes design principles, components, patterns, design tokens, utilities and templates that utilize human-centered design. Following the five USWDS design principles is required by the [21st Century Integrated Digital Experience Act (IDEA)](https://digital.gov/resources/21st-century-integrated-digital-experience-act/). We also find the key considerations and practical actions useful in determining which improvements to focus on in our agile environment.

Here are the ways we adhere to each of the five design principles. Not only are these principles used in our website design and development, but they are fundamentally woven into the way our team works.

## Start with real user needs
**USWDS Definition:**
"**Real user needs should inform product decisions.** Whether your audience includes members of the public or government employees, decision-makers must include real people from the beginning of the design process. Test your team’s assumptions and the products and services you build with real people to keep focused on what is most useful and important."

For [onrr.gov](https://onrr.gov/) we developed a vision for our website that allows us to determine who our audience is and what their primary needs are.

**onrr.gov Vision**: We communicate the role of the Office of Natural Resources Revenue. 	We deliver trusted and easy to use information and customer service. This enables companies 	who lease federal and Indian lands to accurately report production and pay revenue due.

We’ve identified [user types and scenarios](https://github.com/ONRR/onrr.gov-site/wiki/Product-framing#key-scenarios), which have already gone through one round of updating. In addition to user research, we use journey mapping to help us understand the user experience from start to finish.

We test with real people regularly. Our team is small but includes dedicated UX design specialists. All team members participate in UX research design, and we have access to prototyping software. Leading up to the redesign and launch of onrr.gov, the team ran user research studies applying a variety of methods: discovery, concepts, open and closed card sort, tree testing, content process, and moderated usability studies. The site is now live, and once we have addressed some of our known issues, we will continue conducting user research studies to make iterative improvements. Our findings are stored in a shared folder, and the findings and reports are made publicly available on [GitHub](https://github.com/DOI-ONRR/research/tree/master/onnr-dot-gov-research).

## Earn trust
**USWDS Definition:**
"**Trust has to be earned every time.** Federal websites and digital services can’t assume it. Trust is about understanding and meeting or exceeding expectations, a process that can be established quickly and maintained over continued interactions but is easily damaged. Be reliable, consistent, and honest. Reduce the impact of failure with solid design and engineering. Be a good steward of your audience’s data, resources, and time."

The most significant aspects of earning user’s trust are making services consistently available, easy to understand, working transparently, and ensuring user’s privacy.

The ODDD team was formed to manage the [NRRD website](https://revenuedata.doi.gov/), which was created as part of U.S. [Extractive Industries Transparency Initiative ](https://eiti.org/ )(USEITI). This means transparency and openness has been baked into the work of our team from the start. We use open-source tools whenever we can, publishing our code and data on [GitHub](https://github.com/ONRR/). We also use the [GitHub wiki](https://github.com/ONRR/onrr.gov-site/wiki)and the [ODDD blog](https://blog-nrrd.doi.gov/) to share our processes.

In order to increase availability and resiliency while minimizing server failures or traffic spikes, we have created multiple instances for our frontend web application and the backend content management system (CMS) application. We use [CircleCi](https://app.circleci.com/pipelines/github/ONRR), which provides continuous integration, runs tests, builds frontend application, and then deploys to [cloud.gov](https://cloud.gov/). We check that our site works as intended on a daily basis. Our service agreement with cloud.gov provides us with support for resolving any issues related to the platform as well as support for resolving issues for any specific applications. For automated testing, we use:
-	[ESLint](https://eslint.org/) - Code syntax and formatting
-	[Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/) -  Vue testing library
-	[puppeteer](https://github.com/puppeteer/puppeteer) - End to End testing
-	[lighthouse](https://github.com/GoogleChrome/lighthouse) - Performance and Accessibility testing

For vulnerability issues submitted through [Bugcrowd](https://bugcrowd.com/onrr-vdp), we respond within 3 business days to give a status and let the reporter know if this is an issue that we will work on fixing or if it is not relevant.

We don’t collect PII, personal data, or use any forms on our website. No aspect of our site asks for data entry of any kind, so we don’t need to worry about undoing actions.

We use a banner component identifying our site as a government site. We know our user’s expectations for the site, and we use those to make sure our content and design fulfills those expectations. When an issue is reported, we work as a team to respond as quickly as possible. We also perform annual content audits, which include manual and automated checking for link rot.  

We aim for 10th-grade reading level. This isn’t always possible due to the specialized terminology that must be used on some pages, but we work to get as close to a 10th-grade reading level as possible. We do not offer options for viewing the site in languages other than English, but this is less relevant for us because we serve a specific group and not the general public. However, we do plan to explore the need for offering content in other languages.

## Embrace accessibility
**USWDS Definition:**
"**Accessibility affects everybody; build it into every decision.** Legal requirements are a critical starting point for factoring accessibility into your decision-making, but these requirements are only the beginning. Accessibility is about real people who use your services — it’s usability for the broadest possible audience regardless of how they engage with your content. Everyone who works on government websites has a role to play in making federal resources accessible and inclusive. Design generously and celebrate accessibility requirements as a set of design constraints that help us create a better product for all users."

Embracing accessibility is not just about working towards [Section 508](https://www.section508.gov/manage/laws-and-policies/) compliance, but involves building culture, practices, and inclusive design that considers accessibility at every step of the process. Our group has driven the efforts of our agency to move towards Section 508 compliance. You can read more about that in [a previous blog post](https://blog-nrrd.doi.gov/accessibility/). At ODDD, we work to both meet 508 compliance and incorporate accessibility best practices that go beyond legal requirements.

In addition to using lighthouse as an automated accessibility checker in CircleCI, we also use lighthouse and WAVE to manually check individual pages. We use NVDA, which is free to use and the most commonly used screen reading software, to check pages and documents. With these tools, we’ve been able to ensure that our site is keyboard navigable. In addition to working towards a 10th-grade reading level, we make sure alt-text for the images and tables on our site is contextual and easy to understand.

We test our site with a broad range of users as identified by our [user types](https://github.com/ONRR/onrr.gov-site/wiki/Product-framing#key-scenarios), including users in our agency, private industry users who are required to use the site to report or pay royalties, and federal users outside our agency. We also work with our [section 508 coordinator](https://www.doi.gov/ocio/section508-contacts) who has been able to answer questions, provide us with resources, and help with testing.

There is always more to learn in this area. Improving accessibility is an iterative and on-going process, especially as best practices evolve.

## Promote continuity
**USWDS Definition:**
"**Minimize disruption, and provide a consistent experience throughout services; over time; and across agencies, platforms, and devices.** Consistency is not necessarily conformity. Agencies, sites, and services may have different audiences, missions, and goals — and the way we implement our solutions may differ — but we promote continuity by starting from shared solutions and values. These design principles are one set of shared values, and the design language of the U.S. Web Design System is another. Strive to build user-centered solutions that address the whole experience, not just a user’s specific task, but the context of their journey."

Onrr.gov is just one part of a larger ecosystem of resources that many of the site’s users need to complete their user journey. On the site we provide explanation and links so that users can fulfill their goals of reporting and/or paying via the ecommerce and webcenter portals. We conducted user research to develop the architecture for the site, as well as more research to confirm the navigation is intuitive. We have style guidelines to ensure consistency across the site. During the recent redesign, we improved the introductions for each section of the primary navigation to make it clear what that section of the site does or provides.

As a small team we want to share what we’ve learned so others can see that it’s possible! This makes outreach is an important part of ODDD does. We participate in intergovernmental special interest groups on topics including plain language, section 508, customer service, innovation, and user experience; attend and present at group meetings; and regularly present at intergovernmental conferences and forums related to government innovation and accessibility.

As part of working in the open, we consult repositories, message boards, and government listservs to find solutions for the software we use. Our developers clone existing codes or packages for new features, testing them once they’ve been implemented.

Our site posts information from, and links to tools managed by, other teams in ONRR. Our success is dependent on working closely with members of these teams to insure we have correct and up-to-date information. Breaking down these silos isn’t easy, but we are always working on it by cultivating relationships over time and building a shared understanding of what each side of the relationship owns and contributes.

## Listen
**USWDS Definition:**
"**Evaluate and improve your product by listening to your audience and learning from what you hear.** Continuous feedback drives continuous improvement. Measure customer experience — how well what you’ve built is working for your audience — at every stage of a project and as projects grow and mature. Listen to what people say and observe how they interact with your products or services through direct observation or through analytics data."

ODDD is fortunate in that our small team has specialists in design, development, and research. This allows us to incorporate listening to our audience and improving our product at all stages, from ideation through maintenance mode.

Our [goals and metrics](https://github.com/ONRR/onrr.gov-site/wiki/Goals-and-metrics) for measuring success are documented on our wiki. These include goals in the areas of user experience and customer service, accessibility, content and workflow process, and outreach. The goals include the action items that help us meet them, and the ways in which the metrics represent positive user outcomes.

We provide multiple ways for users/customers to communicate with us regarding any types of improvements they’d like to see, or report any difficulties with using the website. We’re flexible in how issues are reported to us and are willing to meet the users at their preferred communication methods. We respond to users immediately, enter the problems as issues in Github, and we prioritize any bugs that prevent users from getting what they need from the website. On a quarterly basis, we track the number of unsatisfied emails as part of our metrics with the goal of decreasing the total number of unsatisfied customer inquiries.

We constantly gather feedback via email, and we recently launched a [Bugcrowd](https://bugcrowd.com/onrr-vdp) account for users to report bugs and vulnerability issues. We welcome contributions on our Github and Bugcrowd submissions.

Our [DevOps use Agile](https://blog-nrrd.doi.gov/agile/), which means our cycle of assessing the user experience and developing action plans never ends. During our roadmapping sessions for each 6-week epic, we assess known issues and plan goals for making improvements.

In addition to making improvements to our own websites, our developers provide feedback for the services and tools that make up the [technical architecture of our sites](https://github.com/ONRR/onrr.gov-site/wiki/Technical-overview). We are in constant communication with the cloud.gov support team and provide them with suggestions. We also have contributed to GitHub issues for the open-source software we use.

## Conclusion
Overall, we certainly are meeting the USWDS Design Principles. However, in going through the key considerations and practical actions, we found some areas we could improve upon. This was able to help us create some actionable goals for user research design and site improvements, such as: updating our style guidelines, improving our mobile experience, conducting post-launch user research, exploring automated link checkers, scheduling content audits, and incorporating search data analysis into our analyses.
