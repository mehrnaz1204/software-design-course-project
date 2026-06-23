from car import Car
from driver import Driver
from traffic_record import TrafficRecord
from parking_manager import ParkingManager

# سناریو ۱: ورود خودروی مجاز
print("=== سناریو ۱: ورود خودروی مجاز ===")
driver1 = Driver("علی", "1234567890", "09123456789")
car1 = Car("123ABC", "سواری", True)
manager = ParkingManager()

driver1.request_entry()
if manager.validate_plate(car1.plate_number):
    manager.manage_entry(car1)
    record = TrafficRecord(car1.plate_number)
    record.save_record()

# سناریو ۲: خروج و پرداخت
print("\n=== سناریو ۲: خروج و پرداخت ===")
driver1.request_exit()
record.record_exit()
print("پرداخت انجام شد.")
print("پیامک تأیید ارسال شد.")

# سناریو ۳: خروج اضطراری
print("\n=== سناریو ۳: خروج اضطراری ===")
print("اپراتور خروجی خروج اضطراری را تأیید کرد.")
print("جریمه خروج اضطراری ثبت شد.")
