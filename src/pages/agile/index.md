---
title: "What agile looks like at the Office of Natural Resources Revenue"
authors:
- Lindsay Goldstein
- Shannon McHarg
excerpt: "We started using agile development when we were working with 18F. We reflect on where we're at today, 5 years later."
tags:
- agile
- product strategy
- product management

date: "2022-07-13"
---

Agile at the Office of Natural Resources Revenue (ONRR) started with [18F](https://18f.gsa.gov/). Our Natural Resources Revenue Data website was created as part of the U.S. [Extractive Industries Transparency Initiative](https://eiti.org/) (USEITI) by a Presidential Innovation Fellow, Michelle Hertzfeld. That fellow went on to become a founder of 18F, so USEITI became one of 18F’s first projects. The team working on USEITI started using a scrum-based agile with 18F. We’ve adapted our agile practices over time to meet our needs.

>“The Agile Manifesto is realized at 18F in the combined practices of iterative software development, product management, user-centered design, and DevOps.” From [18F’s Agile Principles and 18F Practices](https://agile.18f.gov/18f-agile-approach/)

Let’s look at how we’ve taken these practices and made them our own.

## Our team
We are a small, agile team that works on ONRR’s public-facing websites. The first is an open data site, the [Natural Resources Revenue Data website](https://revenuedata.doi.gov/). This site presents production, revenue, and disbursement data for oil, gas, and minerals produced on federal and Indian lands. The second is the agency’s main website, [ONRR.gov](https://www.onrr.gov/). Companies that lease federal and Indian lands use this site to report production and revenue of natural resources on leased lands.

## Product management
>“We start with a product vision and strategy, informed by users and the overall mission of 18F or one of our partner agencies. We do this so that the work always stays connected to an overarching goal that everyone understands and is excited about.” From [18F’s Agile Principles and 18F Practices](https://agile.18f.gov/18f-agile-approach/)

At ONRR, we’ve spent quite a bit of time working on product strategy. We’ve held workshops to define the problem statement and vision for both of our public websites. We continue to revise them over time as we learn more about the websites’ users. From 18F, we learned the importance of having a product strategy to ensure we know where we’re going. Agile is JUST a way of doing work, you still need to know what you're doing before you start.

### Natural Resources Revenue Data website
#### Problem statement
The people of the United States of America collectively own federal lands, waters, and the minerals beneath them. Those lands are administered by U.S. government agencies. The federal government is also the trustee for natural resource revenue from Native American and Alaska Native lands.

Transparency about how these resources are managed is crucial to public discourse and government accountability. However, data about public resources is underutilized because it’s often difficult to find, lacks contextual information, or is presented in ways that aren't readily accessible or understandable to users.

Because natural resources data can require specialized knowledge to interpret and understand, the public relies on intermediaries, such as NGOs, journalists, and elected representatives to contextualize, interpret, and communicate its meaning and implications. It’s critical these intermediaries are well informed with reliable and properly contextualized data.
#### Vision
We are informing policy debates and raising public awareness by building the definitive source of timely and useful data about how the government manages federal energy and mineral resources, revenue, and disbursements.

### ONRR.gov
#### Problem statement
Companies pay to produce natural resources on federal lands, Indian lands, and the Outer Continental Shelf. They need to access timely and accurate information to meet complex regulatory requirements. These requirements include reporting production and paying the required royalties and other revenues. The Office of Natural Resources Revenue collects, verifies, and disburses those revenues.

Native Americans and the public need to understand their revenues and ensure we meet our trust responsibilities. ONRR should provide access to resources and clear communication to help this understanding.
#### Vision
We communicate the role of the Office of Natural Resources Revenue. We deliver trusted and easy to use information and customer service. This enables companies who lease federal and Indian lands to accurately report production and pay revenue due.

### User-centered design
>“We conduct discovery research before we build anything. Depending on the complexity of your problem space, this can take up to 2 to 3 months. As opposed to ‘requirements gathering’, this process involves actually visiting with users and prototyping to test out multiple concepts quickly before investing a lot of money in building something.” From [18F’s Agile Principles and 18F Practices](https://agile.18f.gov/18f-agile-approach/)

We base our website design for both of our websites on users. The user-centered design process is ongoing, it never ends. We start by understanding problems based on previous user research, data requests, or analytics. We then shape solutions by putting ourselves in the shoes of the users. Then we build and validate products using agile processes. We repeat and iterate as we learn more about users.

![We base our website design for both of our websites on users. The user-centered design process is ongoing, it never ends. It starts by understanding problems based on previous user research, data requests or analytics. We then shape solutions by putting ourselves in the shoes of the users. Then we build and validate products using agile processes. We repeat and iterate as we learn more about users. Circular diagram includes the following sections. Understand Problems, Shape Solutions, and Build & Validate Products. Under Understand Problems there are sections for Identify Problems and Define & Scope the Problem to Solve. Under Identify Problems there are bullets for sources of problems: previous user research, calls/emails requesting data, Freedom of Information Act (FOIA) requests, and analytics. Under Define & Scope the Problem to Solve there are bullets for: start with a raw idea, understand the current state process and problems, conduct exploratory user research, narrow the problem, and determine the appetite. Under Shape Solutions there are sections for Generate & Test Solutions and Select Final Solution. Under Generate & Test Solutions there are bullets for: sketch solutions, review sketches, narrow down the options, poke holes in the selected options, review hole-poking findings, choose the options with which to move forward, iterate sketches, and test with users. Under Select Final Solution there are bullets for choosing a final solution balancing: user needs, technical constraints, timeline, and other constraints. Under Build & Validate Products there are sections for Scope for Build, Build Solution, and Validate Built Product. Under Scope for build there are bullets for: break down the work into an initial list of scopes, create GitHub issues for each broken down piece of work, determine scope order & prioritize, factor scopes and tasks as we go, and decide what will be good enough to be considered done. Under Build Solution there are bullets for: flesh out design details and build using agile and iterate as necessary. Under Validate Built Product there are bullets for: usability testing and iterate design/build as needed or feed into future problem identification. We factor tasks in every phase into our agile backlog, sprints, and epics.](./UCD.png)


## Iterative software development
>“When we build, we aim to release early and often to real users in real life situations. Ultimately, the government’s investment should be measured in working software, not phase documents or milestones.” From [18F’s Agile Principles and 18F Practices](https://agile.18f.gov/18f-agile-approach/)

As part of the user-centered design process described above, we iterate the solutions as we learn more about the problems. The cycle never ends. We factor tasks in every phase of our iterative cycle into our agile backlog, sprints, and epics.

## DevOps: Agile execution
>“We also work to ensure that the infrastructure and process is there to enable continuous delivery of software to real users (DevOps), and that a clear agile delivery process is set up. Teams are free to tailor their agile process to suit their own situations.” From [18F’s Agile Principles and 18F Practices](https://agile.18f.gov/18f-agile-approach/)



### Two-week sprints
We work in two-week sprints. Each sprint includes daily standups, sprint planning, weekly synch up, sprint demo, and sprint review/retro. We decide what individuals are working on at the beginning of each sprint. We define sprint goals based on previous velocity estimates. Everything goes into the two-week sprints. This includes user research, design, content strategy, development, analysis, and quality reviews.

![Diagram demonstrating our two-week sprints. Week 1: Monday: Sprint planning, Tuesday: Standup & synch up, Wednesday: Standup, Thursday: Standup, Friday: Standup. Week 2: Monday: Standup, Tuesday: Standup & synch up, Wednesday: Standup, Thursday: Demo, sprint review & retro, Friday: Standup.](./Sprints.png)

### Longer-term planning
Every 6 weeks (or 3 sprints) is an epic. These help us to keep sight of where we’re going in the longer term. We plan epics in a road mapping session (one-hour meeting) at the beginning of the epic to decide what goes into the epic.

We refine the backlog once a month. We remove old issues and prioritize and estimate ones we want to keep.

We conduct ad hoc [design studios](https://blog-nrrd.doi.gov/shaping/), as needed, to shape solutions for larger projects. These involve meetings over a few weeks. We define the problem, sketch solutions offline, poke holes in the solutions and decide on what approach we want to take.

![Diagram demonstrating our long-term planning. Epic (road mapping) is comprised of three 2-week sprints. Backlog refinement is every four weeks or two sprints](./Planning.png)


### Agile team roles
These are the roles we currently have on our agile team. We all work together and respect each other’s expertise. We also often have interns and cross-trainers working with us to learn our processes and contribute to our team’s progress.

**Role**|**Responsibilities**
:-----:|:-----:
Product Owner|Defines the product vision and makes sure what we’re working on carries out that vision.
Developer|Writes the code, develops the technical strategy, and decides on technical tool sets.
UX Designer|Conducts user research to understand user needs and designs the site to meet those needs.
Program Analyst|Makes sure we have current and accurate data and interfaces with other groups within ONRR.
Content Strategist|Develops strategy for and maintains all content on the site.

## What we’ve learned along the way
### Positives
Agile has been an effective way to manage two different products with a small remote team. The regular meeting schedule keeps everyone aware of work status. Breaking down our work into concrete tasks creates shared ownership of our products and keeps us accountable.

We’ve been meticulous in documenting our work processes and procedures because our work methods are new to our organization. We want them to be sustainable and enable knowledge transfer as the team changes. This has been essential for training new team members, cross trainers, and interns. This documentation has allowed us to onboard new collaborators and get them contributing quickly.

Our agile mindset has also allowed us to pivot to accommodate requests from high-level stakeholders. And to do so without losing productivity.

### Negatives
There is a learning curve for collaborators who aren’t familiar with agile. We have been lucky to work with people who are curious and love to learn to think and behave in new ways. If you are stuck in your ways and hate learning, agile isn’t for you.

We have also encountered roadblocks when interacting with organizations or teams that don’t work using an agile method.

## Conclusion

Agile development is becoming more prevalent in the federal government. It has been used successfully for managing complex government products like ours. As a result, we’ve had interest from others within and outside of our organization in learning how we work. We look forward to continuing to share our evolution and hope to learn from others, as well.
