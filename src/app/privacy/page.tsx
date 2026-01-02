export const metadata = {
  title: 'Privacy Policy | Outside The Cockpit',
  description:
    'Learn how Outside The Cockpit collects, uses, and protects your personal information in compliance with California privacy laws.',
};

const EMAIL = 'gofly@discoverotc.com';
const WEBSITE_URL = 'https://discoverotc.com';

export default function PrivacyPolicyPage() {
  return (
    <main className='bg-slate-50 min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <header className='mb-12 text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-slate-900'>
            Privacy Policy
          </h1>
          <p className='mt-4 text-sm text-slate-500'>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Content Card */}
        <article className='bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10 space-y-10'>
          <section className='space-y-4'>
            <h2 className='text-xl font-semibold text-slate-900'>
              Introduction
            </h2>
            <p className='text-slate-600 leading-relaxed'>
              Welcome to <strong>Outside The Cockpit</strong> (“we,” “our,” or
              “us”). We respect your privacy and are committed to protecting it
              through this Privacy Policy.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              This policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website.
            </p>
          </section>

          <section className='space-y-4'>
            <h2 className='text-xl font-semibold text-slate-900'>
              Information We Collect
            </h2>

            <h3 className='font-medium text-slate-800'>
              Information You Provide
            </h3>
            <ul className='list-disc list-inside text-slate-600 space-y-1'>
              <li>Name</li>
              <li>Email address</li>
              <li>Information submitted through forms or subscriptions</li>
            </ul>

            <h3 className='font-medium text-slate-800 pt-4'>
              Automatically Collected Information
            </h3>
            <ul className='list-disc list-inside text-slate-600 space-y-1'>
              <li>IP address</li>
              <li>Browser and device type</li>
              <li>Pages visited and time spent</li>
              <li>Referring URLs</li>
            </ul>
          </section>

          <section className='space-y-4'>
            <h2 className='text-xl font-semibold text-slate-900'>
              Cookies & Tracking
            </h2>
            <p className='text-slate-600 leading-relaxed'>
              We may use cookies and similar technologies to improve site
              functionality and analyze usage. You can control cookies through
              your browser settings.
            </p>
          </section>

          <section className='space-y-4'>
            <h2 className='text-xl font-semibold text-slate-900'>
              How We Use Your Information
            </h2>
            <ul className='list-disc list-inside text-slate-600 space-y-1'>
              <li>Operate and improve the website</li>
              <li>Respond to inquiries</li>
              <li>Send updates if you opt in</li>
              <li>Monitor performance and security</li>
            </ul>
          </section>

          <section className='space-y-4'>
            <h2 className='text-xl font-semibold text-slate-900'>
              California Privacy Rights
            </h2>
            <p className='text-slate-600 leading-relaxed'>
              If you are a California resident, you have rights under the CCPA /
              CPRA, including access, deletion, correction, and opt-out rights.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              To exercise these rights, contact us at:
            </p>
            <p className='font-medium text-slate-800'>
              Email: <span className='text-blue-600'>{EMAIL}</span>
            </p>
          </section>

          <section className='space-y-4'>
            <h2 className='text-xl font-semibold text-slate-900'>
              Data Security & Retention
            </h2>
            <p className='text-slate-600 leading-relaxed'>
              We retain personal information only as long as necessary and use
              reasonable safeguards to protect it.
            </p>
          </section>

          <section className='space-y-4'>
            <h2 className='text-xl font-semibold text-slate-900'>Contact Us</h2>
            <p className='text-slate-600 leading-relaxed'>
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <div className='text-slate-700'>
              <p className='font-medium'>Outside The Cockpit</p>
              <p>Email: {EMAIL}</p>
              <p>Website: {WEBSITE_URL}</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
