import axios from "axios"
const iconsalineAPI = axios.create({
  baseURL: "https://icons-aline-022824-134114.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return iconsalineAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_community_list(payload) {
  return iconsalineAPI.get(`/api/v1/community/`)
}
function api_v1_community_create(payload) {
  return iconsalineAPI.post(`/api/v1/community/`, payload)
}
function api_v1_community_retrieve(payload) {
  return iconsalineAPI.get(`/api/v1/community/${payload.id}/`)
}
function api_v1_community_update(payload) {
  return iconsalineAPI.put(`/api/v1/community/${payload.id}/`, payload)
}
function api_v1_community_partial_update(payload) {
  return iconsalineAPI.patch(`/api/v1/community/${payload.id}/`, payload)
}
function api_v1_community_destroy(payload) {
  return iconsalineAPI.delete(`/api/v1/community/${payload.id}/`)
}
function api_v1_integration_list(payload) {
  return iconsalineAPI.get(`/api/v1/integration/`)
}
function api_v1_integration_create(payload) {
  return iconsalineAPI.post(`/api/v1/integration/`, payload)
}
function api_v1_integration_retrieve(payload) {
  return iconsalineAPI.get(`/api/v1/integration/${payload.id}/`)
}
function api_v1_integration_update(payload) {
  return iconsalineAPI.put(`/api/v1/integration/${payload.id}/`, payload)
}
function api_v1_integration_partial_update(payload) {
  return iconsalineAPI.patch(`/api/v1/integration/${payload.id}/`, payload)
}
function api_v1_integration_destroy(payload) {
  return iconsalineAPI.delete(`/api/v1/integration/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return iconsalineAPI.post(`/api/v1/login/`, payload)
}
function api_v1_order_list(payload) {
  return iconsalineAPI.get(`/api/v1/order/`)
}
function api_v1_order_create(payload) {
  return iconsalineAPI.post(`/api/v1/order/`, payload)
}
function api_v1_order_retrieve(payload) {
  return iconsalineAPI.get(`/api/v1/order/${payload.id}/`)
}
function api_v1_order_update(payload) {
  return iconsalineAPI.put(`/api/v1/order/${payload.id}/`, payload)
}
function api_v1_order_partial_update(payload) {
  return iconsalineAPI.patch(`/api/v1/order/${payload.id}/`, payload)
}
function api_v1_order_destroy(payload) {
  return iconsalineAPI.delete(`/api/v1/order/${payload.id}/`)
}
function api_v1_productlisting_list(payload) {
  return iconsalineAPI.get(`/api/v1/productlisting/`)
}
function api_v1_productlisting_create(payload) {
  return iconsalineAPI.post(`/api/v1/productlisting/`, payload)
}
function api_v1_productlisting_retrieve(payload) {
  return iconsalineAPI.get(`/api/v1/productlisting/${payload.id}/`)
}
function api_v1_productlisting_update(payload) {
  return iconsalineAPI.put(`/api/v1/productlisting/${payload.id}/`, payload)
}
function api_v1_productlisting_partial_update(payload) {
  return iconsalineAPI.patch(`/api/v1/productlisting/${payload.id}/`, payload)
}
function api_v1_productlisting_destroy(payload) {
  return iconsalineAPI.delete(`/api/v1/productlisting/${payload.id}/`)
}
function api_v1_report_list(payload) {
  return iconsalineAPI.get(`/api/v1/report/`)
}
function api_v1_report_create(payload) {
  return iconsalineAPI.post(`/api/v1/report/`, payload)
}
function api_v1_report_retrieve(payload) {
  return iconsalineAPI.get(`/api/v1/report/${payload.id}/`)
}
function api_v1_report_update(payload) {
  return iconsalineAPI.put(`/api/v1/report/${payload.id}/`, payload)
}
function api_v1_report_partial_update(payload) {
  return iconsalineAPI.patch(`/api/v1/report/${payload.id}/`, payload)
}
function api_v1_report_destroy(payload) {
  return iconsalineAPI.delete(`/api/v1/report/${payload.id}/`)
}
function api_v1_review_list(payload) {
  return iconsalineAPI.get(`/api/v1/review/`)
}
function api_v1_review_create(payload) {
  return iconsalineAPI.post(`/api/v1/review/`, payload)
}
function api_v1_review_retrieve(payload) {
  return iconsalineAPI.get(`/api/v1/review/${payload.id}/`)
}
function api_v1_review_update(payload) {
  return iconsalineAPI.put(`/api/v1/review/${payload.id}/`, payload)
}
function api_v1_review_partial_update(payload) {
  return iconsalineAPI.patch(`/api/v1/review/${payload.id}/`, payload)
}
function api_v1_review_destroy(payload) {
  return iconsalineAPI.delete(`/api/v1/review/${payload.id}/`)
}
function api_v1_shop_list(payload) {
  return iconsalineAPI.get(`/api/v1/shop/`)
}
function api_v1_shop_create(payload) {
  return iconsalineAPI.post(`/api/v1/shop/`, payload)
}
function api_v1_shop_retrieve(payload) {
  return iconsalineAPI.get(`/api/v1/shop/${payload.id}/`)
}
function api_v1_shop_update(payload) {
  return iconsalineAPI.put(`/api/v1/shop/${payload.id}/`, payload)
}
function api_v1_shop_partial_update(payload) {
  return iconsalineAPI.patch(`/api/v1/shop/${payload.id}/`, payload)
}
function api_v1_shop_destroy(payload) {
  return iconsalineAPI.delete(`/api/v1/shop/${payload.id}/`)
}
function api_v1_shopanalytics_list(payload) {
  return iconsalineAPI.get(`/api/v1/shopanalytics/`)
}
function api_v1_shopanalytics_create(payload) {
  return iconsalineAPI.post(`/api/v1/shopanalytics/`, payload)
}
function api_v1_shopanalytics_retrieve(payload) {
  return iconsalineAPI.get(`/api/v1/shopanalytics/${payload.id}/`)
}
function api_v1_shopanalytics_update(payload) {
  return iconsalineAPI.put(`/api/v1/shopanalytics/${payload.id}/`, payload)
}
function api_v1_shopanalytics_partial_update(payload) {
  return iconsalineAPI.patch(`/api/v1/shopanalytics/${payload.id}/`, payload)
}
function api_v1_shopanalytics_destroy(payload) {
  return iconsalineAPI.delete(`/api/v1/shopanalytics/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return iconsalineAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_user_list(payload) {
  return iconsalineAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return iconsalineAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return iconsalineAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return iconsalineAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return iconsalineAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return iconsalineAPI.delete(`/api/v1/user/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return iconsalineAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return iconsalineAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return iconsalineAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return iconsalineAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return iconsalineAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return iconsalineAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return iconsalineAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return iconsalineAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return iconsalineAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return iconsalineAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return iconsalineAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_community_list,
  api_v1_community_create,
  api_v1_community_retrieve,
  api_v1_community_update,
  api_v1_community_partial_update,
  api_v1_community_destroy,
  api_v1_integration_list,
  api_v1_integration_create,
  api_v1_integration_retrieve,
  api_v1_integration_update,
  api_v1_integration_partial_update,
  api_v1_integration_destroy,
  api_v1_login_create,
  api_v1_order_list,
  api_v1_order_create,
  api_v1_order_retrieve,
  api_v1_order_update,
  api_v1_order_partial_update,
  api_v1_order_destroy,
  api_v1_productlisting_list,
  api_v1_productlisting_create,
  api_v1_productlisting_retrieve,
  api_v1_productlisting_update,
  api_v1_productlisting_partial_update,
  api_v1_productlisting_destroy,
  api_v1_report_list,
  api_v1_report_create,
  api_v1_report_retrieve,
  api_v1_report_update,
  api_v1_report_partial_update,
  api_v1_report_destroy,
  api_v1_review_list,
  api_v1_review_create,
  api_v1_review_retrieve,
  api_v1_review_update,
  api_v1_review_partial_update,
  api_v1_review_destroy,
  api_v1_shop_list,
  api_v1_shop_create,
  api_v1_shop_retrieve,
  api_v1_shop_update,
  api_v1_shop_partial_update,
  api_v1_shop_destroy,
  api_v1_shopanalytics_list,
  api_v1_shopanalytics_create,
  api_v1_shopanalytics_retrieve,
  api_v1_shopanalytics_update,
  api_v1_shopanalytics_partial_update,
  api_v1_shopanalytics_destroy,
  api_v1_signup_create,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
