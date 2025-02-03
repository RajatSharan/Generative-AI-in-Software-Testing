// @ts-check
import { test, expect } from '@playwright/test';
import {ai} from '@zerostep/playwright'
test('AI Test Capability', async ({ page }) => {
  const aiArgs={page,test}
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  const discountPrice=await ai("what is the Discount price of Tomato",aiArgs)
  const price=await ai("what is the price of Tomato",aiArgs)
  expect(discountPrice).toEqual("26")
  const difference=await ai("what is the value difference Discount price and Price of Tomato",aiArgs)
  expect(difference).toEqual("11")
  console.log(price)
  await page.goto("https://rahulshettyacademy.com/dropdownsPractise/")
  const blinkText=await ai("get the blinking text",aiArgs)
  expect(blinkText).toEqual("Free Access to InterviewQues/ResumeAssistance/Material")
  const firstValue=await ai('Split ${blinkText} with "/" and give the 0th index',aiArgs)
  console.log(firstValue)
 expect(firstValue).toEqual("Free Access to InterviewQues")
});

