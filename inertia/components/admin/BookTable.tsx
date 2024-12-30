import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import type { Book } from "#types/book";
import { useState } from "react";

function BookTable({ books }: { books: Book[] }) {
  const [iconName, setIconName] = useState<{ [key: string]: string }>({});

  return (
    <table className="table border-collapse">
    <thead>
      <tr className="divide-x divide-slate-600 bg-base-200 text-base-content">
        <th className="w-8">
          <label>
            <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
          </label>
        </th>
        <th className="">Title</th>
        <th className="">Category</th>
        <th className="">Author</th>
        <th className="w-52">Actions</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <tr key={book.id} className="divide-x divide-slate-600 bg-base-100">
          <td className="w-8">
            <label>
              <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
            </label>
          </td>
          <td className="">{book.title}</td>
          <td className="">{book.category}</td>
          <td className="">{book.author}</td>
          <td className="">
          <ul className="menu menu-horizontal bg-base-200 rounded-box w-fit">
            <li>
              <Link href={`/${book.slug}`} className="tooltip" data-tip="See">
                <Icon icon="mdi:open-in-new" width="20" height="20" />
              </Link>
            </li>
            <li>
              <Link href="" className="tooltip" data-tip="Edit">
                <Icon icon="mdi:edit" width="20" height="20" />
              </Link>
            </li>
            <li>
              <Link 
              href="" 
              className="tooltip" 
              data-tip="Delete" 
              onMouseEnter={() => setIconName((prev) => ({ ...prev, [book.id]: "mdi:delete-empty" }))} 
              onMouseLeave={() => setIconName((prev) => ({ ...prev, [book.id]: "mdi:delete" }))}>
              <Icon 
                icon={iconName[book.id] || "mdi:delete"} 
                width="20" 
                height="20"
              />
              </Link>
            </li>
          </ul>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}

export default BookTable;