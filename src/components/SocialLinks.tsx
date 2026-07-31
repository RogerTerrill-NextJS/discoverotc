export default function SocialLink({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target='_blank'
      className='rounded-xl border border-slate-200 p-8 transition hover:border-blue-600 hover:shadow-lg'
    >
      <h3 className='text-xl font-bold text-blue-600'>{title}</h3>
      <p className='mt-2 text-sm text-slate-600'>{subtitle}</p>
    </a>
  );
}
