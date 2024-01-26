import puppeteer from 'puppeteer';
require('dotenv').config();
import * as main from './dir/mainApi';


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url: string = process.env.BASE_URL as string;
  
  try {
    // console.log('testUrl : ', url);
  
    main.mainList(url, page);
    main.mainTestList(url);
    await page.goto(url);

    // Type into search box
    const pageTitle = await page.title();
    // console.log('pageTitle : ', pageTitle)
    if (pageTitle === 'My Next.js App') {
      // console.log('테스트 통과: 제목이 올바릅니다.');
    } else {
      // console.error('테스트 실패: 제목이 올바르지 않습니다.');
    }


    // Print the results
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await browser.close();
  }
})();