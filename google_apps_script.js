/**
 * Google Apps Script — Automatic Google Sheet Collector for SHP Technology
 * 
 * INSTRUCTIONS TO LINK TO YOUR GOOGLE SHEET:
 * 1. Open Google Sheets (https://sheets.new) and create a new spreadsheet named "SHP Website Subscribers".
 * 2. In row 1, set the column headers:
 *    Col A: Timestamp | Col B: Email | Col C: Name | Col D: Company | Col E: Subject | Col F: Message | Col G: Source
 * 3. Click "Extensions" -> "Apps Script" in the Google Sheet top menu.
 * 4. Replace all code in the editor with this script and click Save (💾 icon).
 * 5. Click "Deploy" -> "New deployment".
 * 6. Select Type: "Web app".
 * 7. Set "Execute as": "Me".
 * 8. Set "Who has access": "Anyone" (CRITICAL: Must select 'Anyone' so the website can post data).
 * 9. Click "Deploy", authorize permissions, and copy the Web App URL (starts with https://script.google.com/macros/s/.../exec).
 * 10. Run this command in your terminal to save your Web App URL to GitHub:
 *     gh variable set VITE_GOOGLE_SHEET_WEBHOOK_URL --body "YOUR_COPIED_WEB_APP_URL"
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};
    
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }
    
    var timestamp = data.timestamp || new Date().toISOString();
    var email = data.email || '';
    var name = data.name || '';
    var company = data.company || '';
    var subject = data.subject || '';
    var message = data.message || '';
    var source = data.source || 'Website Submission';
    
    // Append a new row to your Google Sheet spreadsheet
    sheet.appendRow([
      timestamp,
      email,
      name,
      company,
      subject,
      message,
      source
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', status: 200 }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active', message: 'SHP Technology Google Sheet Webhook is online.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
