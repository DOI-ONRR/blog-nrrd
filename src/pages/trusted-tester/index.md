---
title: "Advanced Section 508 compliance testing: moving beyond automated testing and screen readers"
authors:
- Erin Elzi
- Lindsay Goldstein
excerpt: "Two members of our team recently went through Trusted Tester training. Trusted Tester was recommended to us by our Section 508 coordinator as a way to increase our manual accessibility testing skills. In this blog, we share our experience with the training and applying the Trusted Tester process."
tags:
- Section 508
- accessibility
- trusted tester

date: "2023-08-24"
--- 

We embrace every opportunity to enhance the accessibility of our websites, so we were excited to learn about a comprehensive manual testing training offered by a government agency. A great feature is that the training is free and allows participants to complete it at their own pace without any live sessions. 

## Comprehensive training for Trusted Testers

The [Trusted Tester Training Track]( https://training.section508testing.net/), offered by the Department of Homeland Security (DHS) consists of six courses, with the first two focusing on Section 508 and emphasizing the significance of manual testing. The third course provides insights into accessing the necessary tools for website assessment, while the fourth course delves into the testing process through 20 in-depth lessons. The final two courses contain the practice exam and the final exam. To progress to the next course, participants must complete each one in sequence. 

Before starting the training, you must ask yourself two critical questions: 

1. Are you prepared to dedicate around 70 hours to the training? 
2. Do you have the appetite for a mental challenge? 

Recognizing the large time commitment, we decided to allocate significant blocks of time over a short period to complete the training. We managed to finish the course within six weeks by immersing ourselves in the material and absorbing the information. 

### Challenges faced during the training

Besides to the time commitment, we encountered several other challenges throughout the training, such as: 

#### Gaining access to Trusted Tester tools

The training requires installing ANDI (Accessible Name & Description Inspector) which is a free accessibility testing tool.  ANDI is an open-source project created by the Accessible Solutions Branch of the Social Security Administration; the source code is available on [GitHub](https://github.com/SSAgov/ANDI).  To [install ANDI](https://www.ssa.gov/accessibility/andi/help/install.html), it simply requires adding the JavaScript url as a bookmark and launching it. We discovered that our organization has JavaScript blocked and it prevents us from adding ANDI as a bookmark. As a workaround, we were able to add ANDI as a snippet in the developer tool and running it by following these instructions. 

#### Navigating the Trusted Tester training and accessing content 

The course demanded meticulous attention to detail. We had to email Trusted Tester staff to clarify some course instructions. Specific operating systems and browsers were required to optimize the learning experience. Navigating the training site took time as some sections were very short and required a lot of scrolling and clicking to move through lessons.  The modules did not have an auto-play option, the lack of which slowed down our momentum during the course. The training site also has an auto-log out after a certain time and the log out warning would not necessarily show up in the window you were working in. This resulted in occasional lost progress if you were unknowingly logged out but continued to work.   

#### Coping with large amount of training content 

The training covered an extensive range of material, with twenty units divided into topics, each with substantial detail and examples. Practical tests needed to be passed before progressing to the next unit, and only three attempts were allowed before a reset. Losing progress during a test due to logging out was frustrating. Some lessons proved more challenging than others, demanding patience, and support from a training buddy.

### Trusted Tester practice exam 

After completing the first four courses, participants are eligible to take the practice test. This test encompasses 17 sections from the training course, consolidating all required testing items into one exam. To pass, one needs to score 90% and test three different yet related web pages for all the required items. Many attempts are permitted, but the testing web pages change each time. 

The practice test mirrors the format of the real exam. Test completion requires around 6 hours, so adequate time allocation is essential. While both of us managed to pass, we found some question wordings and answer selections confusing. We were able to consult the course materials during the exam. However, given the practical application of the material, we would have benefitted from explanations for incorrect answers.

### Trusted Tester certification exam 

Once you pass the practice exam, you should receive an email enabling you to register for the certification exam. In our case, one of us had to request access via email before both of us received it. The final exam was more challenging, as it allows only three days to achieve a 90% or higher score, with just three attempts allowed. Failing requires re-requesting access, which could lead to several weeks of waiting for assessment and remedial training assignments by the Trusted Tester staff. 

Despite the challenges and frustrations, both of us passed the test within the allotted time frame, and we were thrilled to celebrate our hard-earned certification. The training was comprehensive, and the repetition it demanded ultimately contributed to our success. Armed with new skills, we were eager to apply them immediately to enhance the accessibility of our websites for all users. 

## Applying Trusted Tester  

We wanted to practice our newly acquired Trusted Tester knowledge while it was still fresh in our minds after completing the certification. The timing serendipitously fell in line with the [Government-wide Section 508 Assessment]( https://www.section508.gov/manage/section-508-assessment/), which requires manual testing of the public-facing top 10 most viewed web pages. We decided to apply Trusted Tester to the top 10 web pages for each of the two sites we manage: [revenuedata.doi.gov]( https://revenuedata.doi.gov/) and [onrr.gov]( https://onrr.gov/). Not only would this help us meet the requirements of the Section 508 Assessment, but testing additional web pages for each site would let us apply our Trusted Tester skills and identify additional aspects of each site that need to be addressed to meet Section 508 compliance. The Section 508 Assessment also requires that we apply automated testing to the top 10 web pages, so this also allowed for easy comparison of the results we get from manual versus automated testing tools. 

### Teamwork makes for great accessibility work 

Applying Trusted Tester takes time and focus, so we wanted to make sure it was not too much burden placed on a single person. We divided up the work by site – one of us applied the process to the 10 web pages for revenue.doi.gov and the other did the 10 web pages for onrr.gov. Splitting it up this way also made it easy to recognize and document if an issue was global (found on every page on the website) or not. It also meant that as we each made our way through the sites, we could recognize and look for issues that weren’t global, but often found on similar web pages. With each page tested we also got more familiar with the Trusted Tester criteria and the process became faster and less tedious.  

Having more than one person on our team with Trusted Tester certification proved to be invaluable when applying the process to our own websites. Some of the Trusted Tester criteria felt unclear to one or both of us and being able to work through our questions together was extremely helpful. For example, the training did not go into great depth on fly-out (dropdown) menus, which exist on both sites. We could easily tell that they might have accessibility issues, but we weren’t sure which criteria they failed to meet. After discussing it, we determined that the menus on one site passed, and the menus on the other site failed multiple criteria. Being able to compare the failed menus with the output for the passing menus also helped in identifying which criteria they failed. On occasion we also both found that the act of typing up questions to ask one another helped us see the problem in a new way and answer the question on our own! 

### ACRT 

DHS provides the [Accessibility Conformance Reporting Tool (ACRT)]( https://github.com/Section508Coordinators/ACRT) to aid in the Trusted Tester process. ACRT includes instructions, a form for entering answers to each test criteria, and a platform for viewing the results. The tool is open source and available to everyone - you do not need Trusted Tester certification to use it. 

The ACRT form lists the 63 test conditions of Trusted Tester. For each condition, there’s the option to select if the page being tested passes, fails, does not apply, or is not tested for that condition. There are free-text boxes for notes and to identify the exact location of the violation. There is the ability to upload screenshots to help explain how the page failed specific conditions. The form also has options for tracking when and how the issue is remediated.   

*Sample of the ACRT form for the revenue.doi.gov homepage*
![Snapshot of the online form that includes issues 11 through 15. Each issue listed includes the test name, ID, condition, option to choose pass or fail, text boxes for adding notes and the location of the failure, and option to upload screenshot or other files for each issue.](ACRT_form.png)

Once the report has been completed, it’s saved on your local machine as a JSON file and can be then uploaded into the View Report section of ACRT. The report displays each test criteria in the same format as the form but has the option to filter the conditions by whether they passed, failed, or did not apply. This makes it easy to view only the test conditions that failed. The report also provides a risk score breakdown, which details the disability groups impacted by the identified issues on the page.   

*Risk Breakdown for the revenue.doi.gov homepage*
![Table of the risk score breakdown that lists 5 disability groups and the details about those impacted: Vision (without vision, with limited vision, without perception of color), Hearing (without hearing, with limited hearing), Cognitive (with limited language, cognitive, and learning abilities, without speech), Photosensitivity (photosensitive epilepsy / photosensitive seizure disorders), Mobility (with limited manipulation).](risk_score.png)

### Manual versus automated testing 

Before learning about Trusted Tester, our accessibility testing consisted primarily of Lighthouse for automated testing and a screen reader for manual testing. Most of our previous accessibility improvements aimed at improving our score in automated tools, therefore our web pages score high in Lighthouse. For example, the revenue.doi.gov homepage has a score of 95 (out of 100) in Lighthouse, with 3 identified failed conditions. Using Trusted Tester, we identified 12 failed test conditions. All three conditions from Lighthouse were included in Trusted Tester for this page. For some other web pages, the failed conditions found in automated versus manual testing were different. We find that automated tools identify more issues that are the result of errors in coding. Manual testing allows for considering the needs of more disability groups and identifies errors that are contextual. The different results from each method proves the importance of both automated and manual testing.

## What we are doing with the findings  

The training includes guidance for sharing the results with others, making it easy to identify and fix the failed test conditions. We put the ACRT results in a spreadsheet, making it easier for our team to review the information. Many automated testing tools provide a score or ranking that helps us prioritize how we can work through fixes. Since it’s all manual, contextual, and done on a page-by-page basis, it makes sense Trusted Tester and ACRT do not provide a compliance score or ranking. Our spreadsheet made it easy to look at the violations holistically and work together to assign priority to the issues. This is done by considering how many web pages each issue affects and the estimated difficulty level of the fix.  

Now that we’ve tested our top 10 web pages for each site, we’re looking forward to applying the Trusted Tester process to more web pages. 

## Conclusion

While it felt tedious at times, the Trusted Tester training and certification was well worth it. Identifying accessibility issues on our websites was main reason for completing the process, but there are other benefits. We gained more understanding of how individuals with various disabilities use websites and which violations affect different disability groups. We are better equipped to advocate for a broader range of accessible design and content, and able to provide the reasons such decision. There is always a lot more to learn in this area, but our foundation is stronger now.  

Applying Trusted Tester has also led to new collaboration opportunities within our team. Since ANDI is available for anyone to use, not just certified Trusted Testers, we’re training our team on how and when to use it. We’ve already found more uses for ANDI. For example, ANDI presents heading structure in a way that is easy to understand, so we are currently using it on a project for checking the headings on each onrr.gov page.  

We envision this could also lead to collaboration with others outside of our Open Data, Design and Development team (ODDD) and even outside of the Office of Natural Resources Revenue (ONRR). If you are currently applying Trusted Tester or other manual testing tools to your site, feel free to contact us. Let’s help each other out! 