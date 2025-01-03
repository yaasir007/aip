<template>
	<div class="flex h-screen bg-gray-100">
		<!-- Sidebar Navigation -->
		<nav class="w-64 bg-white shadow-md overflow-y-auto">
			<div class="p-5">
				<h2 class="text-xl font-bold mb-5">Contents</h2>
				<ul class="space-y-2">
					<li v-for="(section, index) in sections" :key="index">
						<button
							@click="scrollToSection(section.id)"
							class="w-full text-left py-2 px-4 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
						>
							{{ section.title }}
						</button>
					</li>
				</ul>
			</div>
		</nav>

		<!-- Main Content -->
		<div class="flex-1 p-10 overflow-y-auto">
			<h1 class="text-3xl font-bold mb-6">Terms and Conditions & Privacy Policy</h1>

			<section v-for="(section, index) in sections" :key="index" :id="section.id" class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">{{ section.title }}</h2>
				<div v-html="section.content"></div>
			</section>
		</div>

		<!-- Back to Top Button -->
		<button
			@click="scrollToTop"
			class="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
			:class="{ 'opacity-0': !showBackToTop, 'opacity-100': showBackToTop }"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
			</svg>
		</button>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sections = ref([
	{
		id: 'introduction',
		title: '1. Introduction',
		content: `
      <p>Allinclusive.properties is hereinafter referred to as the "Website". The Website is a
      hosting platform for real estate property adverts. It is a website which is developed
      and managed by All Inclusive Pro Marketing Ltd, a Private Limited Company which
      registered office is located at CNR JOSEPH RIVIERE STREET & DAUPHINE
      STREET BELFORT TOWER, OFFICE A2 / LEVEL 4 PORT LOUIS MAURITIUS.
      BRN : C24212702 – aip@allinclusive.properties tel.</p>
      <p>1.1. These Terms and Conditions include our Privacy Policy and are collectively referred to
      as "these Terms".</p>
      <p>1.2. These terms represent the whole agreement between you and us.</p>
      <p>1.3. By using this Website, you are agreeing to these Terms. Please read them carefully.</p>
      <p>1.4. You should make proper use of the Website and the system of ads publishing.</p>
      <p>1.5. You may print and keep a copy of these Terms. They represent a legal agreement
      between us and cannot be unilaterally modified by you without our written consent. We may
      change these Terms at our discretion by changing them on the Website. Only the displayed
      version of these Terms remain applicable whenever you use this Website.</p>
    `
	},
	{
		id: 'intellectual-property',
		title: '2. Intellectual Property Rights',
		content: `
      <p>a) All content on this website is protected by copyright, trademark, and other
      intellectual property rights.</p>
      <p>b) You may only copy or store content for personal, non-commercial use, as long as
      you keep all copyright and proprietary notices intact.</p>
      <p>c) It is strictly prohibited to use this website for anything other than viewing
      information, making orders, or sharing with friends. You cannot copy, modify,
      republish, store, or distribute any material without our prior written consent.</p>
      <h3>2.1 Use of Trademarks</h3>
      <p>The trademarks, logos, and service marks displayed on this website are our
      registered trademarks. You are not allowed to use or copy them without our prior
      written consent.</p>
      <h3>2.2. Links to Third-Party Websites</h3>
      <p>This website may contain links to third-party websites (linked websites) which we do
      not control. We are not responsible for the content or accuracy of these websites. If
      you decide to visit any linked website, you do so at your own risk.</p>
      <h3>2.3. Property Listings</h3>
      <p>The property details provided on this website come from affiliated estate agents and
      individuals. We have not independently verified the accuracy of this information and
      make no guarantees regarding its completeness or accuracy. If you rely on this
      information, you do so at your own risk.</p>
    `
	},
	{
		id: 'obligations-and-conduct',
		title: '3. Your Obligations and Conduct',
		content: `
      <h3>3.1. Responsibility for Your System</h3>
      <p>You acknowledge and agree that you are solely responsible for ensuring that your
      computer system meets the necessary technical specifications required to access
      and use this website. You further agree that your system must be compatible with
      this website and that you will bear all costs associated with accessing the website,
      including but not limited to, internet service provider charges, hardware, and software
      requirements.</p>
      <h3>3.2. Prohibited Activities</h3>
      <p>a) Misuse of the System: You agree not to misuse or disrupt the operation of the
      website or any services provided. Specifically, you shall not engage in any activities
      that would interfere with or disrupt the proper functioning of the website, including
      hacking, circumventing security measures, or attempting to disable or degrade the
      website's performance in any way.</p>
      <p>b) Automated Programs: You are prohibited from using any automated systems,
      software, or programs (including, without limitation, spiders, web crawlers, or other
      similar technologies) to access, extract, or collect information from the website,
      unless such automated systems are compliant with the website's guidelines and are
      identified as a "Permitted Program" in accordance with the Robots Exclusion
      Protocol. Any attempt to use automated programs that do not comply with these
      guidelines constitutes an unauthorized access to our system and will be treated as a
      breach of these terms.</p>
      <p>c) Linking and Framing: You are prohibited from including any links to this website
      on any other website without prior written consent from us. This includes, but is not
      limited to, the inclusion of "deep links" to any specific page other than the homepage
      of the website. You must not frame or display any part of this website within another
      site without our express permission.</p>
      <h3>3.3. Content and Communication</h3>
      <p>a) Inappropriate Content: You shall not upload, post, or distribute any content that
      is offensive, defamatory, unlawful, obscene, or otherwise inappropriate. Additionally,
      you shall not solicit or advertise commercial services in any form of communication,
      whether through forms, emails, or other means, without prior authorization.</p>
      <p>b) Data Replacement in Advertisements: You are strictly prohibited from replacing
      the data of an advertisement with that of another property or any other unrelated
      information. Any attempt to manipulate or misrepresent advertisement data will be
      considered a violation of these terms and may result in immediate suspension or
      termination of your access to the website.</p>
      <h3>3.4. Liability for Third-Party Services</h3>
      <p>In the event you use a third-party gateway to publish advertisements or content on
      the website, you agree that you are solely responsible for ensuring that such gateway
      complies with the website's technical specifications and requirements. You further
      agree that any failure to comply with these specifications shall be your sole
      responsibility, and we shall not be liable for any errors or issues arising from the use
      of such third-party services.</p>
    `
	},
	{
		id: 'registration',
		title: '4. Registration',
		content: `
      <h3>4.1. Registration Process</h3>
      <p>In order to access property details and other features on this website, you are
      required to submit a completed registration form. We reserve the absolute right to
      accept or reject any application for registration at our sole discretion, without
      obligation to provide reasons. Upon successful acceptance of your application, we
      will send you a confirmation email containing your account ID and password. You
      agree to provide accurate and complete information during the registration process.</p>
      <h3>4.2. Single User Registration</h3>
      <p>a) Each registration is valid for a single user only. You may not share your username,
      account ID, password, or any other registration credentials with any other person or
      permit multiple users to access the website through a single registration. Any attempt
      to share or distribute your account credentials will result in immediate suspension or
      termination of access to the website.</p>
      <p>b) By registering, you confirm that the information you provide is accurate, complete,
      and up to date. You agree to update your account information promptly to ensure its
      accuracy.</p>
      <h3>4.3. Account Security and Confidentiality</h3>
      <p>a) You acknowledge that you are solely responsible for maintaining the confidentiality
      and security of your account credentials, including your account ID and password.
      You must take all reasonable precautions to protect the security of your account
      credentials and prevent unauthorized access.</p>
      <p>b) You agree to immediately notify us of any unauthorized use of your account or any
      other breach of security. We shall not be held liable for any loss or damage arising
      from your failure to maintain the confidentiality of your account details or from any
      unauthorized access to your account.</p>
      <p>c) You acknowledge that you will be held fully responsible for all actions taken under
      your account, whether or not authorized by you.</p>
    `
	},
	{
		id: 'account-suspension',
		title: '5. Account Suspension or Termination',
		content: `
      <p>We reserve the right to suspend or terminate your account at any time, without
      notice, in the event of a breach of these terms and conditions, including but not
      limited to unauthorized use of your account or sharing your account credentials with
      third parties.</p>
    `
	},
	{
		id: 'disclaimer',
		title: '6. Disclaimer',
		content: `
      <p>6.1. The exchange rates provided by the currency converter on this website are for
      informational purposes only and are indicative in nature. These rates are not intended
      to reflect the actual rates applied by banks, financial institutions, or any other entities
      conducting currency exchange transactions. Users are strongly advised to contact their
      respective bank, financial institution, or other relevant entities to obtain the most
      current and accurate exchange rates before engaging in any firm or legally binding
      transactions.</p>
      <p>6.2. By accessing and using the currency converter, you acknowledge and agree that
      the website and its operators shall not be held liable for any loss, damage, or
      expenses, whether direct, indirect, incidental, special, or consequential, arising from
      or in connection with the use of the provided exchange rates, or any reliance placed
      upon them. This includes, but is not limited to, any financial losses or other damages
      incurred as a result of inaccurate or outdated exchange rate information.</p>
    `
	},
	{
		id: 'price-of-properties',
		title: '7. Price of Properties Advertised',
		content: `
      <p>The prices, photos, and descriptions of properties displayed on this website are
      provided for informational purposes only. All information, including property details,
      prices, and images, has been supplied by third-party agencies and individual sellers.
      Such information is subject to change without prior notice. Allinclusive.properties
      expressly disclaims any liability for errors, misinterpretations, or misuse of the
      advertisements.</p>
      <p>The purchase or rental of any property listed on the website cannot be completed
      online. Transactions will be governed by a contract entered into between the agency
      or individual seller and the purchaser, which will outline the terms and conditions
      specific to the transaction.</p>
      <p>All transactions are subject to the execution of a formal agreement between the
      purchaser and the seller (agency or individual), which shall include the full terms and
      conditions of the sale or rental. The final price of any property is solely determined by
      the seller and may be subject to negotiation.</p>
      <p>While every effort has been made to ensure the accuracy and reliability of the
      information provided, the website may contain inaccuracies or references to
      properties that are no longer available. The website shall not be held liable for any
      such inaccuracies or for the non-availability of properties listed.</p>
    `
	},
	{
		id: 'no-warranty',
		title: '8. No Warranty',
		content: `
      <p>While we make reasonable efforts to ensure that any material available for
      downloading from this Website is free from contamination, including but not limited
      to viruses, malware, or similar harmful code, Allinclusive.properties does not warrant,
      guarantee, or represent that such material will be free from infection or any other
      defects.</p>
      <p>8.1. Due to the inherent nature of software and the Internet, we do not warrant that
      your access to, or the operation of, this Website will be uninterrupted, error-free, or
      without delay. We shall not be held liable for any failure to process your information
      or for any interruptions, errors, or delays in accessing the Website due to
      circumstances beyond our reasonable control, including but not limited to technical
      malfunctions, force majeure events, or third-party service disruptions.</p>
      <p>8.2. The information provided on this Website is for general informational purposes
      only and does not constitute specific advice. While we strive to ensure that all content
      on the Website is accurate, complete, and up-to-date, we make no warranties,
      representations, or guarantees regarding the accuracy, completeness, or reliability of
      the information provided. Users are advised to independently verify the information
      before relying on it.</p>
      <p>8.3. We make no warranty or representation that this Website, or the information
      displayed on it, complies with any laws or regulations outside of the jurisdiction of
      Mauritius.</p>
    `
	},
	{
		id: 'restriction',
		title: '9. Restriction from the Website',
		content: `
      <p>We reserve the right, at our sole discretion, to restrict, suspend, or permanently block
      a user's access to this Website and/or any and all elements of the services provided
      herein. This may be done on a temporary or permanent basis, and may apply to the
      entire Website or specific sections, without prior notice.</p>
      <p>In the event that a user is restricted or blocked from accessing the Website, the user
      shall be notified of such restriction. The user is expressly prohibited from attempting
      to access or use the Website under any other name, account, or through any other user
      account, whether directly or indirectly.</p>
    `
	},
	{
		id: 'liability',
		title: '10. Liability',
		content: `
      <h3>10.1. Exclusion of Liability</h3>
      <p>Nothing in these Terms will be deemed to exclude our liability to you for death or personal injury arising from our negligence, or for fraudulent misrepresentation.</p>
      <h3>10.2. Limitation of Liability</h3>
      <p>Subject to Clause 10.1, we shall not be liable for any failure, error, or unavailability of the
      Website, software, or Internet access, nor for any circumstances beyond our reasonable
      control that may prevent or delay access to the Website.</p>
      <h3>10.3. Account Security</h3>
      <p>Subject to Clause 10.1, we do not accept responsibility for any loss or damage to your account
      ID, password, or other account-related information due to system breakdowns, errors, power
      outages, or any other issues arising from or affecting your computer system.</p>
      <h3>10.4. Automated Program Use</h3>
      <p>We may implement security measures to prevent unauthorized automated access to our
      Website. Any use of automated programs to access or interact with the Website is strictly
      prohibited and is done at the user's own risk. Subject to Clause 10.1, we shall not be held
      liable for any consequences arising from such unauthorized use.</p>
      <h3>10.5. Exclusion of Liability for Loss</h3>
      <p>Subject to Clauses 10.1 to 10.3, we exclude all liability for loss or damage, including but not
      limited to:</p>
      <p>10.5.1. Any indirect, consequential, special, or punitive loss, damage, costs, or expenses;</p>
      <p>10.5.2. Loss of profit;</p>
      <p>10.5.3. Loss of business;</p>
      <p>10.5.4. Loss of reputation;</p>
      <p>10.5.5. Depletion of goodwill;</p>
      <p>10.5.6. Loss of, damage to, or corruption of data.</p>
      <h3>10.6. Contact Forms and Third-Party Communication</h3>
      <p>When you use the "contact forms" on this Website to inquire about properties, your details
      (including email address) will be sent directly to the relevant real estate agent or property
      developer. We do not accept any liability for subsequent communications or interactions you
      may have with the real estate agent or developer. We are not responsible for any direct or
      indirect consequences resulting from such communications.</p>
    `
	},
	{
		id: 'applicable-law',
		title: '11. Applicable Law and Jurisdiction',
		content: `
      <h3>11.1. Governing Law</h3>
      <p>These Terms and Conditions shall be governed by, and construed in accordance with, the
      laws of the Republic of Mauritius, without regard to its conflict of law principles.</p>
      <h3>11.2. Exclusive Jurisdiction</h3>
      <p>Any dispute, claim, or action arising out of, under, or in connection with these Terms and
      Conditions, including any questions regarding their existence, validity, interpretation, or
      termination, shall be subject to the exclusive jurisdiction of the courts of Mauritius. The user
      irrevocably submits to the jurisdiction of the courts in Mauritius and waives any objection
      based on forum non conveniens or other reasons related to the convenience of the forum.</p>
      <h3>11.3. Dispute Resolution</h3>
      <p>In the event of any dispute arising from or in connection with these Terms, the parties may
      attempt to resolve the dispute through informal negotiations. Should such informal attempts
      fail, the dispute shall be resolved exclusively by the courts in Mauritius.</p>
    `
	},
	{
		id: 'notices',
		title: '12. Notices',
		content: `
      <h3>12.1. User to Website</h3>
      <p>All notices, requests, or communications to us must be forwarded via the Contact Form
      available on this Website Allinclusive.properties.</p>
      <h3>12.2. Website to User</h3>
      <p>All notices, communications, or correspondence from us to you will be sent to the email
      address you provided during your registration on the Website. It is your responsibility to
      ensure that the email address provided is accurate and up-to-date. We will not be liable for
      any issues arising from the failure to receive notices due to incorrect or outdated contact
      information.</p>
      <h3>12.3. Deemed Receipt</h3>
      <p>All notices sent by email shall be deemed to have been received upon transmission,
      provided that when the email is received on a national holiday, or on a Saturday or Sunday,
      such notice will be deemed received on the next business day following the day of receipt.</p>
      <h3>12.4. Acknowledgment of Receipt</h3>
      <p>By using this Website, you acknowledge and agree that any notice sent by email will be
      deemed effective upon the time of transmission, except where the notice is sent on a non-
      business day, in which case it will be deemed received on the next business day.</p>
    `
	},
	{
		id: 'customer-feedback',
		title: '13. Customer Feedback and Quality',
		content: `
      <h3>13.1. Customer Feedback System</h3>
      <p>We are committed to ensuring that all customer feedback is handled fairly, consistently, and
      in a manner that is properly documented. We value your input and encourage you to provide
      suggestions or comments that may assist us in improving the quality of our services.</p>
      <h3>13.2. Submission of Feedback</h3>
      <p>Should you wish to provide feedback or have any suggestions regarding our services,
      please send them to us using one of the following methods:</p>
      <p>Email: aip@allinclusive.properties</p>
      <h3>13.3. Acknowledgment of Feedback</h3>
      <p>We aim to acknowledge all customer feedback within three (2) working days of receipt. Our
      team will review your feedback thoroughly, and we will take the necessary steps to address
      any concerns or suggestions you may have.</p>
      <h3>13.4. Phone Call Recording</h3>
      <p>Please be advised that phone calls directed to our advertisers or representatives may be
      recorded for training, quality control, and service improvement purposes. By contacting
      us via phone, you consent to the recording of such calls for the stated purposes.</p>
    `
	},
	{
		id: 'general',
		title: '14. General',
		content: `
      <h3>14.1. Amendment of Content</h3>
      <p>We reserve the right, at our sole discretion, to modify, update, or amend the content of this
      Website, including but not limited to advertisements, property listings, and any other related
      materials, at any time without prior notice. Any such modifications or updates will be subject
      to the terms and conditions outlined herein, unless we notify you otherwise.</p>
      <h3>14.2. Suspension or Discontinuation of Website Functions</h3>
      <p>We may, at our discretion, temporarily or permanently suspend or discontinue any aspect of
      the functionality of this Website, including, without limitation, your access to or use of the
      Website or specific features or services offered. Such actions may be taken for
      maintenance, upgrades, security purposes, or for any other reason deemed necessary.</p>
      <h3>14.3. Effect of Amendments</h3>
      <p>Unless expressly stated otherwise, any amendments, updates, or additions to the content or
      functionality of this Website will be governed by these Terms and Conditions. By continuing
      to access or use this Website after any changes have been made, you agree to be bound by
      the revised terms.</p>
    `
	},
	{
		id: 'contractual-agreement',
		title: '15. Contractual Agreement',
		content: `
      <h3>15.1. Entire Agreement</h3>
      <p>These Terms and Conditions represent the entire agreement between you and us
      concerning your use of this Website and any services provided herein. You acknowledge
      that you have not entered into this agreement in reliance on any representation, warranty, or
      promise made by us, except for those expressly stated in these Terms, and excluding any
      fraudulent misrepresentation.</p>
      <h3>15.2. Severability</h3>
      <p>If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of
      competent jurisdiction, such provision shall be deemed severed from these Terms, and the
      remaining provisions shall continue in full force and effect. The invalidity or unenforceability
      of any provision shall not affect the validity or enforceability of any other provision of these
      Terms.</p>
      <h3>15.3. Waiver</h3>
      <p>No waiver by either party of any breach or default under these Terms shall be deemed a
      waiver of any subsequent breach or default of the same or any other provision. A waiver
      must be in writing to be effective. A failure or delay in the exercise of any right, remedy, or
      power under these Terms shall not operate as a waiver of such right, remedy, or power, nor
      shall any single or partial exercise of any right, remedy, or power preclude any other or
      further exercise thereof.</p>
      <h3>15.4. Assignment and Transfer</h3>
      <p>You may not assign, transfer, or sub-license any rights, benefits, interests, or obligations
      under these Terms without our prior written consent. Any attempt to assign or transfer any
      part of this agreement in violation of this clause will be null and void.</p>
    `
	},
	{
		id: 'use-as-individual',
		title: '16. Use of the Website as an Individual',
		content: `
      <h3>16.1. Eligibility for Advertisement Publication</h3>
      <p>To utilize the advertisement publication services offered by this Website, you must meet the
      following criteria:</p>
      <ul>
        <li>Ownership or Authorization: You must be the lawful owner of the property you wish
        to advertise, or a duly authorized non-professional agent acting on behalf of the
        property owner, with full authority to sell or rent the property. You must not act as an
        "agent commercial" under the Mauritian Code de Commerce, which would otherwise
        make you subject to specific legal obligations governing commercial agents.</li>
        <li>Voluntary Nature: Your use of the Website's services must be voluntary and not in a
        commercial capacity on behalf of the property owner or any third party.</li>
      </ul>
      <h3>16.2. Account Creation and Accuracy of Information</h3>
      <p>You are required to create an account on the Website by providing accurate, complete, and
      up-to-date information at the time of registration. You acknowledge and agree to keep this
      account information updated as required to ensure its ongoing accuracy.</p>
      <h3>16.3. Advertisement Submission Process</h3>
      <p>Once your account has been successfully created, you must:</p>
      <ul>
        <li>Complete the advertisement description form in a clear, precise, and truthful manner.</li>
        <li>Select a publication plan (pricing and duration) that suits your needs and remit the
        total payment for the chosen service.</li>
      </ul>
      <h3>16.4. Limitations on Advertisement Publication</h3>
      <p>You may only submit a single advertisement per property listing and must adhere to the
      specified duration for the advertisement as outlined during the submission process. Failure
      to comply with these terms may result in the removal of the advertisement from the Website,
      at our discretion.</p>
    `
	},
	{
		id: 'advert-requirements',
		title: '17. Advert Requirements',
		content: `
      <h3>17.1. Compliance with Legal and Regulatory Obligations</h3>
      <p>Your advertisement must comply with all relevant legal and regulatory obligations, including
      but not limited to the requirements set forth under applicable property laws and consumer
      protection standards. Specifically, the advertisement must:</p>
      <ul>
        <li>Detailed Description: Provide a thorough and accurate description of the property,
        including its location, physical composition (e.g., number of rooms, size, etc.), its
        parts (e.g., garden, pool, garage), and any furnishings included. All information must
        align with the factual details of the property and meet the required standards of clarity
        and transparency.</li>
        <li>Accuracy in Representation: The advertisement must accurately represent the
        property as it exists and cannot mislead potential buyers or renters regarding the
        nature or condition of the property.</li>
      </ul>
      <h3>17.2. Content Restrictions and Permissions</h3>
      <p>The advertisement may include only images and/or plans directly related to the property
      being advertised, such as photographs or blueprints. It must also:</p>
      <ul>
        <li>Consistency in Property Presentation: Ensure that the advertisement consistently
        presents the same property and its components for the entire duration of the
        publication. For example, you may not alter the advertisement's content to promote
        different sections of the property (e.g., switching from advertising the entire villa to
        advertising just a portion, such as the first storey, without prior notification).</li>
        <li>Rates Disclosure: Clearly display the rates for the rental or sale of the property.
        Under no circumstances should the advertisement feature misleading rates, such as
        offering an unrealistic "zero" or "very low" price, which could be construed as
        deceptive or unlawful.</li>
        <li>Intellectual Property Compliance: Ensure that any images, photographs, plans, or
        other content used in the advertisement are either owned by you or for which you
        hold all necessary rights, licenses, or authorizations, including but not limited to
        reproduction rights, royalties, and permissions for use. You must not infringe on any
        intellectual property rights in the publication of your ad.</li>
      </ul>
      <h3>17.3. Ad Maintenance and Updates</h3>
      <p>Your advertisement must be kept updated regularly to ensure that all information remains
      accurate, complete, and reflective of the property's status. Failure to maintain the
      advertisement may result in its removal from the Website at our discretion.</p>
      <h3>17.4. Uniqueness of Advertisements</h3>
      <p>Each property may only have one advertisement listing at any given time. Duplicate listings
      offering identical properties at the same price are strictly prohibited. You may not create
      multiple ads for the same property with similar or identical content.</p>
    `
	},
	{
		id: 'use-as-professional',
		title: '18. Use of the Website as a Real Estate Professional',
		content: `
      <h3>18.1. Eligibility for Use</h3>
      <p>To use the advertisement publication services provided by the Website, you must meet the
      following conditions:</p>
      <ul>
        <li>Professional Status: You must be a licensed real estate professional, including
        estate agents or property developers, who is expressly authorized by the property
        owner to advertise their property through the Website and to seek potential
        customers on their behalf.</li>
        <li>Authorization to Advertise: You must have written or documented proof of
        authorization from the property owner to represent their property for sale, rental, or
        other services via the Website.</li>
      </ul>
      <h3>18.2. Account Creation and Information Accuracy</h3>
      <p>To access the advertising services, you must:</p>
      <ul>
        <li>Create an Account: Establish an online account on the Website by providing
        complete and accurate personal or company details, including any required
        documentation verifying your professional status and authorization to advertise
        properties on behalf of others.</li>
        <li>Maintain Accuracy: You must ensure that all details provided in your account,
        including business registration information, contact details, and advertising
        credentials, are true, complete, and regularly updated.</li>
      </ul>
      <h3>18.3. Ad Description Accuracy</h3>
      <p>You are required to:</p>
      <ul>
        <li>Complete Advertisement Forms: Accurately fill out all fields in the advertisement
        description forms, ensuring the information provided is correct, detailed, and in
        accordance with the property being advertised. This includes but is not limited to,
        accurate property descriptions, pricing information, and any terms related to the sale
        or rental of the property.</li>
      </ul>
    `
	},
	{
		id: 'privacy-policy',
		title: 'Privacy Policy',
		content: `
      <h3>1. Introduction</h3>
      <p>We are committed to protecting your privacy and the confidentiality of your personal
      information. This Privacy Policy outlines how we collect, use, store, and protect your
      personal data when you use our Website and any services we offer. By accessing or using
      this Website, you agree to the terms of this Privacy Policy. This updated Privacy Policy is
      effective as of 25 December 2024.</p>
      <p>If you have any queries regarding this policy, our use of your personal information, or wish to
      unsubscribe from our communications, please contact us at aip@allinclusive.properties</p>

      <h3>2. Information Collection</h3>
      <p>We collect personal information from you when you use our Website, including but not
      limited to:</p>
      <ul>
        <li>Personal details (such as name, address, email address, phone number)</li>
        <li>Transactional data (such as details of your purchases, rental agreements, or other
        transactions)</li>
        <li>Usage data (such as how you interact with the Website, the frequency of your visits,
        and other behavioral data)</li>
      </ul>

      <h3>3. Use of Personal Information</h3>
      <p>In compliance with the Data Protection Act 2004, we use the personal information we collect
      for the following purposes:</p>
      <ul>
        <li>Communication: To pass on your messages and inquiries to our advertisers or real
        estate agents, assisting them in providing more personalized services to you.</li>
        <li>Third-Party Services: To provide relevant information and services to third parties
        as part of our business model, in accordance with applicable laws.</li>
        <li>Improvement of Services: To analyze and improve the features, functionality, and
        performance of our Website and services.</li>
        <li>Marketing and Promotion: To support our marketing campaigns, promotions, and
        advertisements aimed at offering you products and services that may be of interest.</li>
        <li>Personalized Information: To keep you informed about properties, promotions, and
        services that are relevant to your interests, based on your usage of the Website.</li>
      </ul>

      <h3>4. Data Retention and Protection</h3>
      <p>We take reasonable precautions to protect your personal data from unauthorized access,
      alteration, disclosure, or destruction. However, please be aware that no method of data
      transmission over the internet is entirely secure. We will retain your personal information for
      as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer
      retention period is required or permitted by law.</p>

      <h3>5. Sharing of Personal Information</h3>
      <p>We do not sell, rent, or share your personal information with third parties except in the
      following circumstances:</p>
      <ul>
        <li>When you have given us explicit consent to do so.</li>
        <li>To third-party service providers who assist us in operating our Website, providing
        services, or conducting our business.</li>
        <li>As required by law, to comply with legal obligations, or to protect our rights, property,
        and safety, or that of our users.</li>
      </ul>

      <h3>6. Your Rights</h3>
      <p>You have the right to access, correct, update, or delete your personal data at any time. You
      can exercise these rights by contacting us at aip@allinclusive.properties. In addition, you
      may request to unsubscribe from marketing communications or newsletters at any time.</p>

      <h3>7. Cookies</h3>
      <p>We may use cookies and similar tracking technologies to enhance your experience on our
      Website. Cookies are small files stored on your device that help us analyze website traffic,
      personalize content, and improve our services. You can choose to disable cookies through
      your browser settings, but this may affect the functionality of the Website.</p>

      <h3>8. Changes to this Privacy Policy</h3>
      <p>We may update or amend this Privacy Policy from time to time to reflect changes in our
      practices or legal obligations. Any updates will be posted on this page with the updated
      effective date. We encourage you to review this policy periodically.</p>

      <h3>9. Contact Us</h3>
      <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our use of
      your personal data, please contact us at:</p>
      <p>All Inclusive Marketing Pro Ltd.<br>
      Email: aip@allinclusive.properties</p>

      <h3>10. Personal Information Collected</h3>
      <p>When you visit, register, or use the services available on our Website, we may collect certain
      personal information about you. This information may include, but is not limited to, your
      name, contact details, and any other personal data you provide to us. In addition, we may
      collect information regarding your use of the Website, such as:</p>
      <ul>
        <li>Search history: The properties and pages you view while using the Website.</li>
        <li>Communication history: Interactions with advertisers, partners, and other users,
        including the contents of any emails or messages you send through the Website.</li>
        <li>Correspondence: Any information collected from communication or correspondence
        you send us, whether through email, forms, or other channels.</li>
      </ul>
      <p>Collectively, we refer to all such collected information as "Your Information."</p>

      <h3>11. Consent for Collection and Use of Your Information</h3>
      <p>At the time of entering personal information on our Website, all forms include tick boxes that
      allow you to specify whether you consent (or do not consent) to our use of Your Information
      as described in this Privacy Policy. Your consent is recorded based on the most recently
      submitted form.</p>
      <p>If you are a registered user but are not signed in at the time of submitting a form, we will not
      be able to apply any previously saved consent preferences. In such cases, we will regard
      your consent choice as per the most recent form you submit at that time.</p>

      <h3>12. How We Use Your Information</h3>
      <p>We use Your Information to provide you with access to all areas of this Website and to
      deliver the services and features you have requested. In addition, we may aggregate Your
      Information to identify patterns and trends, which can help us improve and develop our
      services, features, and marketing strategies.</p>
      <p>Specifically, we may use Your Information for the following purposes:</p>
      <ol>
        <li>Service Improvement and Communication:
          <ul>
            <li>To contact you for feedback regarding our services and features.</li>
            <li>To inform you of important changes, updates, or developments to the Website
            or our services.</li>
          </ul>
        </li>
        <li>Marketing and Promotions:
          <ul>
            <li>Where you have provided consent, we may use Your Information to send you
            details of additional products, services, or offers, including those from our
            partners or advertisers, which may be of interest to you.</li>
            <li>Where applicable, and if you have consented, we may share Your Information
            with third parties (partners or advertisers) to contact you with relevant offers
            or information.</li>
          </ul>
        </li>
      </ol>
      <p>If you change your mind about receiving communications, or if you no longer wish to be
      contacted by us or our partners, you may withdraw your consent at any time by contacting
      us at aip@allinclusive.properties</p>

      <h3>13. Features Requiring Personal Information</h3>
      <p>Certain features of the Website inherently require the use of personally identifiable
      information. These may include:</p>
      <ul>
        <li>Account registration and management</li>
        <li>Communication with advertisers or property owners</li>
        <li>Personalized marketing or user experience</li>
      </ul>

      <h3>14. Contacting Advertisers</h3>
      <p>When you use any of the forms provided on the Website to contact an advertiser, the
      information you provide will be recorded by us and sent directly to the chosen advertiser.
      This helps the advertiser provide you with a more personalized service.</p>
      <p>Additionally, we may send the advertiser details of your last search or browsing activity to
      assist them in identifying properties that better match your preferences.</p>
      <p>If you are a registered user and are signed in when contacting an advertiser, we will also
      include your account settings and preferences to further enhance the personalized service
      provided by the advertiser.</p>
      <p>By using the contact forms, you consent to the transfer of your information to the relevant
      advertiser, who will use it in accordance with their privacy policy and practices.</p>
    `
	}
]);

const showBackToTop = ref(false);

const scrollToSection = (sectionId) => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
	showBackToTop.value = window.scrollY > 500;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);

	// Add smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const sectionId = this.getAttribute('href').substring(1);
			scrollToSection(sectionId);
		});
	});
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.h-screen {
	height: 100vh;
}
</style>
