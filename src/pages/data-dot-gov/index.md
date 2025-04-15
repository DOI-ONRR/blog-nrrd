---
title: "Open data in action: ONRR’s journey to Data.gov"
authors:
- Lindsay Goldstein
- Christine Thomas
excerpt: "We recently published information describing ONRR’s public datasets on Data.gov to enhance transparency and accessibility. This blog post walks through our process to make our revenue data more discoverable."
tags:
- digital service delivery
- open data
- open government
- policies and regulations
date: "2025-05-01"
---

The Office of Natural Resources Revenue (ONRR) is committed to open data and transparency by making our data accessible to the public. This commitment aligns with federal open data policies, including the [OPEN Government Data Act](https://data.gov/open-gov/) and the [Information Quality Act](https://www.doi.gov/ocio/policy-mgmt-support/information-and-records-management/iq). By adhering to these policies, we ensure that our data is high-quality, objective, and valuable for informing public discussions and decision-making.

Through [revenuedata.doi.gov](https://revenuedata.doi.gov/) (called the NRRD), ONRR provides interactive visualizations, data tables, and downloadable datasets. The NRRD helps our [stakeholders](https://github.com/DOI-ONRR/nrrd/wiki/Product-framing) better understand how natural resources and their revenues are managed in the United States.

The Open Data, Design, and Development (ODDD) team strives to continuously enhance access to ONRR’s data. To expand access and ensure ONRR’s data is discoverable with other federal datasets, the ODDD team published metadata describing [ONRR’s NRRD datasets](https://catalog.data.gov/dataset?publisher=Office%20of%20Natural%20Resources%20Revenue) on [Data.gov](https://data.gov/). Data.gov is the United States federal government’s clearinghouse for open data.

In this blog post, we’ll discuss our process of getting ONRR’s datasets on Data.gov, including collaborating with Department of Interior’s (DOI) Enterprise Data Inventory (EDI), developing metadata, and troubleshooting challenges.

## Collaborating with DOI’s Enterprise Data Inventory

Data.gov aggregates metadata from inventories maintained by each department. Since ONRR is an office within DOI, our first step toward publishing metadata to Data.gov was to collaborate with DOI’s Enterprise Data Inventory (EDI) team. DOI EDI is a linked data inventory that collates metadata describing all of DOI’s data assets from all DOI bureaus and offices. It provides a comprehensive listing of data assets that are generated, managed, and used to support DOI missions. We upload our data to DOI EDI first, then it makes its way to Data.gov. 

![Conceptual diagram of metadata flow between catalogs. The bureau or office contributes their metadata to DOI EDI, which is then published to data.gov. There is also a metadata catalog for geospatial data (only) called GeoPlatform.gov](Image1.PNG)
*Conceptual diagram of metadata flow between catalogs. The bureau or office contributes their metadata to DOI EDI, which is then published to data.gov. There is also a metadata catalog for geospatial data (only) called GeoPlatform.gov*

Each DOI bureau/office has a Data Inventory Steward. The Data Inventory Steward is responsible for ensuring all data assets within the bureau/office are available to DOI EDI and that all metadata records meet standard requirements. We reached out to ONRR’s Data Inventory Steward – Jennifer Walter – to initiate the process. Jennifer helped us get access to DOI EDI’s SharePoint site that contained introductory and technical resources and requested new user accounts for us to access the DOI EDI application. She also helped us understand the metadata requirements that each dataset must contain, and how the metadata file must be structured. She provided templates populated with example metadata content in the required structure. Data.gov and DOI EDI require metadata conforming to the DCAT-US Schema v1.1.

We learned that we needed to compile the required metadata for every dataset, and any optional metadata attributes we determined necessary for describing our datasets. We would then take the compiled metadata and write a single JSON (JavaScript Object Notation) file. Once the JSON file is hosted on a publicly accessible location, like the NRRD site, DOI EDI can access the JSON file and automatically import the metadata it contains into the DOI EDI on a recurring (nightly) schedule. This is called “harvesting” (to DOI EDI) from a “harvest endpoint” (our JSON file). DOI EDI then automatically transmits metadata to Data.gov on a recurring (nightly) schedule.

## Developing metadata and creating the JSON file

Metadata makes datasets discoverable, searchable, understandable, and useable. Well-organized, structured metadata allows Data.gov to index and categorize datasets across the federal government. Both DOI EDI and Data.gov use standardized metadata attributes. We worked with Jennifer to understand what these metadata attributes were and what information was needed for each one. 

We also had significant help from our former UX designer, Erin Elzi. Erin was previously a metadata librarian and provided a wealth of knowledge on this subject. She helped us understand the metadata process and structure our JSON file. We greatly appreciate her contributions to this project!

### Starting in Excel

In total, we had 14 datasets that we wanted to publish on Data.gov. To keep all the metadata organized, we created an Excel document. Each dataset had its own tab within the Excel. For each dataset, we listed the required metadata attribute, the information needed per attribute, and then the syntax required to document the metadata value in the JSON file. Once we developed this information, we sent the JSON file to Jennifer to review. She helped us ensure that the information we provided met DOI EDI and Data.gov metadata requirements.

![Screen capture of our metadata Excel sheet. Each dataset had a separate tab within the Excel. For each dataset, we listed the required metadata attribute, the information needed per attribute, then syntax required for the JSON file.](Image2.PNG)
*Screen capture of our metadata Excel sheet. Each dataset had a separate tab within the Excel. For each dataset, we listed the required metadata attribute, the information needed per attribute, then syntax required for the JSON file.*

### Structuring the JSON in Word

Once we finalized the metadata within the Excel, Erin helped us structure the JSON file. We decided to first write the JSON structure within a Word document. By writing in Word, we were able to use color-coding, highlighting, and comments to navigate the document. We used specific colors to call out which text should (or should not) be altered between the entire collection and individual datasets. Highlights helped us identify information critical to a bug workaround (further explained later in this blog). We also used comments to call out the start of a new dataset and for other useful instructions. 

Because the metadata for all 14 datasets reside in this single JSON file, the resulting Word document was about 40 pages. Having this Word version helped us keep all the information navigable and easier to update if changes were needed.

![Screen capture of our draft JSON text within a Word document. We used color-coding, highlighting, and comments to help us navigate this 40-page document.](Image3.PNG)
*Screen capture of our draft JSON text within a Word document. We used color-coding, highlighting, and comments to help us navigate this 40-page document.*

## Troubleshooting data submission issues

Once we completed our [JSON structure and file](https://revenuedata.doi.gov/onrr-data.json), we were ready to discuss uploading our metadata to DOI EDI with Jennifer. 
To automatically import the metadata in our JSON file into DOI EDI, the DOI EDI developer had to set up our JSON file as a new “harvest endpoint”, a publicly accessible URL for a file containing metadata to be added to DOI EDI. The JSON was first added to the DOI EDI Staging environment. Once we confirmed the metadata in our JSON file was successfully populating DOI EDI-Staging, Jennifer submitted a ticket approving publishing our JSON to the DOI EDI Production environment. Metadata in DOI EDI Production is automatically published to Data.gov. 

While ONRR’s metadata successfully published into both the DOI EDI Staging and Production environments, it failed to import into Data.gov.

After some investigation, we realized that DOI EDI had a bug for metadata published through manual file upload or automatic harvest endpoint, and we needed to apply a workaround to our metadata for it to successfully publish to Data.gov. We did some troubleshooting before our first successful metadata submission.

### DOI EDI identifier bug
We learned from Jennifer that DOI EDI had a known bug where an identifier was not getting assigned by DOI EDI to a dataset’s metadata record if one was not provided in our source file. This bug only affects metadata added to DOI EDI by manually importing a JSON file or automatically importing metadata from a harvest endpoint process. The bug caused Data.gov to reject ONRR’s DOI EDI’s metadata records, since “identifier” is a required metadata attribute in the DCAT-US Schema v1.1.

Since DOI EDI could still assign identifiers to manually created metadata records, Jennifer created instructions for manual identifier creation and assignment workaround. For each dataset, we had to create a “shell” record within DOI EDI. We would only add the dataset title and publisher to the “shell” record. Saving this record resulted in DOI EDI generating the identifiers for the dataset and assigning them to our metadata record in DOI EDI. We then had to copy over these identifiers into our JSON file. 

We had to do the workaround process for each dataset. To keep the creation of these “shell” records manageable, we decided to incrementally add our datasets to the JSON file one at a time. 

![Screen capture of a DOI EDI metadata record, showing the identifiers created by the shell record in the bottom right corner.](Image4.PNG)
*Screen capture of a DOI EDI metadata record, showing the identifiers created by the shell record in the bottom right corner.*

### JSON validators

After we incorporated the DOI EDI identifiers into our JSON file, we wanted to validate our JSON before uploading. For a JSON file to successfully import into Data.gov, it needs to contain all the required metadata attributes and it must be structured as a valid JSON file. If both conditions are not met, the JSON will be rejected and won’t import into Data.gov. 

We tested our JSON with several validators, including [Data.gov’s data catalog validator](https://catalog.data.gov/dcat-us/validator). The data.gov validator’s output said that each dataset was missing a required property, and we thought we needed to add it to our JSON. Instead, we learned that if this was the only error present, our data would still upload to Data.gov successfully. We made sure to check with multiple validators to be sure that our JSON passed their requirements before uploading. 

![Screen capture of Data.gov's JSON validator. Even though the validator says each dataset has a missing "programCode", this JSON is valid and uploaded successfully.](Image5.PNG)
*Screen capture of Data.gov's JSON validator. Even though the validator says each dataset has a missing "programCode", this JSON is valid and uploaded successfully.*

## Metadata Catalog Publishing process

After validating our JSON, we were finally ready to upload it to NRRD for publishing to the DOI EDI and Data.gov catalogs! Here are the steps we take to publish our metadata first to DOI EDI, then to Data.gov.

### Publishing to DOI EDI

Since ONRR’s datasets are published first DOI EDI before appearing on Data.gov, we followed these steps:

* Create the “shell” record in DOI EDI and update the JSON with the identifiers
* The JSON is hosted on the NRRD site:
    * We create a GitHub Pull Request (PR) to upload the new JSON
    * When updating the JSON, we first do a PR to remove the old file, then a second PR to upload the new file
    * Verify that the updated JSON file is live on the NRRD site
    * Do an additional JSON validator check on the newly live file
* DOI EDI’s system automatically processes the JSON file
* Usually with 24 hours, the EDI “shell” record will be populated with all the metadata in our JSON file
    * This confirms that datasets were successfully ingested by DOI EDI and assigned proper metadata records

### Harvesting by data.gov

Once DOI EDI harvests the JSON, DOI EDI schedules the JSON to be automatically harvested by Data.gov. This process is designed to occur daily, meaning our datasets would appear on Data.gov within 24 hours. 

We knew from Jennifer that sometimes delays or errors could occur, depending on the timing of when our metadata is harvested into DOI. We monitored the status closely. Through incrementally updating the JSON to include more datasets, we learned that the DOI EDI record would update within 24 hours, but it would usually take 48 hours to see the new dataset on Data.gov. If we completed the upload process after 8am MTN, we noticed that it would usually take longer for Data.gov to update.

We made sure to check Data.gov’s [ONRR publisher page]( https://catalog.data.gov/dataset?publisher=Office%20of%20Natural%20Resources%20Revenue) daily to confirm that the upload process completed and to make sure the datasets appeared as expected. After confirming that everything appeared correctly, we were officially live on Data.gov!

## Conclusion

Publishing ONRR’s datasets on Data.gov was a collaborative effort that required coordination with DOI’s EDI team, meticulous metadata development, and troubleshooting challenges. By successfully completing this process, we made our data more discoverable and accessible with other federal datasets. This aligns with ONRR’s commitment to open data and transparency. 

We encourage you to explore [ONRR’s datasets on Data.gov]( https://catalog.data.gov/dataset?publisher=Office%20of%20Natural%20Resources%20Revenue). If you have questions about our data publishing process or feedback on how we can improve access to our datasets, we’d love to hear from you! Feel free to reach out and share your thoughts.
