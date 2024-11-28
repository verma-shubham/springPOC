package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "employees")
@Data
public class Employee {
    @Id
    private Long employeeNo; // 10 chars max

    private String employeeName; // 100 chars max

    private String dateOfJoining; // Format: dd/MM/yyyy

    private String department; // Dropdown values: AD, IT, HD, HR, OP

    private Double salary; // Numeric field
}
