import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware(routing);

export async function proxy(req: NextRequest) {
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot|mp4|m4a|mp3|wav|ogg|glb|gltf|bin|hdr|exr|ktx2|draco|wasm|pdf|doc|docx|xls|xlsx|csv|txt|zip)).*)",
  ],
};
