---
title: " Reconsidering the Consent Form:​ The Least User-Friendly Aspect of UX Research​ "
authors:
- Erin Elzi 
- Lindsay Goldstein

excerpt: " This blog explores how and why we implemented a comprehensive participant consent process in our user research.  "
tags:
- 

date: "2024-03-28"
---

Like many UX (user experience) teams, ODDD (Open Data, Design, and Development team) was using a signed form to gain consent from user research participants. In 2023 we switched to a process that gives participants more information on the research process and how we store and use their data. The new process also allows them multiple points of opting in rather opting out. We call this our user research agreement process. In this post we discuss why consent is important, but a signed form is not necessary for user research. We also share what our process looks like now and how we went about designing and implementing our new user research agreement process.

## What consent means in user research
### What consent looks like in general in UX and beyond

One of the most commonly used methods for gaining consent during user research is with a signed form. If we’re doing good by our Paperwork Reduction Act requirements, the consent form is an online document but still requiring a signature. For some of us, this might be a PDF we send to the participant. They must download, open, read and comprehend on their own, add their electronic signature, reattach to the email, and send it back to us. We then need to store and track these forms. If we’re making our forms digital and easy to use, we might send the participant a link, they read and comprehend the form on their own, then type their name and hit a button to provide their consent.

In both situations, the participant goes through a multi-step process. We tell them to “let us know if you have any questions”, but they might not be provided space to ask such questions during their user research session. The consent process is separate from actual participation in the research and happens days or weeks prior. Often our participants are new to user research and not sure what they have consented to until the session starts. We give them the option to opt-out “at any time,” but they must remember how to do that.

A less formal method is implied consent, which says that by participating, the person consents to their data being collected and used. There is no signed form. This method often provides even less information about what user research is and what happens with their data.

In advocating for a reconsideration of the user research consent process, we are not suggesting we do away with consent all together. When done properly, a consent process ensures participant autonomy. It informs the participant of the user research process, how their data will be used, and what measures will be taken to protect their privacy. It fosters trust between the researcher and participant and improves the reputation of our agencies.



### Signed form – why is problematic and why it’s not necessary
Anyone who has administered user research has probably used a signed consent form at some point. But have you ever stopped to wonder why? 

The signed consent form process comes from the higher education practices involving human subjects research. Human subjects research requires extensive project plans, including every question the participant will be asked and details about any email or other communication used. Human subjects research requires institutional review board (IRB) approval by at least one institution. This process is framed as protecting the participant, but often does more to protect the sponsoring institutions. The consent forms for these projects are verbose, can be confusing and are presented at a time that doesn’t encourage the participant to read and actually comprehend the details (similar to the consent forms at a doctor’s office, or a website cookies warning banner that leads to a very long page of text when you want to reject the default settings).

Even though a signed consent form is still the standard in user research in the government, we believe it’s not necessary. Even by IRB standards, user research is NOT human subjects research! The subject of our research is not the participant, it’s the website, tools, services, products, and experiences that we’re asking them about. 

We’re not just using the fact that user research is not human subjects research as a loophole to avoid using a signed consent form. The signed consent form does little to inform the participant in a way that makes sense to them, at a time that makes sense to them, and requires an understand and remembering of how to opt-out. The participant might never see the signed form again, making it difficult to access later if they have questions or change their mind about having their data used. 

Inspired by the work of Dana Chisnell from DHS, who has written and presented on the improving the consent process in government user research, we set out to develop a process that is more inclusive and equitable. We wanted something that:

* reduces the onus placed on the participant to download and return something to us 
* is readily available to review after the user research ended
* uses plain language but still informs the participant of the research process and their data usage
* emphasizes their option to opt-in at multiple points in the research process instead of a single point of opting out


 ## Our previous consent process  
In the past, we would send a standard PDF consent form to non-federal government user research participants via email before their interview. We asked them to read the form, sign it, and send it back to us. We also gave them the opportunity to ask questions if they had any.

Ideally, the participants would open the email, download and read the agreement, sign it, save it correctly, and send it back to us. However, this didn't always happen. 

We tried to get the signed consent before the interview, but it wasn't always possible. Sometimes our emails got filtered out, participants forgot, or they had trouble opening and signing the PDF. Sometimes we even forgot to send the email with the PDF. We found that not everyone used PDFs regularly, weren’t familiar with them, or might not have access to a PDF reader or editor.

If we couldn’t get the signed consent form before the interview, we would have to spend time at the beginning of interview troubleshooting the process. Having a complicated user research agreement process at the beginning of the interview took away time from the interview itself and made the participants feel flustered. It could make them feel like they were doing something wrong, which was not our intention. Our process was just a result of what we thought we were supposed to do. 

 
## Steps we took to change the consent process
### Opting in at multiple points, instead of opting out

As with every new project, we started with research. We explored user research agreements across different agencies and spoke to our counterparts, documenting as we worked. Once we felt informed, we requested and received approval from our agency to move forward with a new process. 

We decided to draft a new [user research agreement]( https://github.com/DOI-ONRR/nrrd/wiki/User-research-agreement) and a [user research participant guide]( https://github.com/DOI-ONRR/nrrd/wiki/User-research-participant-guide), both hosted on our GitHub wiki. We wanted to put them on our wiki so anyone could access them at any time. 

In our new user research agreement, we included sections on the impact of research participation and emphasized that taking part is voluntary.  We detailed confidentiality and how we keep our participants’ information safe. We also included a Privacy Act statement and finished with a clear statement of consent. Our contact information is listed clearly throughout the agreement.

We wrote a user research participant guide to make sure that participants could be fully informed about research process. This describes what it’s like to participate in user research before, during and after the interview. The 3 different “opt-in” consent points are noted in the process. The participant first opts in by agreeing to participate in the user interview. The second opt-in occurs at the beginning of the interview. We ask participants again at the end of the interview for their 3rd opt-in. 

![A visual depiction of the consent process before and during the interview for the user research participant.](userresearchparticipantprocess.png)
*The consent process before and during the interview for the user research participant.*

We also link to the user research agreement and to our [research repository](https://github.com/DOI-ONRR/research) where we store our deidentified and consolidated study information. 

We ran a hallway style research study on our new process with internal ONRR employees and one participant suggested that we create a diagram to further simplify the process and appeal to visual learners.  

## Our new process
### How its going so far – benefits, feedback, how we track it
We’ve used this new 3 point opt-in process for several rounds of user interviews, and it has been – knock on wood – pretty seamless! We’ve found that it’s much easier to share links with participants and touch base several times throughout the interview process. 

We send out the link in the interview invitation email and add it to the meeting invite itself. At the beginning of the interview, we ask the participant if they have read the agreement or would they like more time to read it. We add both the user research agreement and the participant guide in the chat window and give the participant any time needed to read the information.  

We then ask if they have any questions before confirming that they agree to participate. We share that they can stop the interview at any time. They can decide any point in time -- even after the interview ends that they don’t want us to include their information in our research results. This verbal consent process sounds like a lot but usually takes less than 2 minutes. 

We then conduct the interview.  At the end of the interview, we ask again if they agree for us to use their information in our research study. We indicate in each notetaking document that the user has agreed for their information to be included in the research study.

This process has worked well so far. Almost everyone we’ve spoken to through our user research has read the agreement ahead of time and did not have any questions. We’ve only had a few user research participants that needed some time to review the agreement during the interview. Since we’ve simplified the information in the agreement, it only takes them a few minutes to review. We are happy with the new process; we feel like we are getting informed consent from our user research participants and that the participants have a better understanding of our research process and what will be done with the participants.
