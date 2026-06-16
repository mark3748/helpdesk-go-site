---
sidebar_position: 3
---

# Discord Integration

The Discord integration lets users create tickets with slash commands and keeps Discord ticket threads synchronized with Helpdesk comments.

## Developer Portal Setup

1. Create an application in the Discord Developer Portal.
2. Add a bot to the application and copy the bot token.
3. Under **Bot > Privileged Gateway Intents**, enable **Message Content Intent**.
4. Invite the bot to your server with the `bot` and `applications.commands` scopes.
5. Enable Discord developer mode.
6. Copy the server ID and the ticket channel ID.

## Bot Permissions

Grant the bot these permissions in the ticket channel:

- View Channel
- Send Messages
- Read Message History
- Create Public Threads
- Send Messages in Threads
- Use Slash Commands

If slash commands do not appear, verify the invite included `applications.commands` and restart the worker so commands are registered again.

## Helpdesk Configuration

Administrators can save Discord settings in **Admin Settings > Discord Settings**.

The equivalent environment variables are:

```text
DISCORD_BOT_TOKEN
DISCORD_GUILD_ID
DISCORD_CHANNEL_ID
```

For Helm deployments, keep the token in a Kubernetes Secret and put non-secret IDs in `env`:

```yaml
env:
  DISCORD_GUILD_ID: "123456789012345678"
  DISCORD_CHANNEL_ID: "123456789012345678"

secrets:
  enabled: true
  data:
    DISCORD_BOT_TOKEN: "replace-with-the-bot-token"
```

Saved UI settings override non-empty worker environment variables. Restart the worker after changing Discord settings because the gateway connection and slash command registration happen at worker startup.

## Slash Commands

- `/create-ticket`: opens a modal, creates a Helpdesk ticket, and creates a public Discord thread in the configured ticket channel.
- `/link-email`: starts email verification so a Discord user can be linked to a Helpdesk requester.
- `/verify-email`: completes the requester link after the user receives the verification code.

Email linking requires SMTP Host and From Address in **Admin > Mail Settings**, or `SMTP_HOST` and `SMTP_FROM` in the worker environment. Redis is required to queue verification emails.

## Synchronization Behavior

- Replies in mapped Discord ticket threads are added to the Helpdesk ticket.
- Comments added in the internal Helpdesk UI are posted to the mapped Discord thread.
- Message content sync requires Message Content Intent in the Discord Developer Portal.

## Troubleshooting

- Slash commands missing: check guild ID, invite scopes, and worker logs.
- Ticket creation fails: check channel ID and thread permissions.
- Replies do not sync: check Message Content Intent and worker gateway logs.
- Email link commands fail: check SMTP settings and Redis connectivity.
