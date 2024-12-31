import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import type { Category } from "#types/category";

function BookTable({ categories }: { categories: Category[] }) {

  console.log(categories);
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
        <th className="">Name</th>
        <th className="">Description</th>
        <th className="w-52">Actions</th>
      </tr>
    </thead>
    <tbody>
      {categories.map((category) => (
        <tr key={category.id} className="divide-x divide-slate-600 bg-base-100">
          <td className="w-8">
            <label>
              <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
            </label>
          </td>
          <td className="">{category.name}</td>
          <td className="">{category.description}</td>
          <td className="">
          <ul className="menu menu-horizontal bg-base-200 rounded-box w-fit">
            <li>
              <Link href="" className="tooltip" data-tip="Edit">
                <Icon icon="mdi:edit" width="20" height="20" />
              </Link>
            </li>
            <li>
              <Link 
              href={`/admin/categories/${category.id}`} 
              method="delete"
              className="tooltip" 
              data-tip="Delete" 
              onMouseEnter={() => setIconName((prev) => ({ ...prev, [category.id]: "mdi:delete-empty" }))} 
              onMouseLeave={() => setIconName((prev) => ({ ...prev, [category.id]: "mdi:delete" }))}>
              <Icon 
                icon={iconName[category.id] || "mdi:delete"} 
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