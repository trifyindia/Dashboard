import requests

url = "http://localhost:8446/postBatteryData"
data = {"pack_mv": 80240, "pack_ma": 0, "cur_cap": 0, "full_cap": 32510, "cycle_cnt": 2, "year": 2022, "month": 6, "day": 13, "bal0": false, "bal1": False, "bal2": False, "bal3": False, "bal4": False, "bal5": False, "bal6": False, "bal7": False, "bal8": False, "bal9": False, "bal10": False, "bal11": False, "bal12": False, "bal13": False, "bal14": False, "bal15": False, "bal16": False, "bal17": False, "bal18": False, "bal19": False, "bal20": False, "bal21": False, "bal22": False, "bal23": False, "bal24": False, "bal25": False, "bal26": False, "bal27": False, "bal28": False, "bal29": False, "bal30": False, "bal31": False, "covp_err": False, "cuvp_err": False, "povp_err": False, "puvp_err": False, "chgot_err": False, "chgut_err": False, "dsgot_err": False, "dsgut_err": False, "chgoc_err": False, "dsgoc_err": False, "sc_err": False, "afe_err": False, "software_err": False, "version": 32, "cap_pct": 0, "chg_fet_en": True, "dsg_fet_en": True, "ntc_cnt": 4, "cell_cnt": 20, "ntc0": 30.8, "ntc1": 28.8, "ntc2": 27.2, "ntc3": 27.4, "ntc4": 0, "ntc5": 0, "ntc6": 0, "ntc7": 0, "fault_raw": 0, "bal_raw": 0}

response = requests.post(url, json=data)
print(response.status_code)  # Print the status code of the response
print(response.text)  # Print the response content

# Handle the response according to the status code
if response.status_code == 200:
    print("POST request was successful.")
else:
    print("POST request failed with status code:", response.status_code)