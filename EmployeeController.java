package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class EmployeeController {

	 @CrossOrigin(origins = "*")
    @GetMapping("/employees")
    public List<Employee> getEmployees(){

        List<Employee> list = new ArrayList<>();

        list.add(new Employee(1,"Haritha","Developer"));
        list.add(new Employee(2,"Hari","Tester"));

        return list;
    }
}