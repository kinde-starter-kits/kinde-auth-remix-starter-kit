import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { getKindeSession } from "@kinde-oss/kinde-auth-remix-sdk";
import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { user } = await getKindeSession(request);
  return json({ user });
};

export default function Index() {
  const data = useLoaderData<{ user: object }>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (with Kinde)</h1>

      {data.user ? (
        <>
          <Link to={"/kinde-auth/logout"}>
            <button>Logout</button>
          </Link>
          <code>
            <pre>{JSON.stringify(data.user, null, 2)}</pre>
          </code>
        </>
      ) : (
        <>
          <Link to={"/kinde-auth/login"}>
            <button>Login</button>
          </Link>

          <Link to={"/kinde-auth/register"}>
            <button>Register</button>
          </Link>
        </>
      )}
    </div>
  );
}
