class Employee
    def initialize(employee_name, title, salary, boss)
        @employee_name = employee_name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        if !title.include?("manager")
            self.salary * multiplier
        else
            sum = self.salary
            
            self.employees
        end
    end
end

class Manager
    extend Employee
    def initialize(manager_name)
        @manager_name = manager_name
        @employees = []

    end
end