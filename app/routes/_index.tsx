import { getKindeSession } from "@kinde-oss/kinde-remix-sdk";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import styles from "../styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [
    { title: "Kinde x Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { getUser } = await getKindeSession(request);
  const user = await getUser();
  return json({ user });
};

export default function Index() {
  const data = useLoaderData<{
    user: {
      id: string;
      email: string;
      given_name: string;
      family_name: string;
      picture: string | null;
    };
  }>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div>
            {!data.user ? (
              <>
                <Link
                  to="/kinde-auth/login"
                  className="btn btn-ghost sign-in-btn"
                >
                  Sign in
                </Link>
                <Link to="/kinde-auth/register" className="btn btn-dark">
                  Sign up
                </Link>
              </>
            ) : (
              <div className="profile-blob">
                {data.user?.picture ? (
                  <img
                    className="avatar"
                    src={data.user?.picture}
                    alt="user profile avatar"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="avatar">
                    {data.user?.given_name?.[0]}
                    {data.user?.family_name?.[0]}
                  </div>
                )}
                <div>
                  <p className="text-heading-2">
                    {data.user?.given_name} {data.user?.family_name}
                  </p>

                  <Link to="/kinde-auth/logout" className="text-subtle">
                    Log out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {data.user ? (
        <>
          <div className="container">
            <div className="card start-hero">
              <p className="text-body-2 start-hero-intro">Woohoo!</p>
              <p className="text-display-2">
                Your authentication is all sorted.
                <br />
                Build the important stuff.
              </p>
            </div>
            <section className="next-steps-section">
              <h2 className="text-heading-1">Next steps for you</h2>
            </section>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="card hero">
            <p className="text-display-1 hero-title">
              Let’s start authenticating <br /> with KindeAuth
            </p>
            <p className="text-body-1 hero-tagline">Configure your app</p>

            <Link
              to="https://kinde.com/docs/sdks/nextjs-sdk"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light btn-big"
            >
              Go to docs
            </Link>
          </div>
        </div>
      )}
      <footer className="footer">
        <div className="container">
          <strong className="text-heading-2">KindeAuth</strong>
          <p className="footer-tagline text-body-3">
            Visit our{" "}
            <Link className="link" to="https://kinde.com/docs">
              help center
            </Link>
          </p>

          <small className="text-subtle">
            © 2023 KindeAuth, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </div>
  );
}
