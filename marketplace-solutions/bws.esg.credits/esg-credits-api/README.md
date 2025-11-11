---
description: >-
  Available operations to set up and run your ESG impact services are divided
  into different sections.
---

# ESG Credits API

Under section **"Taxonomy"** you build your taxonomy structure including connections to UN SDGs and EU Environmental Development Objectives. Taxonomies can be set up with categories and sub categories as well as indicators and super indicators, where super indicators are linked to categories as per the ICMA logic. Taxonomies can be copied across to the following year if the taxonomy is identical or similar.

The section **"Translations"** contains operations to add taxonomy phrases in additional languages, making your ESG impact services multilingual, with alternative languages accessed easily through a simple parameter in your API calls.

Under section **"Currencies"** you can define the currencies that your solution will support. Foreign exchange rates for supported currencies can be set on annual basis (typically average rates).

In the section called **"Frameworks",** you input the category volumes and indicators values which build up your green framework based on your taxonomy. This dataset is consequently used for ESG impact benefit calculations throughout the solution. Frameworks can be made private or public, where in the latter case other tenants using ESG.Credits can access such frameworks.

Under section "**Projects**" you find operations to register green projects and their benefit characteristics in terms of category volumes and indicator values as per your taxonomy. Benefit characteristics of a portfolio of green projects can be consolidataed into a framework. Projects can be made private or public, where in the latter case other tenants using ESG.Credits can access such projects.

Before adding green assets for your customers / investors to see impacts from, you first need to enter the issuers, which is done under section **"Issuers"**. This can be your own franchise or one whose green assets you are re-selling. Issuers can be made private or public, where in the latter case other tenants using ESG.Credits can access such issuers.

Under section **"Assets"**, you add the green assets in scope, and connect them to the relevant framework for ESG impact calculation possibilities. Assets can be made private or public, where in the latter case other tenants using ESG.Credits can access such assets, and also calculate ESG impact benefits for investments in them.

The section **"Investors"** has operations for adding your customers / investors to the ESG.Credits API solution. This includes encryption operations for personal identifiable information. Note: It is possible to make ESG impact calculations without storing customer records in ESG.Credits, why this step can be omitted.

Before actual ESG impact calculations can be made for registered customers / investors, the position taken, or investment made, in a green assets must be registered. This is done under section **"Positions"**. Here you would also specify the term of the position, which also impacts the impact level.

In section **"Portfolio"** you can cluster positions into different portfolios, so that the impact can be calculated for each portfolio as a whole.

Under section **"Impacts"** you find operations for calculating the benefit impact from a particular position, investor, or portfolio. Operations can also support the use case where the investors are not stored in ESG.Credits, when it is only used as a calculation engine.

The **"Blockchain"** section has operations to write and read from the blockchain. This could for instance be certificates of ESG benefit impacts for increased trust and avoidance of impact benefit claim duplication. The blockchain can also be utilized to ensure that green project benefits are not double-counted across the debt capital community.

Finally, the **"Users"** section. Here you find operations for to manage the end users of your client account at BWS.ESG.Credits. It includes the possibility to connect end users to particular investors that are in scope for each user. You can also tie users to certain user groups which you can use to control availability of functionality in your user interface.
