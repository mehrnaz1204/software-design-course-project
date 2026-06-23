class Car:
    def init(self, plate_number, vehicle_type, is_authorized=False):
        self.plate_number = plate_number
        self.vehicle_type = vehicle_type
        self.is_authorized = is_authorized

    def get_plate_number(self):
        return self.plate_number

    def check_authorization(self):
        return self.is_authorized
