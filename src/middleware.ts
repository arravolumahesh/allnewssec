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
  {
    username: "onething",
    password: "ukEUamJc6pWW0HY8",
  },
];

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (users.find((u) => u.username === user && u.password === pwd)) {
      const date = new Date(Date.now());
      console.log(
        `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}:- ${user} -- ${
          url.pathname
        }`,
      );
      return NextResponse.next();
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
