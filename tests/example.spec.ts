import { test, expect } from '@playwright/test';

test('foobar', async ({ page }) => {

  // Listen for all console events and handle errors
  // page.on('console', msg => {
  //   if (msg.type() === 'error')
  //     console.log(`Error text: "${msg.text()}" ${msg.location().url}`);
  // });

  // page.on('requestfinished', x=>{
  //   x.response().then(x => console.log( x?.status(), x?.url()))
  // })

  
  // await page.mainFrame().waitForFunction(() => document.querySelector('video')!.paused === false)
  const url = 'wp-content/themes/Divi/core/admin/fonts/fontawesome/fa-brands-400.wof2'
  const trigger = page.waitForResponse('**/themes/Divi/core/admin/fonts/fontawesome/fa-brands-400.woff2');
  await page.goto('https://cavalier-cider.flywheelsites.com');

  await page.screenshot({path: '/Users/main01/projects/load-testing/artillery/start.png', fullPage: true});

  const response = await trigger;
  console.log(response.url);
  await page.screenshot({path: '/Users/main01/projects/load-testing/artillery/done.png', fullPage: true});
});