package com.example.demo.repository;

import com.example.demo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;


public interface EmployeeRepository extends JpaRepository<Employee, Long>  {
    Employee findByEmployeeNo(Long employeeNo);
    Employee findByEmployeeName(String employeeName);
}
