---
title: "Document accessibility: getting from 5,000 to 0"
authors:
- Shannon Hahn
- Shannon McHarg
excerpt: "Our approach to making 5,000 documents on onrr.gov accessible."
tags:
- accessibility
- section 508
- inclusion
- user experience
- public service
- government
date: "2021-08-11"
---

When the Director of the Office of Natural Resources Revenue (ONRR) decided to ensure all documents on onrr.gov are Section 508 compliant, we thought it would be a reasonable project. We needed to come up with a plan to correct all the documents currently on the website and a plan for any new documents requested to be uploaded on the website. We started compiling [resources](https://github.com/ONRR/onrr.gov-site/wiki/Accessibility) to share with our colleagues to help them correct documents. With our Director’s support, we sent an agency-wide notification that we are no longer uploading any new documents on the website unless they pass the accessibility checks. Then we started going through the content inventory that [one of last year's interns](https://blog-nrrd.doi.gov/intern-experience/) had put together and found out there were over 3,000 documents currently on the site. That made the project seem daunting. We weren't sure we'd be able to get through all the documents in less than several years.

## Prioritizing documents for compliance

To start making sense of the pile of documents, we looked at our site's analytics to rank the documents by usage. We knew we should fix the most used documents first. We also found more documents that weren't in the content inventory. We put together a project plan that broke down the project into three phases and we emphasized that documents should be corrected by the owner since they are the subject matter experts of their own documents and accessibility is everyone’s responsibility. We were happy to learn that 70% of downloads over the course of a year were of the top 100 documents. We split those first 100 documents off as phase 1.

At the beginning of phase 1, we ran accessibility reports on each document and assigned each document an owner. We sent each owner a list of the documents assigned to them for the phase along with the accessibility report. We also provided a link to our [wiki](https://github.com/ONRR/onrr.gov-site/wiki/Accessibility) with resources to make documents accessible. We also gave the owners a deadline about 8 weeks from the start date. One program area had the bulk of the documents, so we gave them a longer deadline of 20 weeks.

We defined phase 2 as the next 100 most downloaded documents, which got us to 84% of downloaded documents. We sent each document owner their list of documents and accessibility reports. We gave document owners another 8 weeks to complete, phase 2, but it went faster than phase 1 because the document owners were now familiar with the making documents accessible.

Then we had the long tail of phase 3. This phase included over 3,000 documents downloaded fewer than 100 times each in a year. To break up phase 3, I categorized the remaining documents.

The bulk of the phase 3 documents were Federal Register Notices and public comments on those notices. Our regulations team had told us we could link out to the Federal Register website for the notices instead of hosting our own pdfs of them. To do this, we had our data intern find the appropriate links to the Federal Register and I got to work replacing those documents. That reduced the number of documents by 460. Finding links to replace the public comments with wasn't as easy, so the regulations team found us links and told us which we could remove. That allowed us to remove 1,288 more documents from the site.

For the rest of phase 3, we wanted the document owners to decide whether to keep the documents before we ran accessibility reports. We gave the owners a list of documents along with how infrequently they were downloaded to make this decision.

As I was going through the phase 3 documents, it became clear that there were about 2,100 extra documents in our website folder. We assumed that these documents were not linked on the site, since they didn't appear in the content inventory. Rather than spend time prioritizing these documents, I put them all in a "not linked" folder. We'll put them back if anyone complains about a broken link. Otherwise, we will not bring them to the new site.

The total number of documents we're processing is 5,544. Throughout all three phases, we’ve been keeping track of the documents in a spreadsheet that tracks the current status of each document, which phase it’s in, who owns it, a link to the accessibility report, and who on our team checked the report. We’ve also cross-referenced this list with our content inventory to make sure we know where each document lives on the site when we update or remove it.

## Making documents compliant

Keeping track of the documents was only a small part of the undertaking. The people doing most of the work were the subject matter experts who were updating their documents. One of the analysts in our Reference, Royalty, and Production (RRM) team, the team that owns the most documents on www.onrr.gov, talks about her experience updating documents.

### 508, the newest buzzword

After ONRR’s director started the push to make documents compliant, “508 compliance” became a “buzzword” at our agency.

But what is it? In short, in 1998, Congress amended the Rehabilitation Act of 1973 to require Federal agencies to make their electronic and information technology (EIT) accessible to people with disabilities, covered under Section 508 of the Act.

"Great," you say, "Who's responsible within my organization?"

**Short Answer:** Anyone who creates content to share must ensure they follow the minimum requirements.

Maybe you're thinking, "that's a pretty broad audience." So, to clarify, I'm not talking about the picture, recipe, retirement announcement, or even a team newsletter you might share with a co-worker, unless (we'll discuss this shortly) …

Breaking it down a little further, the Department of the Interior (DOI) follows the [U.S. Access Board and the Information and Communications Technology (ICT) standards](https://www.section508.gov/buy/determine-ict-standards#0) outlined in 36 CFR 1194. These are the **minimum** requirements for content Section 508 Accessibility compliance:

* All public-facing electronic content must be accessible.

* Electronic Content that is not public-facing but is official business and is communicated through one or more of the nine categories below is an agency official communication and must be accessible.

  1. Emergency notifications

  2. An initial/final decision adjudicating an administrative claim/proceeding

  3. Internal or external program or policy announcements

  4. A notice of benefits, program eligibility, employment opportunity, or personnel action

  5. A formal acknowledgement of receipt

  6. Survey questionnaires

  7. Templates or forms

  8. Educational or training materials

  9. Intranet content designed as a Web page

…now, let’s talk about that picture, recipe, retirement announcement, or team newsletter. We can see that these types of content don’t fall under the minimum requirements for non-public facing content.

So, maybe you're thinking, "Awesome, I'm good to go!" Well, "Yes," and possibly "No." A little more thought and Agency consideration may be necessary. Suppose you know that the intended audience may be disabled, or the group has disabled team members. In that case, I recommend making content 508 accessible upon content creation.

It's important to mention that sending out non-public facing content that isn't 508 accessible might need to be made compliant. Any qualifying individual may request reasonable accommodations under [Section 504](https://www.govinfo.gov/content/pkg/USCODE-2018-title29/pdf/USCODE-2018-title29-chap16-subchapV-sec794.pdf), another section of the [Rehabilitation Act of 1973.](https://www.section508.gov/sites/default/files/rehabilitation-act-of-1973-amended-by-wioa.pdf)

### Tips and tricks

RRM owns an extensive collection of both public-facing and non-public-facing content data. We have had the opportunity to work on Microsoft Word, Excel, PowerPoint, Publisher, and Adobe PDF files. Further, RRM currently has the most online videos and is pleased to be working with our video expert to ensure compliance with all of our videos.

Naturally, RRM has picked up some tips and tricks.

1. Remember that 508 compliance isn't just for visual impairment but also for cognition abilities when making a document compliant.

    For example, Dyslexia is considered a reading, spelling, and writing disability.

1. Don't assume a Microsoft Office or an Adobe PDF document is 508 compliant because the accessibility checker passes everything.

  The document should be:

  * Properly structured (Style settings, tables, etc.)
  * Needs review for reading order, and
  * Color contrast

1. Recommend that the source content be appropriately structured and made compliant before saving it as an Adobe PDF.

  For example: Don't use tables in a Microsoft Word document if the overall goal is design and appearance. Tables in Adobe will require additional work and possibly need to be removed or restructured in the PDF.

1. The user must have a current Pro version of Adobe Acrobat (i.e., Adobe Acrobat Pro DC) to ensure PDF compliance.

  NOTE: There are no additional licensing requirements for Microsoft Office products to perform an accessibility review.

1. When working with a scanned document saved as a PDF, it is often necessary to first use the Scan & OCR tool to Recognize Text.

1. When working with large PDF files, it's often easier to "Extract" the problem page, save the page as a separate file, fix the 508 errors, and lastly, add the page back to the original PDF file.

1. Sometimes weblinks can have two or more "links" embedded on top of each other in a PDF file; remove all but one of the links to clear the error (in most cases).

1. In Adobe, be on the lookout for blank/empty tags to be deleted.

1. Accessible Audio and Video Media

  Pre-recorded:
  * Audio-only content must include transcripts.
  * Video-only content must include an audio description.
  * Videos with audio must include captions and may require an audio description.

  Live:
  * Audio-only content must include live captions or transcripts.
  * Videos with audio must include captions.

### Guidance and resources

#### Law
* [Rehabilitation Act of 1973](https://www.section508.gov/sites/default/files/rehabilitation-act-of-1973-amended-by-wioa.pdf)
* [36 CFR 1194](https://ecfr.federalregister.gov/current/title-36/chapter-XI/part-1194)

#### Department/agency policy
* [375 DM 8 – Section 508 Program and Responsibilities](https://www.doi.gov/elips/browse)

  Provides bureaus and offices with requirements for implementing the law.

#### Training

* Live monthly DOI webinars (DOI employees can register in DOI Talent)
  * [Creating Section 508 Compliant Electronic Documents](https://doitalent.ibc.doi.gov/mod/facetoface/view.php?id=9104)
  * [Creating Section 508 Compliant MS Excel Spreadsheets](https://doitalent.ibc.doi.gov/course/view.php?id=12967)
* [DOI Section 508 Web Site](https://www.doi.gov/ocio/section508)
* [Video-Recordings of Webinars](https://www.doi.gov/ocio/section508/references), plus additional training resources
* [U.S. Access Board](https://www.access-board.gov/)
* The DOI 2020 Digital Week video [Microsoft Accessibility for the Blind](https://doimspp.sharepoint.com/sites/doi-it-enterprise-solutions/SitePages/2020%20DOI%20Digital%20Week%20-%20Videos%20and%20FAQs.aspx)
* ONRR Data Display team [wiki page for creating accessible electronic documents] (ttps://github.com/ONRR/onrr.gov-site/wiki/Accessibility)
* DOI recommended software add-on, [NVDA (Nonvisual Desktop Access)](https://www.microsoft.com/en-us/p/nvda-nonvisual-desktop-access/9nvl6z0tm57d?activetab=pivot:overviewtab)

## Conclusion

We’re steadily making progress towards getting all of our documents 508 compliant. It seemed like an insurmountable challenge, but with a little bit of prioritization and coordination, we’re chipping away at the incompliant debt we had accumulated.
