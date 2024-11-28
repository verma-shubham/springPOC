package com.example.demo.service;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    public void deleteAll() {
        repository.deleteAll();
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Employee findByEmployeeNo(Long employeeNo) {
        return repository.findByEmployeeNo(employeeNo);
    }

    public Employee findByEmployeeName(String employeeName) {
        return repository.findByEmployeeName(employeeName);
    }
}
