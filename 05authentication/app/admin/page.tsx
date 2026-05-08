import React from "react";
import { setRole, removeRole } from "@/app/admin/actions";
import { clerkClient } from "@clerk/nextjs/server";

const Page = async () => {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;

  return (
    <>
      <h1>Admin Page</h1>

      {users.map((user, index) => (
        <div
          key={user.id}
          className={`flex justify-between gap-4 ${
            index % 2 === 0
              ? "bg-neutral-50 dark:bg-neutral-800"
              : "bg-white dark:bg-neutral-700"
          }`}
        >
          {/* USER INFO */}
          <div className="flex items-center gap-4">
            <div className="dark:text-neutral-500">
              {user.firstName} {user.lastName}
            </div>

            <div className="dark:text-neutral-200">
              {
                user.emailAddresses.find(
                  (email) =>
                    email.id === user.primaryEmailAddressId
                )?.emailAddress
              }
            </div>

            <div className="dark:text-neutral-200">
              {user.publicMetadata.role as string}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4">
            <form action={setRole} className="inline">
              <input type="hidden" name="userId" value={user.id} />
              <input type="hidden" name="role" value="admin" />
              <button className="px-2 py-1 text-sm border" type="submit">
                Make Admin
              </button>
            </form>

            <form action={setRole} className="inline">
              <input type="hidden" name="userId" value={user.id} />
              <input type="hidden" name="role" value="moderator" />
              <button className="px-2 py-1 text-sm border" type="submit">
                Make Moderator
              </button>
            </form>

            <form action={removeRole} className="inline">
              <input type="hidden" name="userId" value={user.id} />
              <button className="px-2 py-1 text-sm border" type="submit">
                Remove Role
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default Page;