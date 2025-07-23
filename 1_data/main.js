/*
//input -> html file
//output -> grouped data in weeks 
you are given some html file and you need to extract the data from it.
we will use the cheerio library to parse the html and extract the data.
workflow:  
1. Read the HTML file.
2. Load the HTML into cheerio.
3. Use cheerio to select the elements you want to extract.
4. Extract the text or attributes from the selected elements.

// Next we need to clean the extracted data.
5. Group the data in weekly ranges
 */

const fs = require('fs');
const path = require('path');



// Path to the search history HTML file
const historyFilePath = path.join(__dirname, 'history', 'search-history.html');

// Read the HTML file
const html = fs.readFileSync(historyFilePath, 'utf8');

// Load the HTML into cheerio
const cheerio = require('cheerio');
const $ = cheerio.load(html);

const data = [];

$('.outer-cell.mdl-cell').each((i, outerEl) => {
  const $outer = $(outerEl);

  // Check if this outer block contains "From Google Ads"
  const isAd = $outer.find('.mdl-typography--caption').text().includes('From Google Ads');
  if (isAd) return; // Skip this block

  // Proceed to extract title/date/url
  const contentEl = $outer.find('.content-cell.mdl-typography--body-1').first();

  const title = contentEl.find('a').text().trim();

  const rawHtml = contentEl.html();
  const parts = rawHtml.split('<br>');
  const rawDateStr = parts[parts.length - 1].replace(/<[^>]*>/g, '').trim();

  const parsedDate = new Date(rawDateStr);
  const onlyDate = parsedDate.toISOString().split('T')[0]; // YYYY-MM-DD

  data.push({ title, date: onlyDate });
});
 /* 
 need a function that takes the data and groups them into weeks
 input -> some data
 output data grouped into objects, each object contains the data in a specific range
 */
for(const d of data){
    console.log(d)
}