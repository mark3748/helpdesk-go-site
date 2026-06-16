import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/helpdesk-api",
    },
    {
      type: "category",
      label: "Health",
      items: [
        {
          type: "doc",
          id: "openapi/health-liveness",
          label: "Liveness check",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/health-readiness",
          label: "Readiness check",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/health-check",
          label: "Health check",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "openapi/auth-login",
          label: "Login (local mode)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/auth-logout",
          label: "Logout (local mode)",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "openapi/get-current-user",
          label: "Current user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/current-users-profile-local-auth",
          label: "Current user's profile (local auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/update-current-users-profile-local-auth",
          label: "Update current user's profile (local auth)",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "openapi/change-password-local-auth",
          label: "Change password (local auth)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/list-roles-for-a-user",
          label: "List roles for a user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/add-role-to-a-user",
          label: "Add role to a user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/remove-role-from-a-user",
          label: "Remove role from a user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/list-users-admin",
          label: "List users (admin)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/create-local-user-admin",
          label: "Create local user (admin)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/get-user-by-id-admin",
          label: "Get user (admin)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/list-roles",
          label: "List available roles (admin)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Requesters",
      items: [
        {
          type: "doc",
          id: "openapi/create-requester",
          label: "Create requester",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/get-requester",
          label: "Get requester",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/update-requester",
          label: "Update requester",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Tickets",
      items: [
        {
          type: "doc",
          id: "openapi/list-tickets",
          label: "List tickets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/create-ticket",
          label: "Create ticket",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/get-ticket",
          label: "Get ticket",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/update-ticket",
          label: "Update ticket",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Comments",
      items: [
        {
          type: "doc",
          id: "openapi/list-public-comments",
          label: "List public comments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/add-comment",
          label: "Add comment",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Attachments",
      items: [
        {
          type: "doc",
          id: "openapi/list-attachments",
          label: "List attachments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/finalize-attachment",
          label: "Finalize attachment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/presign-attachment-upload",
          label: "Presign attachment upload",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/download-attachment",
          label: "Download attachment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/delete-attachment",
          label: "Delete attachment",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Watchers",
      items: [
        {
          type: "doc",
          id: "openapi/list-watchers",
          label: "List watcher user IDs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/add-watcher",
          label: "Add watcher",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/remove-watcher",
          label: "Remove watcher",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "CSAT",
      items: [
        {
          type: "doc",
          id: "openapi/get-csat-form",
          label: "CSAT form",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/submit-csat-score",
          label: "Submit CSAT score",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Metrics",
      items: [
        {
          type: "doc",
          id: "openapi/get-agent-metrics",
          label: "Agent metrics (per-status counts for current user)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/get-manager-metrics",
          label: "Manager metrics (global per-status counts)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/get-sla-metrics",
          label: "SLA attainment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/get-resolution-metrics",
          label: "Average resolution time",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/get-ticket-volume-metrics",
          label: "Ticket volume per day (30)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Exports",
      items: [
        {
          type: "doc",
          id: "openapi/export-tickets",
          label: "Export tickets to CSV",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/get-export-job-status",
          label: "Check export job status",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Events",
      items: [
        {
          type: "doc",
          id: "openapi/event-stream",
          label: "Event stream",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Assets",
      items: [
        {
          type: "doc",
          id: "openapi/list-asset-categories",
          label: "List asset categories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/create-asset-category",
          label: "Create asset category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/get-asset-category",
          label: "Get asset category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/list-assets",
          label: "List assets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/create-asset",
          label: "Create asset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/get-asset",
          label: "Get asset",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/update-asset",
          label: "Update asset",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "openapi/delete-asset",
          label: "Delete asset",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/assign-asset-to-user",
          label: "Assign asset to user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/checkout-asset",
          label: "Checkout asset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/checkin-asset",
          label: "Checkin asset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/list-active-checkouts",
          label: "List active checkouts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/list-overdue-checkouts",
          label: "List overdue checkouts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/get-asset-history",
          label: "Get asset history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/get-asset-assignments",
          label: "Get asset assignments",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Teams",
      items: [
        {
          type: "doc",
          id: "openapi/list-teams",
          label: "List teams",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "SLAs",
      items: [
        {
          type: "doc",
          id: "openapi/list-sl-as",
          label: "List SLA policies",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "KnowledgeBase",
      items: [
        {
          type: "doc",
          id: "openapi/search-kb",
          label: "Search knowledge base articles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/create-kb",
          label: "Create knowledge base article",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/get-kb",
          label: "Get knowledge base article",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/update-kb",
          label: "Update knowledge base article",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/delete-kb",
          label: "Delete knowledge base article",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      items: [
        {
          type: "doc",
          id: "openapi/email-inbound",
          label: "Accept inbound email webhook",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
