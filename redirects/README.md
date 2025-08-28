# Blog Domain Transition: `blog-nrrd.doi.gov` → `blog.onrr.gov`

We are transitioning the blog app from the old domain **`blog-nrrd.doi.gov`** to the new domain **`blog.onrr.gov`** on [cloud.gov](https://cloud.gov).

---

## Why use a redirect app?

- The blog is a **Gatsby (static) app** running with the **Staticfile buildpack**.  
- The Staticfile buildpack does not support host-based redirect rules.  
- Cloud Foundry/Cloud.gov does not provide redirect features at the external domain service level.  
- Best practice: run a **lightweight NGINX redirect app** to handle 301s at the edge.

This ensures:
- **Proper 301 redirects** (SEO-friendly, preserves bookmarks and crawler behavior).  
- A clean separation between the Gatsby app and the redirect logic.  
- Zero downtime: both domains can run in parallel during cutover.

---

## Minimal Redirect App

Create a small app using the NGINX buildpack:

**`redirect/nginx.conf`**
```nginx
worker_processes 1;
events { worker_connections 1024; }

http {
  server {
    listen {{port}};
    server_name _;

    # 301 to the new host, preserving path & query
    return 301 https://blog.onrr.gov$request_uri;
  }
}
```

**`redirect/manifest.yml`**
```
---
applications:
  - name: blog-nrrd-redirect
    memory: 64M
    buildpacks:
      - https://github.com/cloudfoundry/nginx-buildpack.git
    path: .
```

## Cutover steps (safe + reversible)
1. **Ensure EDS covers both domains** (or create a second EDS instance for the old name if you prefer to separate):
    - domains can be a list: e.g., ["blog.onrr.gov","blog-nrrd.doi.gov"].
    - Follow EDS docs for the _acme-challenge and main CNAME/ALIAS DNS records.  ￼
1. **Map the new domain to your Gatsby app** (Staticfile buildpack):
```
cf create-domain <org> blog.onrr.gov
cf map-route <gatsby-app> blog.onrr.gov
```
(Leave blog-nrrd.doi.gov mapped to the Gatsby app for now.)

3. **Push the redirect app and map the old domain to it**:
```cd redirect
cf push -f manifest.yml
# map old host to the redirect app
cf create-domain <org> blog-nrrd.doi.gov
cf map-route blog-nrrd-redirect blog-nrrd.doi.gov
```

4. **Unmap the old domain from the Gatsby app** (so only the redirect app answers there):
```
cf unmap-route <gatsby-app> blog-nrrd.doi.gov
```
5. **Verify**: curl both hosts and check for a **301** from the old domain and a **200** from the new one.
6. After traffic settles and you’ve updated Search.gov, sitemaps, analytics, etc., you can later remove the old domain from EDS if desired.