#!/usr/bin/env python
import bmstools.jbd
import serial
import sys
import time
from pprint import pprint
import json

import requests

class Test:

    def __init__(self):
        s = serial.Serial('/dev/cu.usbmodem51850169391')
        self.j = bmstools.jbd.JBD(s)
        self.j.debug=True

    def test(self):
        self.j.debug=True
        self.j.password = 'abcdef'

        self.j.open()
        for _ in range(3):
            try:
                j._sendPassword()
                print('send password success')
            except Exception as e:
                print(f'attempt {_} error {repr(e)}')

    def clearErrors(self):
        self.j.clearErrors()

    def main(self):

        if 0:
            self.j.clearPasswordNoFactory()
            return

        if 0:
            self.j.clearPassword()
            return

        if 0:
            self.j.setPassword('abcdef')
            return


        if 0:
            self.j.password = 'xxxxxx'
            #self.j.password = bytes(6)
            self.clearErrors()
            return

        if 0:
            print(repr(serial_num_reg))
            print(serial_num_reg.get('serial_num'))
            print(f"serial number: {serial_num_reg.get(serial_num_reg.regName)}")

            reg = j.eeprom_reg_by_regname['error_cnts']
            reg = j.readReg(reg)
            for k,v in reg.items():
                print(k,v)

        while 1:
            time.sleep(1)
            basic = self.j.readBasicInfo()
            cell = self.j.readCellInfo()
            # print(json.dumps(basic, indent = 2))
            # print(json.dumps(cell, indent = 2))
            jsonFileBasic=json.dumps(basic)
            jsonFileCell=json.dumps(cell)
            url = "http://localhost:8446/postBatteryData"
            response = requests.post(url, json={"pack_mv": basic["pack_mv"], "pack_ma": basic["pack_ma"], "cur_cap": basic["cur_cap"], "full_cap": basic["full_cap"], "cycle_cnt": basic["cycle_cnt"], "year": basic["year"], "month": basic["month"], "day": basic["day"], "version": basic["version"], "cap_pct": basic["cap_pct"], "chg_fet_en": basic["chg_fet_en"], "dsg_fet_en": basic["dsg_fet_en"], "ntc_cnt": basic["ntc_cnt"], "cell_cnt": basic["cell_cnt"], "ntc0": basic["ntc0"], "ntc1": basic["ntc1"], "ntc2": basic["ntc2"], "ntc3": basic["ntc3"], "cell0_mv": cell["cell0_mv"], "cell1_mv": cell["cell1_mv"], "cell2_mv": cell["cell2_mv"], "cell3_mv": cell["cell3_mv"], "cell4_mv": cell["cell4_mv"], "cell5_mv": cell["cell5_mv"], "cell6_mv": cell["cell6_mv"], "cell7_mv": cell["cell7_mv"], "cell8_mv": cell["cell8_mv"], "cell9_mv": cell["cell9_mv"], "cell10_mv": cell["cell10_mv"], "cell11_mv": cell["cell11_mv"], "cell12_mv": cell["cell12_mv"], "cell13_mv": cell["cell13_mv"], "cell14_mv": cell["cell4_mv"], "cell15_mv": cell["cell15_mv"], "cell16_mv": cell["cell16_mv"], "cell17_mv": cell["cell17_mv"], "cell18_mv": cell["cell18_mv"], "cell19_mv": cell["cell19_mv"]})
            print(response)
            break


def main():
    test = Test()
    test.main()
main()
