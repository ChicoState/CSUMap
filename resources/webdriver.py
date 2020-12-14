import time
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

selenium_grid_url = "https://ondemand.us-west-1.saucelabs.com:443"

# Create a desired capabilities object as a starting point.
#capabilities = DesiredCapabilities.CHROME.copy()
#capabilities['platform'] = "WINDOWS"
#capabilities['version'] = "10"

#with webdriver.Chrome("./chromedriver") as driver:
#with webdriver.Remote("https://Noxium:a71bcbaa-f950-402c-943b-f719caf1b8b2@ondemand.us-west-1.saucelabs.com:443/wd/hub") as driver:
with webdriver.Remote("https://Noxium:a71bcbaa-f950-402c-943b-f719caf1b8b2@ondemand.us-west-1.saucelabs.com:443/wd/hub", desired_capabilities=DesiredCapabilities.CHROME.copy()) as driver:
  wait = WebDriverWait(driver, 10)
  driver.get('https://csu-map.herokuapp.com/')
  select = Select(driver.find_element_by_id("id_buildingName"))
  select.select_by_visible_text('Holt Hall')
  time.sleep(1)
  driver.find_element_by_id("submit_main").click()
  assert(driver.find_element_by_id("text").text == 'Holt Hall')
  print("[SELENIUM] All tests passed")

