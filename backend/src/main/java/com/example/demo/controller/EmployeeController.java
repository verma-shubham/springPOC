package com.example.demo.controller;

import com.example.demo.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.service.EmployeeService;

import java.util.List;

@RestController
@RequestMapping("/api/emp")
public class EmployeeController {
    @Autowired
    private EmployeeService service;

    @PostMapping("/save")
    public Employee saveEmployee(@RequestBody Employee employee) {
        return service.saveEmployee(employee);
    }

//    @DeleteMapping("/clear")
//    public String clearData() {
//        service.deleteAll();
//        return "All employee data cleared";
//    }

    @GetMapping("/all")
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    @GetMapping("/search-by-no/{employeeNo}")
    public Employee getByEmployeeNo(@PathVariable Long employeeNo) {
        return service.findByEmployeeNo(employeeNo);
    }

    @GetMapping("/search-by-name/{employeeName}")
    public Employee getByEmployeeName(@PathVariable String employeeName) {
        return service.findByEmployeeName(employeeName);
    }
}
