const webhookTopics = [
  "app/scopes_update",
  "app/uninstalled",
  "app_purchases_one_time/update",
  "app_subscriptions/approaching_capped_amount",
  "app_subscriptions/update",
  "audit_events/admin_api_activity",
  "bulk_operations/finish",
  "carts/create",
  "carts/update",
  "channels/delete",
  "checkout_and_accounts_configurations/update",
  "checkouts/create",
  "checkouts/delete",
  "checkouts/update",
  "collection_listings/add",
  "collection_listings/remove",
  "collection_listings/update",
  "collection_publications/create",
  "collection_publications/delete",
  "collection_publications/update",
  "collections/create",
  "collections/delete",
  "collections/update",
  "companies/create",
  "companies/delete",
  "companies/update",
  "company_contact_roles/assign",
  "company_contact_roles/revoke",
  "company_contacts/create",
  "company_contacts/delete",
  "company_contacts/update",
  "company_locations/create",
  "company_locations/delete",
  "company_locations/update",
  "customer.joined_segment",
  "customer.left_segment",
  "customer.tags_added",
  "customer.tags_removed",
  "customer_account_settings/update",
  "customer_groups/create",
  "customer_groups/delete",
  "customer_groups/update",
  "customer_payment_methods/create",
  "customer_payment_methods/revoke",
  "customer_payment_methods/update",
  "customers/create",
  "customers/data_request",
  "customers/delete",
  "customers/disable",
  "customers/enable",
  "customers/merge",
  "customers/purchasing_summary",
  "customers/redact",
  "customers/update",
  "customers_email_marketing_consent/update",
  "customers_marketing_consent/update",
  "delivery_promise_settings/update",
  "discounts/create",
  "discounts/delete",
  "discounts/redeemcode_added",
  "discounts/redeemcode_removed",
  "discounts/update",
  "disputes/create",
  "disputes/update",
  "domains/create",
  "domains/destroy",
  "domains/update",
  "draft_orders/create",
  "draft_orders/delete",
  "draft_orders/update",
  "finance_app_staff_member/delete",
  "finance_app_staff_member/grant",
  "finance_app_staff_member/revoke",
  "finance_app_staff_member/update",
  "finance_kyc_information/update",
  "fulfillment_events/create",
  "fulfillment_events/delete",
  "fulfillment_holds/added",
  "fulfillment_holds/released",
  "fulfillment_orders/cancellation_request_accepted",
  "fulfillment_orders/cancellation_request_rejected",
  "fulfillment_orders/cancellation_request_submitted",
  "fulfillment_orders/cancelled",
  "fulfillment_orders/fulfillment_request_accepted",
  "fulfillment_orders/fulfillment_request_rejected",
  "fulfillment_orders/fulfillment_request_submitted",
  "fulfillment_orders/fulfillment_service_failed_to_complete",
  "fulfillment_orders/hold_released",
  "fulfillment_orders/line_items_prepared_for_local_delivery",
  "fulfillment_orders/line_items_prepared_for_pickup",
  "fulfillment_orders/merged",
  "fulfillment_orders/moved",
  "fulfillment_orders/order_routing_complete",
  "fulfillment_orders/placed_on_hold",
  "fulfillment_orders/rescheduled",
  "fulfillment_orders/scheduled_fulfillment_order_ready",
  "fulfillment_orders/split",
  "fulfillments/create",
  "fulfillments/update",
  "inventory_items/create",
  "inventory_items/delete",
  "inventory_items/update",
  "inventory_levels/connect",
  "inventory_levels/disconnect",
  "inventory_levels/update",
  "locales/create",
  "locales/update",
  "locations/activate",
  "locations/create",
  "locations/deactivate",
  "locations/delete",
  "locations/update",
  "markets/create",
  "markets/delete",
  "markets/update",
  "markets_backup_region/update",
  "metafield_definitions/create",
  "metafield_definitions/delete",
  "metafield_definitions/update",
  "metaobjects/create",
  "metaobjects/delete",
  "metaobjects/update",
  "order_transactions/create",
  "orders/cancelled",
  "orders/create",
  "orders/delete",
  "orders/edited",
  "orders/fulfilled",
  "orders/paid",
  "orders/partially_fulfilled",
  "orders/risk_assessment_changed",
  "orders/shopify_protect_eligibility_changed",
  "orders/updated",
  "payment_schedules/due",
  "payment_terms/create",
  "payment_terms/delete",
  "payment_terms/update",
  "product_feeds/create",
  "product_feeds/full_sync",
  "product_feeds/full_sync_finish",
  "product_feeds/incremental_sync",
  "product_feeds/update",
  "product_listings/add",
  "product_listings/remove",
  "product_listings/update",
  "product_publications/create",
  "product_publications/delete",
  "product_publications/update",
  "products/create",
  "products/delete",
  "products/update",
  "profiles/create",
  "profiles/delete",
  "profiles/update",
  "refunds/create",
  "returns/approve",
  "returns/cancel",
  "returns/close",
  "returns/decline",
  "returns/reopen",
  "returns/request",
  "returns/update",
  "reverse_deliveries/attach_deliverable",
  "reverse_fulfillment_orders/dispose",
  "scheduled_product_listings/add",
  "scheduled_product_listings/remove",
  "scheduled_product_listings/update",
  "segments/create",
  "segments/delete",
  "segments/update",
  "selling_plan_groups/create",
  "selling_plan_groups/delete",
  "selling_plan_groups/update",
  "shipping_addresses/create",
  "shipping_addresses/update",
  "shop/redact",
  "shop/update",
  "subscription_billing_attempts/challenged",
  "subscription_billing_attempts/failure",
  "subscription_billing_attempts/success",
  "subscription_billing_cycle_edits/create",
  "subscription_billing_cycle_edits/delete",
  "subscription_billing_cycle_edits/update",
  "subscription_billing_cycles/skip",
  "subscription_billing_cycles/unskip",
  "subscription_contracts/activate",
  "subscription_contracts/cancel",
  "subscription_contracts/create",
  "subscription_contracts/expire",
  "subscription_contracts/fail",
  "subscription_contracts/pause",
  "subscription_contracts/update",
  "tax_services/create",
  "tax_services/update",
  "tender_transactions/create",
  "themes/create",
  "themes/delete",
  "themes/publish",
  "themes/update",
  "variants/in_stock",
  "variants/out_of_stock",
];

export default webhookTopics;
