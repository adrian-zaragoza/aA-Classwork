class Employee
    def initialize(employee_name, title, salary, boss)
        @employee_name = employee_name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        if self.employees.empty?
            self.salary * multiplier
        else
            sum = 0
            people = self.employees
            unless people.empty?
                person = people.shift
                sum += person.salary
                person.employees.each do |emp|
                    people << emp
                end
            end
            sum * multiplier
        end
    end
end

class Manager < Employee

    def initialize(name, title, salary, boss)
        @employees = []
        super
    end
end