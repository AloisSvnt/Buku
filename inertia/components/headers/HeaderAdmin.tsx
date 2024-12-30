import { Link, usePage } from '@inertiajs/react';

import type { User } from '#types/user';

function HeaderAdmin() {
  const { user } = usePage<{ user: User }>().props;

  return (
    <header>
      <div className="navbar max-h-[4rem] bg-base-100 shadow-lg">
        <div className="flex-1">
          <Link href="/admin/dashboard" className="btn btn-ghost text-xl">Adonis JS</Link>
        </div>
        <div className="flex-none gap-2 lg:flex">
        <p>Welcome {user.fullName}</p>
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link className='btn btn-ghost' href="/">Front</Link>
            </li>
            <li>
              <Link className='btn btn-ghost' href="/logout">Logout</Link>  
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeaderAdmin;