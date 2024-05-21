import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
export default function Middleware(req:NextRequest) {
  let verify = req.cookies.get("isLogin");
  verify = JSON.parse(verify?.value ?? "false");
  const url = req.nextUrl.clone()

  const urlProtected = ["/pages/products", "/pages/promotions", "/pages/promotion/get"]
  console.log(url)
  if (!verify && urlProtected.indexOf(url.pathname) > -1) {
  return NextResponse.redirect(new URL("/", req.url));
  }
}
