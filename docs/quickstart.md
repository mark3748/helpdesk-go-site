---
sidebar_position: 1
---

# Quickstart

Use this path to get a local Helpdesk stack running with Docker Compose.

## Requirements

- Docker and Docker Compose
- Node.js 20 or newer, only if running the frontend dev servers directly
- Go 1.23 or newer, only if building the API or worker locally

## Start the Stack

From the app repository:

```bash
docker compose up -d db redis api worker internal
```

Default local URLs:

- Internal UI: `http://localhost:5175`
- API: `http://localhost:8080`
- API health: `http://localhost:8080/healthz`

Compose runs with `AUTH_MODE=local`. Set `ADMIN_PASSWORD` before first startup if you want a known admin password:

```bash
ADMIN_PASSWORD=change-me docker compose up -d db redis api worker internal
```

If `ADMIN_PASSWORD` is omitted in development, the API generates one and logs it once.

## Local Filesystem Storage

For attachment uploads without S3 or MinIO, set `FILESTORE_PATH` to a writable path:

```bash
export FILESTORE_PATH="$PWD/data"
```

The API readiness check verifies the path is usable.

## Next Steps

- Configure object storage in **Admin > Storage Settings**.
- Configure mail in **Admin > Mail Settings** if you want notifications.
- Configure Discord after mail is working if you want email verification for linked Discord users.
