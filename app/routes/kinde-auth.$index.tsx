import { handleAuth } from "@kinde-oss/kinde-remix-sdk";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params, request }: LoaderFunctionArgs) {
  return await handleAuth(request, params.index);
}
