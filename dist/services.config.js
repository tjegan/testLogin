// uncomment only if it's in use, to pass linting
// const STUB_API_ADDRESS = 'http://10.150.88.70:8099/MockServices/DSCPortal';
let LIVE_API_ADDRESS = 'https://api-dev.dev.dev-cglcloud.com/api/dxo/dsc/v1/auth';
let DOCUMENT_LIVE_API_ADDRESS = 'https://api-dev.dev.dev-cglcloud.com/api/dxo/documents/v1/auth';
if (window.__APP_CONFIG__ && window.__APP_CONFIG__.api) {
  LIVE_API_ADDRESS = window.__APP_CONFIG__.api.host + window.__APP_CONFIG__.api.path;
}
if(window.__APP_CONFIG__ && window.__APP_CONFIG__.document_api) {
  DOCUMENT_LIVE_API_ADDRESS = window.__APP_CONFIG__.document_api.host + window.__APP_CONFIG__.document_api.path;
}

const config = {
  getContracts: {
    url: `${LIVE_API_ADDRESS}/contractList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getTotalContracts: {
    url: `${LIVE_API_ADDRESS}/contractTotalCount`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  contract: {
    url: `${LIVE_API_ADDRESS}/contract`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getContractDetails: {
    url: `${LIVE_API_ADDRESS}/contractByCakNO`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getPayments: {
    url: `${LIVE_API_ADDRESS}/paymentList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getContractInvoices: {
    url: `${LIVE_API_ADDRESS}/invoiceList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  deleteInvoice: {
    url: `${LIVE_API_ADDRESS}/invoice`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  addInvoice: {
    url: `${LIVE_API_ADDRESS}/invoice`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchContractStatus: {
    url: `${LIVE_API_ADDRESS}/updateContract`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getArrivalSchedules: {
    url: `${LIVE_API_ADDRESS}/arrivalScheduleList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getPickupSchedules: {
    url: `${LIVE_API_ADDRESS}/pickUpScheduleList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  postPickupSchedule: {
    url: `${LIVE_API_ADDRESS}/pickUpSchedule`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  postPayment: {
    url: `${LIVE_API_ADDRESS}/payment`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  postPaymentReminder: {
    url: `${LIVE_API_ADDRESS}/paymentReminding`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchPaymentSighted: {
    url: `${LIVE_API_ADDRESS}/updatePayment`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  addArrivalSchedule: {
    url: `${LIVE_API_ADDRESS}/arrivalSchedule`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchArrivalSchedule: {
    url: `${LIVE_API_ADDRESS}/updateArrivalSchedule`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  addQtyToTotalApproved: {
    url: `${LIVE_API_ADDRESS}/updateApprovedQuantity`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchPaymentDueDate: {
    url: `${LIVE_API_ADDRESS}/updatePayment`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchAddEditPickup: {
    url: `${LIVE_API_ADDRESS}/updatePickUpSchedule`,
    retry: 0,
    interval: 0,
    timeout: 200
  },
  deletePickupSchedule: {
    url: `${LIVE_API_ADDRESS}/pickUpSchedule`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchEditArrivalSchedule: {
    url: `${LIVE_API_ADDRESS}/updatePickUpSchedule`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  checkInManual: {
    url: `${LIVE_API_ADDRESS}/inventory`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getInventoryList: {
    url: `${LIVE_API_ADDRESS}/inventoryList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  downloadQRCode: {
    url: `${LIVE_API_ADDRESS}/generateQRCode`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getSummaryAndTotalInventory: {
    url: `${LIVE_API_ADDRESS}/summaryAndTotalInventory`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getTotalInventoryDownload: {
    url: `${LIVE_API_ADDRESS}/downloadInventoryCSV`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getInvoiceDownload: {
    url: `${LIVE_API_ADDRESS}/downloadInvoiceCSV`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getAlerts: {
    url: `${LIVE_API_ADDRESS}/alertList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  postAlert: {
    url: `${LIVE_API_ADDRESS}/alert`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchAlert: {
    url: `${LIVE_API_ADDRESS}/updateAlert`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchDeleteAlerts: {
    url: `${LIVE_API_ADDRESS}/updateAlert`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchInventoryDetails: {
    url: `${LIVE_API_ADDRESS}/updateInventory`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  searchCustomer: {
    url: `${LIVE_API_ADDRESS}/customerList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getCommodityList: {
    url: `${LIVE_API_ADDRESS}/commodityproducts`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getDocument: {
    url: `${DOCUMENT_LIVE_API_ADDRESS}/download`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  postFile: {
    url: `${DOCUMENT_LIVE_API_ADDRESS}/upload`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchPaymentUpdate: {
    url: `${LIVE_API_ADDRESS}/updatePayment`,
    retry: 0,
    interval: 0,
    timeout: 2000
  }
};

export default config;
