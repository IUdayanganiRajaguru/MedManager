package com.finalproject.med_manager.controller;

import com.finalproject.med_manager.exception.ResourceNotFoundException;
import com.finalproject.med_manager.model.Student;
import com.finalproject.med_manager.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:3000")
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

    //create Student REST API
    @PostMapping("/Student")
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    //get Student by id REST API
    @GetMapping("/Student/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Integer id){
        Student student = studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not Exist with id :" +id));
        return ResponseEntity.ok(student);
    }

    //update Student REST API
    @PutMapping("/Student/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Integer id, @RequestBody Student studentDetails){
        Student student= studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not Exist with id :" + id));

        student.setFirstName(studentDetails.getFirstName());
        student.setLastName(studentDetails.getLastName());
        student.setAge(studentDetails.getAge());
        student.setFaculty(studentDetails.getFaculty());
        student.setGender(studentDetails.getGender());
        student.setEmail(studentDetails.getEmail());
        student.setAddress(studentDetails.getAddress());
        student.setContactNumber(studentDetails.getContactNumber());
        student.setStayingPlace(studentDetails.getStayingPlace());
        student.setHeight(studentDetails.getHeight());
        student.setWeight(studentDetails.getWeight());
        student.setAllergies(studentDetails.getAllergies());
        student.setChronicDisease(studentDetails.getChronicDisease());

        Student updatedStudent = studentRepository.save(student);
        return ResponseEntity.ok(updatedStudent);
    }

    //delete Student REST API
    @DeleteMapping("/Student/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Integer id){
        Student student = studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not Exist with id :" +id));

        studentRepository.delete(student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
