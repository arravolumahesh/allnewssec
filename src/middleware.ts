import { NextRequest, NextResponse } from "next/server";

const users = [
  {
    username: "wondrlab",
    password: "36AlvX1sRXC3hq35",
  },
  {
    username: "thumbstack",
    password: "C33PKW6BLrBoQi50",
  },
];

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (users.find((u) => u.username === user && u.password === pwd)) {
      return NextResponse.next();
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
