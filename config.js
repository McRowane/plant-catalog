// Plant Catalog settings. These are the only things you should need to change.
window.CATALOG_CONFIG = {
  // The web app URL from Apps Script (Deploy > Manage deployments). Ends in /exec.
  FEED_URL: "https://script.google.com/macros/s/AKfycbxVRklkFCE5_PmbSo-DLyrEf-FbRVbw47CXRoevquapUzZh7wSbLvvZGv1PrprtY001VA/exec",

  // Ways customers can send their inquiry list. Leave one blank ("") to hide it.
  channels: {
    messenger: "https://m.me/edwdmcrowan",
    instagram: "",   // your Instagram username, e.g. "myplantshop"
    email: ""        // the address inquiries should go to
  },

  // "Ask about just this plant" button in each plant's details.
  contact: {
    label: "Message me on Messenger",
    url: "https://m.me/edwdmcrowan",
    how: "Copy this message, then open Messenger and paste it to me."
  }
};
