import time
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.ui import Select

with webdriver.Chrome("./chromedriver") as driver:
  wait = WebDriverWait(driver, 10)
  driver.get('http://localhost:8000/')
  select = Select(driver.find_element_by_id("id_buildingName"))
  select.select_by_visible_text('Holt Hall')
  time.sleep(1)
  driver.find_element_by_id("submit_main").click()
  assert(driver.find_element_by_id("text").text == 'Holt Hall')
  print("[SELENIUM] All tests passed")

