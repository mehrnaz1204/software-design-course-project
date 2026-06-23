class Driver:
    def init(self, name, national_id, phone_number):
        self.name = name
        self.national_id = national_id
        self.phone_number = phone_number

    def request_entry(self):
        print(f"{self.name} درخواست ورود داد.")

    def request_exit(self):
        print(f"{self.name} درخواست خروج داد.")
