from datetime import datetime

class TrafficRecord:
    def init(self, plate_number):
        self.plate_number = plate_number
        self.entry_time = datetime.now()
        self.exit_time = None
        self.duration = 0

    def record_exit(self):
        self.exit_time = datetime.now()
        self.duration = (self.exit_time - self.entry_time).seconds // 60
        print(f"مدت توقف: {self.duration} دقیقه")

    def save_record(self):
        print(f"تردد خودرو {self.plate_number} ذخیره شد.")
