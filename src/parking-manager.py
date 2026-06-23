class ParkingManager:
    def init(self, max_capacity=50):
        self.max_capacity = max_capacity
        self.current_cars = 0
        self.authorized_cars = ["123ABC", "456DEF"]

    def validate_plate(self, plate):
        return plate in self.authorized_cars

    def manage_entry(self, car):
        if self.current_cars < self.max_capacity and car.check_authorization():
            self.current_cars += 1
            print(f"خودرو {car.plate_number} وارد شد.")
            return True
        else:
            print(f"ورود خودرو {car.plate_number} مجاز نیست.")
            return False

    def manage_exit(self, car):
        self.current_cars -= 1
        print(f"خودرو {car.plate_number} خارج شد.")
        return True
