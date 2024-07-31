import { Page } from 'playwright';
export async function helloFlow(page: Page) {
  await page.goto('https://cavalier-cider.flywheelsites.com', {
    waitUntil: 'networkidle'
  });
  // await page.mainFrame().waitForFunction(() => document.querySelector('video')!.paused === false)

  await page.waitForEvent('load');
  await page.screenshot({path: '/Users/main01/projects/load-testing/artillery/example.png'});

  // await page.waitForTimeout(2000);
  // await page.click('#post-29 > div > div > div > div.et_pb_section.et_pb_section_7.et_pb_with_background.et_section_regular > div.et_pb_row.et_pb_row_11 > div.et_pb_column.et_pb_column_1_2.et_pb_column_19.et_pb_css_mix_blend_mode_passthrough.et-last-child > div.et_pb_module.et_pb_code.et_pb_code_0 > div > div > div > header > div > div.tribe-events-c-top-bar__datepicker > button')
  // await page.click('#post-29 > div > div > div > div.et_pb_section.et_pb_section_7.et_pb_with_background.et_section_regular > div.et_pb_row.et_pb_row_11 > div.et_pb_column.et_pb_column_1_2.et_pb_column_19.et_pb_css_mix_blend_mode_passthrough.et-last-child > div.et_pb_module.et_pb_code.et_pb_code_0 > div > div > div > header > div > div.tribe-events-c-top-bar__datepicker > div > div > div.datepicker-months > table > tbody > tr > td > span:nth-child(8)')
}