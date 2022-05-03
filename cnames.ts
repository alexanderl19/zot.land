import { CNAMEs } from "./mod/mod.ts";

// ** Active subdomains **
//
// WHAT?:
// This file contains all the subdomains for the zot.land project,
// if you want to request a zot.land subdomain you should modify
// this file and submit a pull request. ;)
//
// FORMAT:
// This Typescript module exports a CNAMEs object that is synced
// with zot.land. CNAMEs contains a alphabetically sorted map of
// all the zot.land subdomain with their relative target and
// configuration.
//
// eg: adding a foo.zot.land domain that points to the project
// https://foo.github.io/bar.
//
// "foo": {
//   target: "foo.github.io/bar",
//   proxied: true, // not required
// }
//
// OPTIONS:
// * target: target of the CNAME record, required
// * proxied: whether to use Cloudflare proxy, true by default
//
// RULES:
// Before making a request you should:
// * this file passes `deno fmt` && `deno lint`
// * entries are sorted alphabetically
// * follow the request steps  (https://zot.land)
// * read our code of conduct (https://zot.land/coc)
// * read our submission rules (https://zot.land/issues)
// * read our terms of service (https://zot.land/tos)
//
// enjoy your zot.land URL <3
// ~ @alexanderl19

export default <CNAMEs> {
  "www": {
    target: "cname.vercel-dns.com",
    proxied: false
  },
};
