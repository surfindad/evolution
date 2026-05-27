import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Evolution Accelerator',
  description: 'Privacy Policy for Evolution Accelerator and the Evolution Ecosystem.',
}

const CONTACT_FORM = 'https://airtable.com/appNvUtobsLy17k38/pagc0E9ab4ZuPGh0a/form'
const DONOTSELL_FORM = 'https://airtable.com/appNvUtobsLy17k38/pagTiBL17ezsSeFDS/form'

export default function PrivacyPage() {
  return (
    <main className="bg-[#1E1E2A] min-h-screen pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 font-inter text-sm transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <p className="label-mono mb-6">Legal</p>
        <h1 className="font-raleway font-black uppercase text-white leading-none mb-12" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          Privacy Policy
        </h1>

        <div className="space-y-8 text-white/55 font-inter text-base leading-relaxed">

          <p>This Policy is incorporated into and forms part of our <Link href="/terms" className="text-green hover:text-green/70 transition-colors">Terms of Use</Link>.</p>

          <p>Welcome to the Evolution Ecosystem, operated by Evolution Accelerator Inc. (&quot;Evolution&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). This Privacy Policy (&quot;Policy&quot;) applies to all associated websites on which this Policy is posted (the &quot;Site&quot;). We at Evolution know that you care about how your personal information is collected, used, and shared, and we take your privacy and security seriously.</p>

          <p>This Privacy Policy outlines how we collect, use, and disclose personally identifiable information (&quot;Personal Information&quot;) we may obtain about you when you use this website, submit an application to our investment fund, submit a form expressing interest in joining our ecosystem, or access certain information provided here (the &quot;Services&quot;). Before accessing any of the Services or providing us information, please review this Policy carefully. If you have any questions or would like to request that we delete information we have collected from you, please <a href={CONTACT_FORM} target="_blank" rel="noopener noreferrer" className="text-green hover:text-green/70 transition-colors">fill out this form</a>.</p>

          <p>By using the Services or providing information, you agree to the practices described in this Policy. If you do not agree to this policy and accept the Terms of Use, please do not access the Site or utilize the Services.</p>

          <Section title="Personal Information">
            <p>We collect Personal Information from you when you are using the Site and interacting with our Services. This may include:</p>
            <ul className="list-disc list-inside space-y-1 text-white/45 pl-2">
              <li>Your first and last name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your company name and information</li>
              <li>Your marketing preferences, including any consents you have given us</li>
              <li>Information related to the browser or device you use to access our website</li>
              <li>Any information we collect online from you and maintain in association with you</li>
              <li>Public information about the social media accounts you associate with your company or yourself</li>
              <li>Metadata</li>
              <li>Any other information you provide us when communicating with us</li>
            </ul>
            <p>We collect information on the use of our website, which may include various methods and sources such as Cookies. Please view the &quot;Cookies&quot; section below for more information.</p>
            <p>We process your collected data and Personal Information to send you marketing and promotional materials. We use these communications to invite you to attend events, to enable or improve technical features of the Site, and to tailor marketing communications based on your Personal Information, publicly available information, or information obtained through the Evolution network. If you apply to the MinervaFund or seek investment from Evolution, additional information may need to be submitted regarding your company and the management team. Such information will be used to process your application and evaluate an investment opportunity.</p>
          </Section>

          <Section title="California Privacy Notice">
            <p>The California Consumer Privacy Act of 2018 (&quot;CCPA&quot;) may afford additional rights and protections to users of our Site and Services who are California residents. California residents may have the right to access Personal Information that we have collected about the user, categories of such information, our purpose for collecting such information, and categories of any third parties with whom such information has been shared. Additionally, California residents may have the right to direct us to delete Personal Information in certain circumstances. For more information and to make such requests please view the &quot;Do Not Sell/Share my Personal Information&quot; section below.</p>
          </Section>

          <Section title="Do Not Share/Sell my Personal Information">
            <p>If you qualify and would like to make a request that is within the bounds of CCPA (or other applicable US state or out-of-country privacy laws such as Canada&apos;s PIPEDA, Brazil&apos;s LGPD, or the EU/UK GDPR), please <a href={DONOTSELL_FORM} target="_blank" rel="noopener noreferrer" className="text-green hover:text-green/70 transition-colors">submit a request using this form</a>. You may be asked to verify your identity before completing any such request.</p>
          </Section>

          <Section title="Cookies">
            <p>The Site may use &quot;cookies&quot; to improve your experience with the Services. Cookies are small pieces of information stored on your device when you visit our website. Cookie preferences can be adjusted through your browser settings. We are not responsible for any third party&apos;s use of cookies.</p>
          </Section>

          <Section title="Changes to our Privacy Policy">
            <p>At Evolution, we are constantly trying to improve our services, and this Policy may change over time as a result. We may contact you to inform you of any substantial changes to the Policy. If you have questions or concerns, please <a href={CONTACT_FORM} target="_blank" rel="noopener noreferrer" className="text-green hover:text-green/70 transition-colors">fill out this form</a>.</p>
          </Section>

          <div className="pt-8 border-t border-white/[0.06]">
            <Link href="/terms" className="text-green hover:text-green/70 font-inter text-sm transition-colors">
              View Terms &amp; Conditions →
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-4">
      <h2 className="font-raleway font-black uppercase text-white text-lg mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}
