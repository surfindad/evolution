import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms & Conditions | Evolution Accelerator',
  description: 'Terms of Use for Evolution Accelerator and the Evolution Ecosystem.',
}

export default function TermsPage() {
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
          Terms &amp; Conditions
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/55 font-inter text-base leading-relaxed">

          <p>Welcome to the Evolution Ecosystem. These Terms Of Use represent a contract between you and Evolution (including all subdomains, the &quot;Site&quot;), which is owned and operated by Evolution Accelerator, Inc. and its affiliates (&quot;Evolution&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).</p>

          <p>By using our Services you agree to these Terms of Use. If you do not agree with our Terms of Use please discontinue using Services offered throughout the Site or affiliated Sites.</p>

          <p>The advisors, contractors, mentors, partners, representatives, and Site provides information about the company and its operations, products, and services. Such providing of information does not constitute any form of investment advice, legal advice, financial advice, or business advice of any kind. Nothing is to be considered an offer to buy or sell securities. It is information only, not financial advice. Consult qualified professionals for your specific needs. Information may change. Links are for convenience, not endorsements. Investments can lose value; past results are not predictive. Seek legal and financial counsel as required.</p>

          <p>By using the Site and our Services, you acknowledge that Evolution is not responsible for any third-party services or providers that may be linked on the Site. Evolution does not control and assumes no liability for any content, services, or products provided by these third parties as well as any direct or indirect damage or loss arising from such use.</p>

          <p>Any usage of the Site and Services is solely at your own risk. The Site, Services, and all content provided are offered &quot;as is,&quot; with no guarantees or warranties of any kind. To the fullest extent allowed by law, Evolution is not responsible for any damages, including consequential, incidental, special, punitive, or exemplary damages, that result from your use of the Site or Services. Additionally, you agree to protect and indemnify Evolution, along with its affiliates, officers, agents, advisors, mentors, employees, and partners, from any claims, liabilities, damages, losses, or expenses (including legal fees) that arise from your use of the Site or attendance of an event or an interaction in any form via any medium or from any violation of these Terms.</p>

          <Section title="Advisor & Mentor Disclaimer">
            <p>Any advice, information, or commentary provided by an advisor, mentor, representative, or speaker is for educational and informational purposes only. Such statements are not to be construed as professional legal, financial, or investment advice. You agree that any information you receive is at your own risk. Evolution Accelerator&apos;s disclaimers and limitations of liability extend fully to these individuals. By using our services, you agree that we are not liable for any acts or omissions of any advisor, mentor, representative, or speaker.</p>
          </Section>

          <Section title="Specific Assumption of Risk">
            <p>By using the Services, you acknowledge that certain activities, information, or opportunities provided may carry inherent risks, including but not limited to the potential for financial loss or business failure. You knowingly and voluntarily assume all risks, both known and unknown, associated with your participation. You are solely responsible for evaluating all information and opportunities. Evolution Accelerator and its advisors, mentors, and representatives cannot foresee or control all potential risks, and are not responsible for any consequences that may arise from your decisions.</p>
          </Section>

          <Section title="Disclaimer of Warranties & Limitation of Liability">
            <p>The Services and all content are provided &quot;as is,&quot; without any warranties or guarantees. To the fullest extent permitted by law, Evolution Accelerator is not responsible for any damages, whether direct, indirect, or consequential, that may arise from your use of the Services. Your use is at your own risk. Any information is for informational purposes only; it may include fact or fiction and provides no guarantee in any form; it is neither professional advice nor a replacement for professional advice nor solicitation in any form and may be AI generated and inaccuracies may exist. The reader and user assumes all risks for reading and using the information provided on any site or post or via any event and is responsible for fact-checking anything and everything herein. Please consult a professional provider as needed or required by law.</p>
          </Section>

          <Section title="Financial Terms & Payment Processing">
            <p><strong className="text-white/70">Fee Structure:</strong> The Evolution Ecosystem is free to use for all non-monetized activities. If you are paid for products or services through the Evolution Ecosystem by Evolution Accelerator, Inc., such action constitutes agreement to Evolution Accelerator, Inc. to retain a 10% fee from each transaction amount at the time of processing.</p>
            <p><strong className="text-white/70">Third-Party Transaction Fees:</strong> In addition to the 10% fee retained by Evolution Accelerator, Inc., any transaction fees charged by third-party payment processors (e.g., Stripe or another 3rd-party) will be passed through to you without any markup or deducted from each transaction amount. These fees will be calculated, deducted, and retained by Evolution Accelerator, Inc. at the time of each transaction.</p>
            <p><strong className="text-white/70">Clients, Content, Data, Products, and Services:</strong> The collection, processing, or submission of Evolution Ecosystem users or users&apos; clients, content, brand, data, information, logo, monetized or non-monetized products or services through the Evolution Ecosystem platform by Evolution Accelerator, Inc. does not constitute agreement to, nor transfer of the legal and monetary rights of, the users or users&apos; clients, content, brand, data, information, logo, monetized or non-monetized products or services to Evolution Accelerator, Inc. Users retain full copyrights and other legal rights and may de-platform from, or discontinue processing transactions via, the Evolution Ecosystem at any time with no further legal or monetary obligation.</p>
          </Section>

          <Section title="Important Disclosures for Evolution Ventures MinervaFund">
            <p>Wherein the Evolution Ventures MinervaFund is involved the following disclosures apply:</p>

            <Subsection title="Exclusive Opportunity">
              <p>Private Investment Fund: Open exclusively to verified accredited investors under Regulation D, Rule 506(c).</p>
            </Subsection>

            <Subsection title="General Solicitation Allowed">
              <p>Public Sharing: We publicly share investment opportunities while ensuring all investors meet accreditation standards.</p>
            </Subsection>

            <Subsection title="Regulatory Compliance">
              <p>Securities Act of 1933: Full adherence to Regulation D, Rule 506(c), as amended, including the JOBS Act of 2012. Operating under 17 C.F.R. § 230.506(c) and all relevant amendments.</p>
            </Subsection>

            <Subsection title="Accredited Investors Only">
              <p>Investment Restriction: Limited to verified accredited investors. All investors must meet accreditation standards before participating.</p>
            </Subsection>

            <Subsection title="Investment Risks">
              <p>High-Risk, Speculative Investments: Potential for significant returns, but investors must be prepared for possible loss of capital. Funds are illiquid and not readily redeemable; expect capital to be tied up for 10+ years. Past performance is not indicative of future results.</p>
            </Subsection>

            <Subsection title="Confidential & Proprietary">
              <p>For Qualified Investors Only: This information is confidential. Do not distribute without consent.</p>
            </Subsection>

            <Subsection title="No Offer or Solicitation">
              <p>Informational Purposes Only: This information does not constitute an offer to sell or a solicitation to buy any securities. Offers are made only through official offering documents.</p>
            </Subsection>

            <Subsection title="Consult Advisors">
              <p>Due Diligence Recommended: Review all offering documents thoroughly. Consult your legal, tax, and financial advisors before investing.</p>
            </Subsection>

            <Subsection title="Forward Looking Statements">
              <p>This information contains forward-looking statements that involve substantial risks and uncertainties. All statements other than statements of historical facts, including projections of revenues, income, returns, plans, strategies, or expectations regarding market trends, are forward-looking statements.</p>
              <p>These forward-looking statements are based on current expectations and assumptions subject to risks and uncertainties which may cause actual results to differ materially. Factors include market volatility, changes in regulatory or legal environments, performance of portfolio investments, competition, technological advancements, and unforeseen events.</p>
              <p>The Fund undertakes no obligation to publicly update or revise any forward-looking statements.</p>
            </Subsection>
          </Section>

          <p className="text-white/35 text-sm">Evolution reserves all rights to the content and design of the Site and does not grant license to use any trademarks, tradenames, or logos displayed on the Site.</p>

          <div className="pt-8 border-t border-white/[0.06]">
            <Link href="/privacy" className="text-green hover:text-green/70 font-inter text-sm transition-colors">
              View Privacy Policy →
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

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pl-4 border-l border-white/[0.08] mt-4">
      <h3 className="font-inter font-semibold text-white/70 text-sm mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}
