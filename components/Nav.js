import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <Link href="/">Video Library</Link>
      <Link href="/career-videos">Career Videos (REST)</Link>
      <Link href="/career/videos">Career Videos (GraphQL)</Link>
      <Link href="/spanish-videos">Career Videos in Spanish</Link>
      <Link href="/career-clusters">Career Cluster / Industry Videos</Link>
      <Link href="/skill-and-ability/videos">Skill and Ability Videos</Link>
      <Link href="/work-option/videos">Work Option Videos</Link>
      <Link href="/tutorial/videos">Tutorial Videos</Link>
      <Link href="/faq">FAQs About Videos</Link>
    </>
  );
}
