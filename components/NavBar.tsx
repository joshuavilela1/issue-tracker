import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

export default function NavBar() {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
}
