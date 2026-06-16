---
sidebar_position: 2
---

# Helm Installation

The chart lives in the app repository at `helm/helpdesk`.

## Install From a Local Checkout

```bash
helm upgrade --install helpdesk ./helm/helpdesk \
  --namespace helpdesk \
  --create-namespace
```

Set hostnames, image tags, and secrets in a values file:

```yaml
image:
  repository: ghcr.io/mark3748/helpdesk-go-api
  tag: "0.4.6"

workerImage:
  repository: ghcr.io/mark3748/helpdesk-go-worker
  tag: "0.4.6"

frontendInternal:
  image:
    repository: ghcr.io/mark3748/helpdesk-go-internal-frontend
    tag: "0.4.6"

env:
  AUTH_MODE: "local"
  DATABASE_URL: "postgres://user:pass@postgres:5432/helpdesk?sslmode=disable"
  REDIS_ADDR: "redis:6379"
  APP_VERSION: "0.4.6"
  WEB_APP_VERSION: "0.4.6"

secrets:
  enabled: true
  data:
    AUTH_LOCAL_SECRET: "replace-with-a-long-random-secret"
    ADMIN_PASSWORD: "replace-me"
```

Then apply it:

```bash
helm upgrade --install helpdesk ./helm/helpdesk \
  --namespace helpdesk \
  --create-namespace \
  -f values-production.yaml
```
