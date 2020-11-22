package com.finalproject.med_manager.controller;

import com.finalproject.med_manager.model.Student;
import com.finalproject.med_manager.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class StudentController {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    //get all Students
    @GetMapping("/Student")
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }
}
