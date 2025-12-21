export type Integration = {
  id: string;
  name: string;
  category: "Cloud" | "Data" | "AI" | "Kubernetes" | "SaaS" | "Observability" | "FinOps" | "Identity" | "Ticketing";
  status: "Available" | "Beta" | "Coming soon";
  short: string;
  whatWeIngest: string[];
  outputs: string[];
  setup: {
    method: string;
    timeToValue: string;
    permissions: string;
  };
};

export const integrationsData: Integration[] = [
  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    status: "Available",
    short: "Cost allocation across EC2, RDS, S3, and 200+ services.",
    whatWeIngest: [
      "Usage and cost data from Cost and Usage Reports",
      "Resource tags and metadata",
      "Cost anomalies and savings opportunities",
      "Multi-account and cross-region data"
    ],
    outputs: [
      "Reporting and drilldowns by service, tag, environment",
      "Allocation dimensions for chargeback",
      "Detected and predicted anomalies",
      "Automation paths for rightsizing and termination"
    ],
    setup: {
      method: "Read-only API + CUR export",
      timeToValue: "15–30 minutes",
      permissions: "Read-only, scoped to billing, usage, and tags"
    }
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: "Cloud",
    status: "Available",
    short: "Usage, cost, and governance across subscriptions.",
    whatWeIngest: [
      "Cost Management API data",
      "Resource groups and subscription metadata",
      "Reserved instance and savings plan details",
      "Tags and cost allocation rules"
    ],
    outputs: [
      "Reporting across subscriptions and resource groups",
      "Allocation by business unit and environment",
      "Anomaly detection on spend trends",
      "Automation for resource governance"
    ],
    setup: {
      method: "Service Principal with read-only access",
      timeToValue: "20–40 minutes",
      permissions: "Read-only, scoped to Cost Management and Resource Graph"
    }
  },
  {
    id: "gcp",
    name: "Google Cloud",
    category: "Cloud",
    status: "Available",
    short: "BigQuery billing data and resource inventory.",
    whatWeIngest: [
      "BigQuery billing export data",
      "Committed use discount details",
      "Resource labels and project metadata",
      "Usage metrics across compute, storage, and networking"
    ],
    outputs: [
      "Detailed cost reporting by project and service",
      "Allocation by label and cost center",
      "Anomaly detection on usage patterns",
      "Automation for commitment-based optimization"
    ],
    setup: {
      method: "Service account with BigQuery access",
      timeToValue: "15–30 minutes",
      permissions: "Read-only, scoped to billing project and BigQuery"
    }
  },
  {
    id: "oracle-oci",
    name: "Oracle Cloud Infrastructure",
    category: "Cloud",
    status: "Beta",
    short: "Cost tracking across compute, database, and applications.",
    whatWeIngest: [
      "Usage and cost data from OCI APIs",
      "Compartment and tagging structure",
      "Resource metadata and inventory",
      "Billing summary and itemized costs"
    ],
    outputs: [
      "Reporting by compartment and service",
      "Cost allocation by tag and business unit",
      "Anomaly detection on spend",
      "Optimization recommendations"
    ],
    setup: {
      method: "API user with read-only permissions",
      timeToValue: "30–45 minutes",
      permissions: "Read-only, scoped to billing and compartment inspection"
    }
  },
  {
    id: "databricks",
    name: "Databricks",
    category: "Data",
    status: "Beta",
    short: "Workspace usage, compute costs, and SQL warehouse spend.",
    whatWeIngest: [
      "Workspace and cluster metrics",
      "Compute hours and SKU data",
      "Job execution logs and costs",
      "SQL warehouse usage and pricing"
    ],
    outputs: [
      "Cost reporting by workspace and cluster",
      "Team-level allocation and chargeback",
      "Usage anomalies and waste detection",
      "Automation for cluster and job optimization"
    ],
    setup: {
      method: "OAuth2 + read-only token",
      timeToValue: "15–20 minutes",
      permissions: "Read-only access to workspace and billing APIs"
    }
  },
  {
    id: "snowflake",
    name: "Snowflake",
    category: "Data",
    status: "Coming soon",
    short: "Warehouse consumption, compute credits, and storage.",
    whatWeIngest: [
      "Account usage views and query costs",
      "Storage metrics and capacity planning",
      "Compute credit consumption",
      "User and role metadata"
    ],
    outputs: [
      "Cost reporting by warehouse and team",
      "Allocation by business function",
      "Query-level cost analysis",
      "Optimization recommendations"
    ],
    setup: {
      method: "Read-only user + account usage views",
      timeToValue: "20–30 minutes",
      permissions: "Read-only, scoped to account usage and information schemas"
    }
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "AI",
    status: "Beta",
    short: "API usage, model consumption, and token costs.",
    whatWeIngest: [
      "API usage and request counts",
      "Token consumption by model",
      "Error rates and latency metrics",
      "Organization and project-level data"
    ],
    outputs: [
      "Cost reporting by model and endpoint",
      "Team and project-level allocation",
      "Usage anomalies and waste",
      "Optimization for prompt efficiency"
    ],
    setup: {
      method: "API key with usage read access",
      timeToValue: "10–15 minutes",
      permissions: "Read-only, scoped to usage and billing APIs"
    }
  },
  {
    id: "azure-openai",
    name: "Azure OpenAI",
    category: "AI",
    status: "Coming soon",
    short: "Deployment usage and token consumption across regions.",
    whatWeIngest: [
      "Deployment usage metrics",
      "Token counts by model and endpoint",
      "Regional and quota data",
      "Cost allocation by deployment"
    ],
    outputs: [
      "Cost reporting by deployment",
      "Team and project allocation",
      "Usage anomalies",
      "Optimization paths"
    ],
    setup: {
      method: "Azure Service Principal",
      timeToValue: "20–30 minutes",
      permissions: "Read-only, scoped to Cognitive Services"
    }
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "Kubernetes",
    status: "Beta",
    short: "Pod and node resource usage with workload attribution.",
    whatWeIngest: [
      "Node and pod metrics from Prometheus",
      "Container resource requests and limits",
      "Namespace and label data",
      "Egress and storage metrics"
    ],
    outputs: [
      "Cost reporting by namespace and workload",
      "Team and application-level allocation",
      "Right-sizing recommendations",
      "Automation for resource management"
    ],
    setup: {
      method: "Agent deployment + Prometheus scrape",
      timeToValue: "30–45 minutes",
      permissions: "Read-only access to cluster metrics and labels"
    }
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "SaaS",
    status: "Coming soon",
    short: "License usage and seat allocation across the organization.",
    whatWeIngest: [
      "License and subscription data",
      "User and seat metrics",
      "Feature usage analytics",
      "Tenant and domain information"
    ],
    outputs: [
      "License cost reporting",
      "Department-level allocation",
      "Unused license detection",
      "Optimization recommendations"
    ],
    setup: {
      method: "Graph API with application permissions",
      timeToValue: "15–25 minutes",
      permissions: "Read-only, scoped to organization and license data"
    }
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "SaaS",
    status: "Coming soon",
    short: "Org usage, feature consumption, and licensing.",
    whatWeIngest: [
      "Org metrics and feature flags",
      "License and edition data",
      "Storage and API usage",
      "User and role information"
    ],
    outputs: [
      "Cost reporting by department and use case",
      "License utilization analysis",
      "Unused feature detection",
      "Optimization paths"
    ],
    setup: {
      method: "OAuth2 + service account",
      timeToValue: "20–30 minutes",
      permissions: "Read-only, scoped to org data and system logs"
    }
  },
  {
    id: "datadog",
    name: "Datadog",
    category: "Observability",
    status: "Coming soon",
    short: "Platform usage, ingestion, and feature consumption.",
    whatWeIngest: [
      "Organization and account metrics",
      "Ingestion rates by product",
      "Feature usage and SKU data",
      "Retention and quota information"
    ],
    outputs: [
      "Cost reporting by product and team",
      "Allocation by resource and use case",
      "Waste detection and optimization",
      "Automation for sampling and retention"
    ],
    setup: {
      method: "API key with organization access",
      timeToValue: "15–20 minutes",
      permissions: "Read-only, scoped to organization and usage APIs"
    }
  },
  {
    id: "cloud-monitoring",
    name: "Cloud Monitoring",
    category: "Observability",
    status: "Coming soon",
    short: "Logs, metrics, and infrastructure data from major clouds.",
    whatWeIngest: [
      "CloudWatch / Azure Monitor / GCP Monitoring data",
      "Log ingestion and retention metrics",
      "Infrastructure metrics and alarms",
      "Custom metric and dashboard usage"
    ],
    outputs: [
      "Observability cost allocation",
      "Log volume analysis and optimization",
      "Anomaly detection on ingestion",
      "Automation for retention and sampling"
    ],
    setup: {
      method: "Cloud-native integration or API",
      timeToValue: "20–35 minutes",
      permissions: "Read-only, scoped to logs and metrics"
    }
  },
  {
    id: "billing-exports",
    name: "Billing Exports",
    category: "FinOps",
    status: "Available",
    short: "S3, Azure Blob, or GCS exports for custom pipelines.",
    whatWeIngest: [
      "CSV or Parquet billing exports",
      "Multi-account or multi-tenant data",
      "Custom dimension and tagging",
      "Real-time and scheduled delivery"
    ],
    outputs: [
      "Direct integration with data warehouses",
      "Custom reporting and ML pipelines",
      "Advanced anomaly detection",
      "Full automation and governance"
    ],
    setup: {
      method: "S3 / Blob / GCS object storage",
      timeToValue: "15–30 minutes",
      permissions: "Read-only, scoped to billing bucket"
    }
  },
  {
    id: "okta",
    name: "Okta",
    category: "Identity",
    status: "Coming soon",
    short: "Identity and access context for cost allocation.",
    whatWeIngest: [
      "User and group data",
      "Application assignments",
      "Directory and domain information",
      "Session and event logs"
    ],
    outputs: [
      "User and team cost allocation",
      "Department and project attribution",
      "Access control and auditability",
      "Compliance and governance reporting"
    ],
    setup: {
      method: "OAuth2 + API token",
      timeToValue: "15–20 minutes",
      permissions: "Read-only, scoped to users, groups, and apps"
    }
  },
  {
    id: "entra-id",
    name: "Microsoft Entra ID",
    category: "Identity",
    status: "Coming soon",
    short: "Azure AD user and group data for allocation.",
    whatWeIngest: [
      "User and group metadata",
      "Role assignments and permissions",
      "Tenant and domain configuration",
      "Directory sync and federated identity"
    ],
    outputs: [
      "Team-based cost allocation",
      "Department and cost center mapping",
      "Access control and audit trails",
      "Compliance reporting"
    ],
    setup: {
      method: "Service Principal with directory read",
      timeToValue: "15–25 minutes",
      permissions: "Read-only, scoped to directory and user data"
    }
  },
  {
    id: "jira",
    name: "Jira",
    category: "Ticketing",
    status: "Coming soon",
    short: "Project and issue tracking for cost attribution.",
    whatWeIngest: [
      "Project and issue metadata",
      "Epic and story tracking",
      "Sprint and team assignment",
      "Custom field and status data"
    ],
    outputs: [
      "Cost allocation by project and epic",
      "Team-level attribution",
      "ROI and delivery cost analysis",
      "Optimization recommendations"
    ],
    setup: {
      method: "API token with project read access",
      timeToValue: "15–20 minutes",
      permissions: "Read-only, scoped to projects and issues"
    }
  },
  {
    id: "servicenow",
    name: "ServiceNow",
    category: "Ticketing",
    status: "Coming soon",
    short: "IT Service Management data for cost and compliance.",
    whatWeIngest: [
      "Configuration items and CMDB data",
      "Incident and change tracking",
      "Service and SLA metrics",
      "Custom record and workflow data"
    ],
    outputs: [
      "Service-level cost allocation",
      "IT cost attribution and chargeback",
      "Compliance and audit reporting",
      "Automation for provisioning and deprovisioning"
    ],
    setup: {
      method: "REST API with service account",
      timeToValue: "20–30 minutes",
      permissions: "Read-only, scoped to CMDB and service data"
    }
  }
];
