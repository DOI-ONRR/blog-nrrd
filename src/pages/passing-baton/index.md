---
title: "Passing the baton: what I’ve learned in my first 4 years of federal service"
authors:
- Shannon McHarg
excerpt: "Retrospective of the past four years working on the Open Data, Design, and Developement team."
tags:
- customer experience
- cx
- user experience
- transition

date: "2022-07-15"
---

In April of 2018, I didn’t know what I was getting into. I had applied to a job with [18F](https://18f.gsa.gov/). From that application, they contacted me about an Innovation Specialist position with the Office of Natural Resources Revenue (ONRR), an agency that 18F was working with. I knew that I would be [continuing the UX work that 18F had started](https://18f.gsa.gov/2018/05/01/lessons-from-an-18f-product-transition/), but not much beyond that.

I went down to the DC office (from my home base in Maine) for my first week to pick up my equipment and meet the team.

As soon as I arrived at the office, I was assigned an [onboarding checklist](https://blog-nrrd.doi.gov/Intern-Onboarding/) and an onboarding buddy. I was also told I’d be leading a design studio about disbursements a couple days in. I didn't even know what a disbursement was at the time.

I immediately started attending the team's regular sprint meetings.  At the same time, I was learning the [Natural Resources Revenue Data (NRRD) website](https://revenuedata.doi.gov/) and attempting to understand who uses the site. There were also nuances of doing UX work within the federal government to learn. I also attended meetings to download information from the 18Fers who would soon be rolling off the project.

The security people had mailed my access badge to Acadia National Park instead of to the DC office. So, as soon as I landed in Portland, I had to drive 3 hours to pick up my badge. It was quite the introduction to the federal government.
## Where we are today
Today, I’m the only one left on the team who actually worked with 18F. The rest of the team is career government employees who the Innovation Specialists and a couple of contract developers have trained to do our work. The Innovation Specialists came in as term-limited employees on a Direct Hire Authority. As a result, we knew the team would need to be able to continue to update the website once we termed out and the contract developers’ contracts ended.

The developers have made it possible for the Program Analysts on the team to [update data](https://blog-nrrd.doi.gov/building-technical-with-team-members/) without a developer by implementing a [database](https://blog-nrrd.doi.gov/moving-to-database/) and allowing uploads of spreadsheets. We also have a content management system for onrr.gov that allows content updates without coding.

I’ve taught the Program Analysts how to do everything I do. They can plan and conduct [user research](https://blog-nrrd.doi.gov/usability-testing-training/) to learn about user needs and usability issues with the websites. They have learned how to conduct [content inventories and audits and create sitemaps](https://blog-nrrd.doi.gov/intern-experience). They've done [card sorting](https://blog-nrrd.doi.gov/card-sort/) and [tree testing](https://blog-nrrd.doi.gov/treetest/) to define information architectures. They can at least edit designs I’ve already done in our prototyping tool and they have patterns for designs they can reuse. They've also learned how to analyze [analytics](https://github.com/ONRR/nrrd/wiki/Analytics) and test for [accessibility](https://blog-nrrd.doi.gov/508-Study/). I've given them a bunch of resources to refer to once I leave and we’ve documented much of the work I’ve done in our [wiki](https://github.com/ONRR/nrrd/wiki) and this [blog](https://blog-nrrd.doi.gov/). They will also plan to backfill my position, hopefully with a permanent, career employee.
I’m confident the team will be able to continue to maintain and enhance the websites in the long term.
## What I’ve learned
### Being flexible with skillsets can increase capacity
I learned how to write in [markdown and mdx](https://blog-nrrd.doi.gov/implementing-mdx/) and how to edit HTML. I can now make small text changes on both our sites, which helps when you have limited developer capacity.

I also took on a lot of [content strategy](https://blog-nrrd.doi.gov/making-tough-content-choices/) work when our Content Strategist left and the position was open for a year. I had never worked with a Content Strategist before this job, so I had done a lot of content strategy work in prior roles without even knowing it.

I also took on a lot of Program Analyst work when we were short staffed for a while and learned how to do data checks. And I acted in the manager role often when that position sat open for a year.

Our team is very flexible with roles, which is something facilitated by our agile development philosophy. It has allowed us to weather ebbs and flows in capacity of various skill sets and will help the team as they transition to not having me around.
### User-centered design and agile can work well together
It's possible to have an [agile]( https://blog-nrrd.doi.gov/agile/) team that puts users first. This is the first team I’ve been on where I’ve had actual tasks in the backlog. Most of the other agile teams I’ve been on have been very developer centric and I had to comb through the developer tickets to find where user input or design was needed. It has worked well to have all team members’ tasks on the backlog to make sure we stay focused on user needs and everyone feels like they carry equal weight with the team.
### A simple spreadsheet can be your best friend
When ONRR's Director decided that we needed to make [all the documents on ONRR.gov 508 compliant](https://blog-nrrd.doi.gov/accessibility/), we knew we had a huge task before us. None of us had done much with 508 compliance before, so we all had to learn. In addition, we found that we had thousands of documents to keep track of.

We've received accolades for how we managed that project. I'm going to let you in on a little secret. All we did was use a spreadsheet to track our progress. A spreadsheet with simple charts to show the   progress visually. And we updated it daily. That's it.

We've used spreadsheets to track many other projects including progress on adding pages to the ONRR.gov Content Management System (CMS) , content inventories for both sites, and pages we need to redirect from the old ONRR.gov to the new site. It's a [tool everyone has available](https://blog-nrrd.doi.gov/tool-agnostic/) and can do wonders for keeping large amounts of government data organized.

### Good work leads to being given more work (and that’s a good thing)
When I started, the team was [redefining the website](https://blog-nrrd.doi.gov/homepage-revamp/) after having left the [Extractive Industries Transparency Initiative (EITI)](https://eiti.org/). The website was started as part of this global initiative   and we had to reshape what the site would become once we didn’t have to follow the initiative’s requirements. We had to fight to keep the site because some in the agency thought it wasn’t needed now that we were no longer part of the EITI. Before the EITI site existed, there was another site that allowed people to pick data from a list of dropdowns and download the data. It was built by a vendor and there were calls to bring it back instead of maintaining the EITI site.

We had learned from users that there was still value in keeping the website and ONRR had made a commitment to keeping the data open and available when we withdrew from the EITI. Our Product Manager wanted to keep the site user focused and was hesitant to bend to the requests to make the site more like the old site.

Fortunately, we learned that users wanted to [slice and dice data](https://blog-nrrd.doi.gov/open-data-useful/) more than they could do with the site the way it was, so we implemented the [query data page ](https://revenuedata.doi.gov/query-data). That served the needs of the internal stakeholders who wanted the old site back along with the needs of external users who wanted to slice and dice. We were also able to implement slice and dice functionality on the [Explore Data page ](https://revenuedata.doi.gov/explore). To do all this we had to we started hosting the site on cloud.gov, which allowed for a database to manage larger datasets and gave us the ability query and visualize data.

Once people started to see the good work our team was doing, they gave us a second website, [ONRR.gov](https://www.onrr.gov/). We weren't given any additional resources to work on this second site, so it's taken us a while to get it redesigned to meet user needs and built using open-source tools. We're almost ready to launch the new site. It has been a large lift, but so worth it.

### Cross-pollination is important
The federal government is fragmented because the upper levels change every time there is an administration change, but the lower levels stay the same and keep the system working. As a result, there’s not a lot of cross-pollination between agencies.

I’ve learned about other agencies through the [government UX Community of Practice (UX-COP)](https://digital.gov/communities/user-experience/) and the associated mentoring program. I’ve learned a lot from my two mentees and from the discussions in the UX-COP listserv. We need to do more of that to make the tent for UX in government bigger and to get more consistency in experiences across agencies.

I've also learned a lot from working on side teams within ONRR and the Department of the Interior (DOI). I was on a Strategic Planning Oversight Team where I got to know people from other teams that have since become supporters of our team's work. I also worked on a DOI team to come up with [guidance for implementing the 21st Century Integrated Digital Experience Act (IDEA)](https://www.doi.gov/sites/doi.gov/files/21st-century-idea-implementation-guidance-final-09242021.pdf). That gave me exposure to the work being done at other DOI agencies and exposed me to the DOI Web Council, which I joined.

Our team has also had [cross-trainers](https://blog-nrrd.doi.gov/Cross-training/), which helped [break down silos](https://blog-nrrd.doi.gov/breaking-down-silos-by-cross-training/) within ONRR. They've made the ONRR.gov website design better by sharing their subject matter expertise and [connections with stakeholders on their teams](https://blog-nrrd.doi.gov/troubleshooting/). They’ve also tried using [agile practices](https://blog-nrrd.doi.gov/agile-methodology/) on their teams.

We’ve also had 15 interns in my time with ONRR. They’ve helped with things taking notes in user research sessions, [designing features](https://blog-nrrd.doi.gov/homepage-graphic/), [planning design studios](https://blog-nrrd.doi.gov/trends-design-studio/), doing [discovery work](https://blog-nrrd.doi.gov/intern-onrr-dot-gov/) on ONRR.gov, doing data checks, coming up with [tools for checking data](https://blog-nrrd.doi.gov/intern-blog-post/) and adding content to the CMS. I’ve learned a lot through mentoring and explaining my work to these interns. They have all gotten a glimpse of what it’s like to work in the federal government and some want to find federal jobs after graduating.

All this sharing makes for better work throughout the federal government.
### Don’t be afraid of term-limited positions
Don’t be afraid of term-limited positions. They’re the easiest way to get into federal service and the laws may change by the time your term is up. They were capped at 4 years (a 2 year initial term with a 2 year extension) when I started and now most terms are 8 years   (a 4 year initial term with a 4 year extension). There are people dedicated to making hiring easier in the federal government, so things are changing fairly quickly (for government).
## Conclusion
I’m passing the baton to my capable colleagues and headed to Department of Labor as a Customer Experience Strategist. I plan to cross-pollinate what I’ve learned at ONRR there and help make the tent for user and customer experience in the government bigger. The more people we have doing this work, the more capable the federal government becomes at providing exceptional experiences for all citizens. This team has been the best team I’ve ever worked with and I will miss them.
